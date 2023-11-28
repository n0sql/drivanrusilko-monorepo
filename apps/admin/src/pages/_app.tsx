import "../globals.css";
import "ui/styles.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/shared/layout";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";


function App({ Component, pageProps }:  AppProps<{ session: Session }>) {


  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      </SessionProvider>
   
)}

export default App;