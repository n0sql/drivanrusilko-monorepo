import {  Sofia_Sans } from "next/font/google";

import Header from "./header-nav";
import Login from "../Login/Login";
import MainDrawer from "../Drawer/Drawer";
import FindTreatment from "../FindTreatment/FindTreatment";

const sofi = Sofia_Sans({subsets: ["latin"]})
interface IProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: IProps) => {
    
    return (
    <>
    <Header><p>im the head</p></Header>
    <MainDrawer />
        <Login />
        <FindTreatment />
          <main className={`${sofi.className} flex min-h-screen flex-col items-center justify-between p-24`}>{children}</main>{" "}
    </>
    );
  };
  
  export default Layout;