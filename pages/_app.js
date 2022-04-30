import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ChatProvider } from "../context/ChatContext";
import { BlogProvider } from "../context/BlogContext";
import { SupabaseChatProvider } from "../context/SupabaseChatContext";
import Layout from "../components/layout/Layout";
import theme from "../context/theme"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SupabaseChatProvider>
        <BlogProvider>
          <ChatProvider>
            <ChakraProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ChakraProvider>
          </ChatProvider>
        </BlogProvider>
      </SupabaseChatProvider>
    </SessionProvider>
  );
}

export default MyApp;
