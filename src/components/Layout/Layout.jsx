import React from "react";
import PropTypes from "prop-types";
import MainNavBar from "../MainNavBar/MainNavBar";
import styles from "./Layout.module.css";
import SideNavBar from "../SideNavBar/SideNavBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <MainNavBar />
      <div className={styles.layout_main_content}>
        <SideNavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
