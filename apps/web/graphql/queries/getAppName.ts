import { gql } from "@apollo/client";

export const GET_APP_NAME = gql`
  query GetAppName {
    appName
  }
`;
