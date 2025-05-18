import "@styles/globals.css";

import type { Metadata } from "next/types";
import ApolloWrapper from "@lib/ApolloWrapper";

export const metadata: Metadata = {
  title: "Kallosophia",
  description: "Get to know beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
