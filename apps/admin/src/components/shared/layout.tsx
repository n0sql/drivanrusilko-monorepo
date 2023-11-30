import {  Sofia_Sans } from "next/font/google";
import Header from "./header-nav";
import Login from "../Login/Login";
import MainDrawer from "../Drawer/Drawer";
import FindTreatment from "../FindTreatment/FindTreatment";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const sofi = Sofia_Sans({subsets: ["latin"]})
interface IProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: IProps) => {
    
    return (
    <>
    <MainDrawer />
    <Header><p>im the head</p></Header>
    
        <Login />
        <FindTreatment />
          <main className={`${sofi.className} flex min-h-screen flex-col items-center justify-between `}> <Flowbite><DarkThemeToggle />{children}</Flowbite></main>{" "}
    </>
    );
  };
  
  export default Layout;