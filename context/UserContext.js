import { useState, createContext, useContext, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState();


  // Create user in Sanity
  const createUserInSanity = async () => {};

  const contextData = {
    userEmail,
    setUserEmail,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
