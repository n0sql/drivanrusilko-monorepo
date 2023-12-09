import {  Sofia_Sans } from "next/font/google";

import { Header, Login} from "ui";
import { useSiteWideContext } from "../../context";


import { useSession, signOut } from "next-auth/react";
const loggedInMenu = ["Subscriptions", "Orders", "Appointments", "Profile", "Labs"];
const sofi = Sofia_Sans({subsets: ["latin"]})
interface IProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: IProps) => {

    const {data:session} = useSession();

    
    return (
    <>
    
    <Header loggedInMenu={loggedInMenu} signOut={signOut}  session={session} useSiteWideContext={useSiteWideContext} classNam={sofi.className}><p>im the head</p></Header>
    
        <Login classNam={sofi.className} useSiteWideContext={useSiteWideContext} />
        
          <main className={`${sofi.className} flex flex-col mt-12  min-h-screen items-center justify-between`}> {children}</main>
    </>
    );
  };
  
  export default Layout;