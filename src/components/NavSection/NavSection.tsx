"use client";
import Link from "next/link";
import classes from "./NavSection.module.scss";
import { useState } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export const NavSection = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={classes.container}>
      <div className={classes.titleBox}>
        <span>{`<Unpack>`}</span>
      </div>
      <nav className={classes.linkGroup}>
        <Link
          className={cx("link", active === 1 ? "active" : "")}
          href="/"
          onClick={() => setActive(1)}
        >
          <div
            className={classes.bgBox}
            style={{ transform: `translateY(calc(-50% + ${active - 1}00%))` }}
          >
            <div />
          </div>
          section
        </Link>
        <Link
          className={cx("link", active === 2 ? "active" : "")}
          href="/test-mdx-page"
          onClick={() => setActive(2)}
        >
          section1
        </Link>
      </nav>
    </div>
  );
};
