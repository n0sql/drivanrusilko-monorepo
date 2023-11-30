
export function Header ({children, classNam,useSiteWideContext}:
    {children: React.ReactNode, classNam:any,useSiteWideContext:any}):JSX.Element {
    const {toggleHomeModal} = useSiteWideContext();
      return(  
        
        <div className={` w-full fixed top-0 left-0`}>
      <nav
          className={`${classNam} relative flex-wrap flex w-full items-center justify-center lg:justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:justify-between`}
          id="navbarSupportedContentX"
          data-te-navbar-ref
        >
          <div data-te-nav-item-ref>
            <a
              data-te-ripple-init
              data-te-ripple-color="light"
              href="https://drivan.d3gmqotpidrz95.amplifyapp.com/"
              className=" items-center justify-between mr-4 lock py-2 px-4 flex text-primary font-bold text-xl order-first cursor-pointer transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700"
            >
              <img src="/drivanlogo.svg" className="mr-3 h-8" alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Drivanrusilko
              </span>
            </a>
          </div>
    
          <div
            className="static flex  order-1 lg:order-2 md:order-1"
            data-te-nav-item-ref
            data-te-dropdown-ref
          >
            <a
              className="flex text-sm  font-bold items-center bg-white whitespace-nowrap py-2 px-4 rounded-full shadow shadow-lg uppercase  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-4"
              href="/"
              data-te-ripple-init
              data-te-ripple-color="light"
              type="button"
              id="dropdownMenuButtonX"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-nav-link-ref
            >
              Treatments
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <button
              className="hover:bg-gray-100 text-gray-700 text-sm font-bold py-2 px-4 rounded-full"
              onClick={()=>{toggleHomeModal()}}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>{" "}
              </svg>
            </button>
            <div
              className="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButtonX"
              data-te-dropdown-menu-ref
            >
              <div className="px-6 py-5 lg:px-8 h-[60vh] overflow-y-scroll">
                <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-6">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>  
  )
  }