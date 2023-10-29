import { ThemeSwitch } from "../Common/ThemeSwtich/ThemeSwtich";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.container}>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
};
