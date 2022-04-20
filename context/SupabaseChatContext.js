import { useState, createContext, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";

const SupabaseChatContext = createContext();

export function SupabaseChatProvider({ children }) {


  const contextData = {

  };

  return (
    <SupabaseChatContext.Provider value={contextData}>
      {children}
    </SupabaseChatContext.Provider>
  );
}

export function useSupabaseChat() {
  return useContext(SupabaseChatContext);
}
