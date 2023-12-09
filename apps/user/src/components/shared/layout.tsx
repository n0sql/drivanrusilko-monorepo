import {  Sofia_Sans } from "next/font/google";

import {MainDrawer, Header, Login} from "ui";
import FindTreatment from "../FindTreatment/FindTreatment";
import { useSiteWideContext } from "../../context";
import { products } from "../../data/products";
import { menus } from "../../data/data";
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
    <MainDrawer classNam={sofi.className} useSiteWideContext={useSiteWideContext} products={products} menus={menus}/>
    <Header loggedInMenu={loggedInMenu} signOut={signOut}  session={session} useSiteWideContext={useSiteWideContext} classNam={sofi.className}><p>im the head</p></Header>
    
        <Login classNam={sofi.className} useSiteWideContext={useSiteWideContext} />
        <FindTreatment   useSiteWideContext={useSiteWideContext}/>
          <main className={`${sofi.className} flex flex-col mt-12  min-h-screen items-center justify-between`}> {children}</main>
    </>
    );
  };
  
  export default Layout;