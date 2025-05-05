"use client";

import { useQuery, gql } from "@apollo/client";

const GET_APP_NAME = gql`
  query GetAppName {
    appName
  }
`;

export default function HomePage() {
  const { data, loading, error } = useQuery(GET_APP_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{data.appName} arrive bientôt</h1>
    </div>
  );
}
