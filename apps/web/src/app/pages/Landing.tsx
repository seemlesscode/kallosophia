"use client";

import { useQuery } from "@apollo/client";

import { GET_APP_NAME } from "@graphql/queries/getAppName";
import MainLayout from "@components/layouts/MainLayout";

export default function LandingPage() {
  const { data, loading, error } = useQuery(GET_APP_NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <MainLayout>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">{data.appName}</h1>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Play
        </button>
        <div className="mt-10 w-full"></div>
      </main>
    </MainLayout>
  );
}
