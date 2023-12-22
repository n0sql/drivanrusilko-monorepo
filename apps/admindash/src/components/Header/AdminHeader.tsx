import {  Sofia_Sans } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { Collapse } from "@material-tailwind/react";
const loggedInMenu = ["Server", "Hospital", "Profile"];
const sofi = Sofia_Sans({subsets: ["latin"]})

function Header ():JSX.Element {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
    const {data:session} = useSession();
      return(  
      <nav
          className={`${sofi.className} sticky top-0 z-10 block w-full max-w-full px-4 py-2 bg-neutral-50  text-neutral-600 shadow-lg dark:bg-[#222030] dark:border-b-[#222030]/75 dark:text-gray-100 dark:shadow-black/4 rounded-none shadow-md h-max bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-2 `}
          id="navbarSupportedContentX"
          data-te-navbar-ref
        ><div className="flex items-center justify-between text-blue-gray-900">
           <div data-te-nav-item-ref>
            <a
              data-te-ripple-init
              data-te-ripple-color="light"
              href="/"
              className=" items-center  mr-4 lock py-2 px-4 flex text-primary font-bold text-xl  cursor-pointer transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
            >
        
              <img src="/drivanlogo.svg" className="mr-3 h-8" alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Drivanrusilko Admin
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            
          {
            session && (
              <div className="hidden mr-4 lg:block">
              <div className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {loggedInMenu.map((item:string, i:number) => (
                  <a
                    key={i}
                    href={item === "Server" ? "/server-config" : `/${item.toLowerCase()}`}
                    className="hover:bg-gray-100 dark:hover:bg-gray-950 text-gray-700 dark:text-gray-100 text-sm font-bold py-1 px-4 rounded-full"
                  >
                    {item}
                  </a>
                ))}
         
              </div>
              </div>
            ) 

            

          }
          <div className="flex items-center gap-x-1">
           {
            session ? ( 
            <button
              onClick={() => signOut()}
              className=" select-none rounded-lg dark:bg-gray-100  bg-[#222030] rounded-lg dark:text-[#222030] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button">
              <span>Log Out</span>
            </button>) :
            ( 
              <div className="flex items-center gap-x-1">
            <a
              href="/auth"
              className=" select-none rounded-lg dark:bg-gray-100 bg-[#222030] rounded-lg dark:text-[#222030] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button">
              <span>Log In</span>
            </a>
            <a
            type='button'
              href="/auth"
              className=" select-none dark:bg-gray-100 bg-[#222030] rounded-lg dark:text-[#222030] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              >
              <span>SignUp</span>
            </a>
            </div>
            )
           }
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
          </div>
</div>
<Collapse open={openNav}>
            
              <div className="container mx-auto">
              <div className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {loggedInMenu.map((item:string, i:number) => (
                  <a
                    key={i}
                    href={item === "Server" ? "/server-config" : `/${item.toLowerCase()}`}
                    className="hover:bg-gray-100 dark:hover:bg-gray-950 text-gray-700 dark:text-gray-100 text-sm font-bold py-1 px-4 rounded-full"
                  >
                    {item}
                  </a>
                ))}
         
              </div>
              <button
              onClick={() => signOut()}
              className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button">
              <span>Log Out</span>
            </button>
              </div>
            

          
</Collapse>
        </nav>
       
  )
  }

export default Header;