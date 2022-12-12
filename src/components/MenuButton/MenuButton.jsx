import React from "react";
import PropTypes from "prop-types";
import styles from "./MenuButton.module.css";

const MenuButton = ({ icon }) => {
  return <span className={styles.menu_button}>{icon}</span>;
};

// TODO: DEFINE PROPTYPES
MenuButton.propTypes = {};

export default MenuButton;
