import { useState, createContext, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [comments, setComments] = useState([]);

  // Get all users
  const getCommentsForBlog = async (slug) => {};

  const contextData = {
    getCommentsForBlog,
    comments,
    setComments,
  };

  return (
    <BlogContext.Provider value={contextData}>{children}</BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
