import { useState, createContext, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";


const UserContext = createContext();

export function UserProvider({ children }) {

const [users, setUsers] = useState([])

// Get all users
const getAllUsers = async () => {

}


const contextData = {
  getAllUsers
}

return (
  <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
)


}

export function useUser() {
  return useContext(UserContext);
}
