import { ApolloServer } from '@apollo/server'
import express from 'express'
import type { Request, Response } from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { makeExecutableSchema } from '@graphql-tools/schema'
import http from 'http'
import cors from 'cors'
import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'
import { PrismaClient } from '@prisma/client'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/use/ws'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const prisma = new PrismaClient()

const PORT = 4000

interface ExpressContext {
  req: Request
  res: Response
}

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}

const ctx = async ({ req, res }: ExpressContext) => ({ req, res, prisma })

async function startApolloServer() {
  const app = express()
  const httpServer = http.createServer(app)

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  })

  const serverCleanup = useServer({ schema }, wsServer)
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            },
          }
        },
      },
    ],
    introspection: true,
  })

  await server.start()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(corsOptions),
    express.json(),
    expressMiddleware(server, {
      context: ctx,
    }),
  )

  await new Promise<void>((resolve) =>
    httpServer.listen(
      {
        host: '0.0.0.0',
        port: PORT,
      },
      resolve,
    ),
  )

  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
}

startApolloServer()
