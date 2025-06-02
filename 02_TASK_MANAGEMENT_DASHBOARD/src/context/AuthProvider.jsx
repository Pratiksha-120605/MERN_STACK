import React, { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useState, useEffect } from "react";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // localStorage.clear();
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setuserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
