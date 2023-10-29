import Link from "next/link";
import classes from "./NavSection.module.scss";
import { useState } from "react";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export const NavSection = ({
  categories,
}: {
  categories: {
    title: string;
    subCategories: string[];
  }[];
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.titleBox}>
        <span>{`<UNPACK>`}</span>
      </div>
      <nav className={classes.linkGroup}>
        {categories.map((big) => (
          <div key={big.title}>
            <p className={classes.bigCategoryTitle}>{big.title}</p>
            {big.subCategories.map((sub) => (
              <Link
                key={`${big}-${sub}`}
                className={cx("link", active === 1 ? "active" : "")}
                href={`/${big.title}/${sub}`}
                onClick={() => setActive(1)}
              >
                <div
                  className={classes.bgBox}
                  style={{
                    transform: `translateY(calc(-50% + ${active - 1}00%))`,
                  }}
                >
                  <div />
                </div>
                {sub}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
};
