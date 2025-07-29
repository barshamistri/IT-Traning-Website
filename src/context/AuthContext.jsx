// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LOGIN FUNCTION
  

  const login = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  setUser(user);
};
  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
