import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import classes from "@/styles/mdx-components.module.scss";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className={classes.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={classes.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={classes.h3}>{children}</h3>,
    h4: ({ children }) => <h4 className={classes.h4}>{children}</h4>,
    h5: ({ children }) => <h5 className={classes.h5}>{children}</h5>,
    h6: ({ children }) => <h6 className={classes.h6}>{children}</h6>,
    code: ({ children }) => <code className={classes.code}>{children}</code>,
    ul: ({ children }) => <ul className={classes.ul}>{children}</ul>,
    a: ({ children, ...props }) => (
      <a {...props} style={{ textDecoration: "underline" }} target="_blank">
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...props}
        alt="asd"
      />
    ),
    ...components,
  };
}
