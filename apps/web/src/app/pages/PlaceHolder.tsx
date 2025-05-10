"use client";

import { useQuery } from "@apollo/client";

import { GET_APP_NAME } from "@graphql/queries/getAppName";

export default function PlaceholderPage() {
  const { data, loading, error } = useQuery(GET_APP_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{data.appName} arrive bientôt</h1>
    </div>
  );
}
