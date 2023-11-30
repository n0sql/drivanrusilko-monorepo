import {  Sofia_Sans } from "next/font/google";
import Header from "./header-nav";
import Login from "../Login/Login";
import {MainDrawer} from "ui";
import FindTreatment from "../FindTreatment/FindTreatment";
import { useSiteWideContext } from "../../context";
import { products } from "../../data/products";
import { menus } from "../../data/data";

const sofi = Sofia_Sans({subsets: ["latin"]})
interface IProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: IProps) => {
    
    return (
    <>
    <MainDrawer classNam={sofi.className} useSiteWideContext={useSiteWideContext} products={products} menus={menus}/>
    <Header classNam={sofi.className}><p>im the head</p></Header>
    
        <Login />
        <FindTreatment />
          <main className={`${sofi.className} flex min-h-screen flex-col items-center justify-between`}> {children}</main>{" "}
    </>
    );
  };
  
  export default Layout;