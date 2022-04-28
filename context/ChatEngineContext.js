import { useState, createContext, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";


const ChatEngineContext = createContext();

export function ChatEngineProvider({ children }) {
  const [username, setUsername] = useState("")
  const [secret, setSecret] = useState("")
  const [authenticated, setAuthenticated] = useState(false)


  const contextData = {
    username,
    setUsername,
    secret,
    setSecret,
    setAuthenticated,
    authenticated
  };

  return (
    <ChatEngineContext.Provider value={contextData}>{children}</ChatEngineContext.Provider>
  );
}

export function useChatEngine() {
  return useContext(ChatEngineContext);
}
