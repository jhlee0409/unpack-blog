"use client";

import { NavSection } from "@/components/NavSection/NavSection";
import classes from "./RootLayout.module.scss";
import { Header } from "@/components/Header/Header";
export const RootLayout = ({
  children,
  categories,
}: {
  categories: any;
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.container}>
      <NavSection categories={categories} />
      <div className={classes.contentSection}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
