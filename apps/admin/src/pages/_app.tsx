import "../styles/globals.css";
import "ui/styles.css";
import type { AppProps } from "next/app";
import Layout from "../components/shared/layout";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { SiteWideContextProvider } from "../context";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';


function App({ Component, pageProps }:  AppProps<{ session: Session }>) {

  return (
    <SessionProvider session={pageProps.session}>
      <SiteWideContextProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      </SiteWideContextProvider>
      </SessionProvider>
   
)}

export default App;