"use client";

import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

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
      <div>
        <p>{props.meta.title}</p>
        <p>{props.meta.date}</p>
        <p>{props.meta.author}</p>
        <p>{props.meta.summary}</p>
        <div>
          {props.meta.tags.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>
      {children}
    </MDXProvider>
  );
}

export default MdxLayout;
