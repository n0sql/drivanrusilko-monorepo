import {  Sofia_Sans } from "next/font/google";
import Header from "../Header/AdminHeader";

const sofi = Sofia_Sans({subsets: ["latin"]})
interface IProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: IProps) => {



    
    return (
    <>
    
    <Header />
          <main className={`${sofi.className} flex flex-col mt-12  min-h-screen items-center justify-between`}> {children}</main>
    </>
    );
  };
  
  export default Layout;