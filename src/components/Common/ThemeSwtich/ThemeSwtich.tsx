import classes from "./ThemeSwitch.module.scss";
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(classes);

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={classes.container}>
      <button
        className={cx("switch", isDark ? "dark" : "light")}
        onClick={() => setIsDark((p) => !p)}
      >
        <div className={cx("iconBox", "dark")}>
          <Image
            src="/assets/icon/moon.png"
            alt="dark theme"
            width={15}
            height={15}
          />
        </div>
        <div className={cx("iconBox", "light")}>
          <Image
            src="/assets/icon/sun.png"
            alt="light theme"
            width={15}
            height={15}
          />
        </div>
      </button>
    </div>
  );
};
