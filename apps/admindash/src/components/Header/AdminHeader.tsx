import {  Sofia_Sans } from "next/font/google";
import { useSession, signOut } from "next-auth/react";
const loggedInMenu = ["Subscriptions", "Orders", "Appointments", "Profile", "Labs"];
const sofi = Sofia_Sans({subsets: ["latin"]})

function Header ():JSX.Element {

    const {data:session} = useSession();
      return(  
        
        <div className={` w-full fixed top-0 left-0 z-[100]`}>
      <nav
          className={`${sofi.className} relative flex-wrap flex w-full items-center justify-center lg:justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:justify-between`}
          id="navbarSupportedContentX"
          data-te-navbar-ref
        >
          {
            session && (
              <div className="flex items-center justify-center gap-2">
                {loggedInMenu.map((item:string, i:number) => (
                  <a
                    key={i}
                    href={`/${item.toLowerCase()}`}
                    className="hover:bg-gray-100 dark:hover:bg-gray-950 text-gray-700 dark:text-gray-100 text-sm font-bold py-1 px-4 rounded-full"
                  >
                    {item}
                  </a>
                ))}
                <button
                  className="hover:bg-gray-100 dark:hover:bg-gray-950 text-gray-700 dark:text-gray-100 text-sm font-bold py-1 px-4 rounded-full"
                  onClick={() => signOut()}></button>
              </div>
            ) 

          }
          <div data-te-nav-item-ref>
            <a
              data-te-ripple-init
              data-te-ripple-color="light"
              href="https://drivan.d3gmqotpidrz95.amplifyapp.com/"
              className=" items-center justify-between mr-4 lock py-2 px-4 flex text-primary font-bold text-xl order-first cursor-pointer transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
            >
              <img src="/drivanlogo.svg" className="mr-3 h-8" alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Drivanrusilko Admin
              </span>
            </a>
          </div>

        </nav>
        </div>  
  )
  }

export default Header;