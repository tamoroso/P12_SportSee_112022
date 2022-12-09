import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/sportsee_logo.svg";
import styles from "./MainNavBar.module.css";

const MainNavBar = () => {
  const menuItems = [
    {
      label: "Accueil",
      path: "/",
    },
    {
      label: "Profil",
      path: "#",
    },
    {
      label: "Réglage",
      path: "#",
    },
    {
      label: "Communauté",
      path: "#",
    },
  ];

  return (
    <div className={styles.main_nav_bar_wrapper}>
      <Logo />
      <ul>
        {menuItems.map((item, index) => (
          <li key={item.label + index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNavBar;
