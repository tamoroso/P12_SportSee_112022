import React from "react";
import { ReactComponent as YogaIcon } from "../../assets/icons/yoga.svg";
import { ReactComponent as SwimIcon } from "../../assets/icons/swim.svg";
import { ReactComponent as BikeIcon } from "../../assets/icons/bike.svg";
import { ReactComponent as BarbellIcon } from "../../assets/icons/barbell.svg";
import { Link } from "react-router-dom";
import styles from "./SideNavBar.module.css";
import MenuButton from "../MenuButton/MenuButton";

const SideNavBar = () => {
  const menuItems = [
    {
      label: "Yoga",
      icon: <YogaIcon />,
    },
    {
      label: "Swimming",
      icon: <SwimIcon />,
    },
    {
      label: "Biking",
      icon: <BikeIcon />,
    },
    {
      label: "Musculation",
      icon: <BarbellIcon />,
    },
  ];
  return (
    <ul className={styles.side_nav_bar_wrapper}>
      {menuItems.map((item, index) => (
        <li key={item.label + index}>
          <Link to="#">
            <MenuButton icon={item.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideNavBar;
