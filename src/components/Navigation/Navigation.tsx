import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import PieChartIcon from "@mui/icons-material/PieChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState, MouseEvent } from "react";
import SubNavItem from "./SubNavItem";

export default function Navigation(): JSX.Element {
  const location = useLocation();
  const navItems = [
    {
      name: "Dashboard",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Content Management",
      link: "/content-management",
      icon: <NotesIcon />,
    },

    {
      name: "Monitoring",
      icon: <PieChartIcon />,
      sub: [
        {
          name: "Content",
          link: "/monitoring-content",
          icon: <LightbulbIcon />,
        },
      ],
    },
    {
      name: "Account",
      icon: <SettingsIcon />,
      sub: [
        {
          name: "Users",
          link: "/account-users",
          icon: <PeopleAltIcon />,
        },
      ],
    },
  ];

  console.log("location", location.pathname);
  return (
    <div className={styles.container}>
      {navItems.map((item, i) => {
        console.log(item);
        if (item.sub) {
          return <SubNavItem item={item} key={i} />;
        } else {
          return (
            <div
              key={item.name}
              className={`${styles.navItem} ${
                location.pathname === item.link && styles.activeLink
              }`}
            >
              {item.icon}
              <Link className={styles.link} to={item.link}>
                {item.name}
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}
