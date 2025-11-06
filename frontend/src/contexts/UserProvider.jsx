import { useState, useEffect } from 'react';
import { UserContext } from './UserContext.js';

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const uuid = localStorage.getItem("userId");
    console.log("UserContext loaded userId:", uuid);
    setUserId(uuid || "");
  }, []);

  const login = (uuid) => {
    localStorage.setItem("userId", uuid);
    setUserId(uuid);
    console.log("User logged in:", uuid);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    setUserId("");
    console.log("User logged out");
  };

  return (
    <UserContext.Provider value={{ userId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};