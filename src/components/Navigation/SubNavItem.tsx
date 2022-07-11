import styles from "./Navigation.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type SubNavItemTypes = {
  item: {
    name: string;
    icon: JSX.Element;
    sub: {
      name: string;
      link: string;
      icon: JSX.Element;
    }[];
  };
};

export default function SubNavItem({ item }: SubNavItemTypes): JSX.Element {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div key={item.name}>
      <div onClick={() => setOpen(!open)} className={styles.subNav}>
        {item.icon}
        <span className={styles.link}>{item.name}</span>
        {open ? (
          <ArrowDropUpIcon className={styles.dropdownIcon} />
        ) : (
          <ArrowDropDownIcon className={styles.dropdownIcon} />
        )}
      </div>
      {open &&
        item.sub.map((subItem) => {
          return (
            <div
              key={subItem.name}
              className={`${styles.subNavItem} ${
                location.pathname === subItem.link && styles.activeLink
              }`}
            >
              <div className={styles.subItemWrapper}>
                {subItem.icon}
                <Link className={styles.link} to={subItem.link}>
                  {subItem.name}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
