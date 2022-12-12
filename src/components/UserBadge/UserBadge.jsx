import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import styles from "./UserBadge.module.css";

const UserBadge = ({ userLabel }) => {
  return (
    <div className={styles.user_badge_wrapper}>
      <UserIcon />
      <h2>{userLabel}</h2>
    </div>
  );
};

UserBadge.propTypes = {};

export default UserBadge;
