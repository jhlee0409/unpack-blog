"use client";

import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { PostSummaryBox } from "@/components/postSummaryBox/PostSummaryBox";

interface LayoutProps {
  children: React.ReactNode;
  meta: {
    author: string;
    title: string;
    summary: string;
    tags: string[];
    date: string;
  };
}

function MdxLayout({ children, ...props }: LayoutProps) {
  return (
    <MDXProvider>
      <Head>
        <title>{props.meta.title}</title>
        <meta name="description" content={props.meta.title} />
      </Head>
      <PostSummaryBox {...props.meta} />

      {children}
    </MDXProvider>
  );
}

export default MdxLayout;
