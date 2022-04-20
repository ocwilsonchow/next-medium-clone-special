import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layout/Layout";
import { ChatProvider } from "../context/ChatContext";
import { BlogProvider } from "../context/BlogContext";
import { SupabaseChatProvider } from "../context/SupabaseChatContext";

import { SWRConfig} from 'swr'

const fetcher = (...args) => fetch(...args).then((response)=>response.json())

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SupabaseChatProvider>
        <BlogProvider>
          <ChatProvider>
            <ChakraProvider>
             <SWRConfig value={{fetcher}}>
                <Layout>
                <Component {...pageProps} />
              </Layout>
             </SWRConfig>
            </ChakraProvider>
          </ChatProvider>
        </BlogProvider>
      </SupabaseChatProvider>
    </SessionProvider>
  );
}

export default MyApp;
