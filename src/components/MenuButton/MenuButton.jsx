import React from "react";
import PropTypes from "prop-types";
import styles from "./MenuButton.module.css";

const MenuButton = ({ icon }) => {
  return <span className={styles.menu_button}>{icon}</span>;
};

MenuButton.propTypes = { icon: PropTypes.element };

export default MenuButton;
