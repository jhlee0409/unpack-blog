"use client";

import { NavSection } from "@/components/NavSection/NavSection";
import classes from "./RootLayout.module.scss";
import { Header } from "@/components/Header/Header";
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.container}>
      <NavSection />
      <div className={classes.contentSection}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
