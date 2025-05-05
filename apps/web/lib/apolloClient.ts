import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default client;
