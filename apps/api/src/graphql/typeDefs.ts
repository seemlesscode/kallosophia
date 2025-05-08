import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    appName: String!
  }
`;
