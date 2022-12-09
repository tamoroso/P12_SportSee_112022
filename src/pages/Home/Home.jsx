import React from "react";
import { Link } from "react-router-dom";

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
    <>
      <h1>Home</h1>
      <ul>
        {userAccounts.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}/user-profile`}>{user.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
