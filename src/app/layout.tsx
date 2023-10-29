import type { Metadata } from "next";
import "./globals.css";
import { RootLayout } from "@/components/Layout/RootLayout/RootLayout";
import { getPostCategory } from "@/helper/middle";

export const metadata: Metadata = {
  title: "Unpack Blog",
  description: "Welcome My World",
};

export const getCategory = async () => {
  const categories = getPostCategory();
  return categories;
};

export default async function RootLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategory();

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <RootLayout categories={categories}>{children}</RootLayout>
      </body>
    </html>
  );
}
