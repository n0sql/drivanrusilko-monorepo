import {  Sofia_Sans } from "next/font/google";

import Header from "./header-nav";
const sofi = Sofia_Sans({subsets: ["latin"]})
interface IProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: IProps) => {
    
    return (
    <>
    <Header><p>im the head</p></Header>
          <main className={`${sofi.className} flex min-h-screen flex-col items-center justify-between p-24`}>{children}</main>{" "}
    </>
    );
  };
  
  export default Layout;