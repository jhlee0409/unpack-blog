import type { Metadata } from "next";
import "./globals.css";
import { RootLayout } from "@/components/Layout/RootLayout/RootLayout";

export const metadata: Metadata = {
  title: "Unpack Blog",
  description: "Welcome My World",
};

export default function RootLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
