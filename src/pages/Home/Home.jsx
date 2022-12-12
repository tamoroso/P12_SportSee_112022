import React from "react";
import { Link } from "react-router-dom";
import { UserBadge } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  const userAccounts = [
    {
      label: "User 18",
      id: 18,
    },
    {
      label: "User 12",
      id: 12,
    },
  ];
  return (
    <ul className={styles.user_accounts_wrapper}>
      {userAccounts.map((user) => (
        <li key={user.id}>
          <Link to={`${user.id}/user-profile`}>
            <UserBadge userLabel={user.label} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
