import React from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.css";

const Badge = ({ badgeLabel, badgeIcon, badgeData, badgeColor }) => {
  return (
    <li className={styles.badge}>
      <div className={styles.badge_icon_wrapper}>
        <span
          style={{ backgroundColor: badgeColor, opacity: "0.1" }}
          className={styles.badge_icon_background}
        ></span>
        {badgeIcon}
      </div>
      <div className={styles.badge_content_wrapper}>
        <strong>{badgeData}</strong>
        <span>{badgeLabel}</span>
      </div>
    </li>
  );
};

Badge.propTypes = {
  badgeLabel: PropTypes.string,
  badgeIcon: PropTypes.element,
  badgeData: PropTypes.string,
  badgeColor: PropTypes.string,
};

export default Badge;
