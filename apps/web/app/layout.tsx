import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
