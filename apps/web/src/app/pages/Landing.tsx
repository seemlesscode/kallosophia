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
      <main className="min-h-screen flex items-center justify-center text-center bg-[url('/images/botticelli_venus_bg.jpg')] bg-cover bg-no-repeat">
        <div className="w-full flex justify-center items-center">
          <button className="w-[200px] h-[200px] md:w-[700px] bg-[var(--color-background)] text-[var(--color-primary)] ds-text-landing border border-[var(--color-primary)] cursor-pointer">
            <h1 className="block md:hidden">{data.appName[0]}</h1>
            <h1 className="hidden md:block">{data.appName}</h1>
          </button>
        </div>
      </main>
    </MainLayout>
  );
}
