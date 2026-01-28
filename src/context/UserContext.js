// src/contexts/UserContext.js
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Luo context
const UserContext = createContext(null);

// 2️⃣ Provider-komponentti
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // aluksi ei kirjautunutta käyttäjää

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3️⃣ Custom hook käyttäjän lukemiseen
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context.user;
};

// 4️⃣ Custom hook käyttäjän muokkaamiseen
export const useSetUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useSetUser must be used within a UserProvider");
  }
  return context.setUser;
};

export default UserContext;
