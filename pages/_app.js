import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layout/Layout";
import { ChatProvider } from "../context/ChatContext";
import { BlogProvider } from "../context/BlogContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <BlogProvider>
        <ChatProvider>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </ChatProvider>
      </BlogProvider>
    </SessionProvider>
  );
}

export default MyApp;
