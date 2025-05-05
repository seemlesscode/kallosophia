import "./globals.css";
import ApolloWrapper from "../lib/ApolloWrapper";

import type { Metadata } from "next/types";

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
