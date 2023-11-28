import { menus } from "../../data/data"
import { useState, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";
import SiteMenu from "./SiteMenu";
import ProductsMenu from "./ProductsMenu";
import Login from "../Login/Login";
import { useSession } from "next-auth/react";

const Drawer = ({toggleView}:{ toggleView: (view:string)=>void}) => {
  
  const { data: session, status } = useSession();
  useEffect(() => {
    // hide login button if logged in
    const loginButton = document.getElementById("loginbtn");

    if (session) {
      loginButton?.classList.add("invisible");
    } else {
      loginButton?.classList.remove("invisible");
    }
  }, [session]);

  return (
    <div className="flex flex-col  justify-between mylist ">
      <ul className=" list-none px-6 space-y-2 flex flex-col ">
        {/* <div className="flex flex-col mb-6 gap-5"> */}
        <li
          className="flex justify-between items-center  w-full hover:bg-[#FFFFFF1C] rounded-xl px-2 lg:h-32 cursor-pointer"
          onClick={() => {
            toggleView('treatment')
          }}
        >
          <div className="flex flex-col items-start ">
            <h1 className="text-gray-300 font-semibold text-xl ">Explore treatments</h1>
            <p className="text-[#FFFFFFA8] text-sm ">Proven treatments for dozen of conditions</p>
          </div>
          <div className="flex items-center">
            <button className=" text-gray-300 text-sm font-bold py-2 px-4 rounded-full  ">
              {/* right arrow */}
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L9.586 11H3a1 1 0 110-2h6.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </li>

        <li
          className="flex justify-between items-center     hover:bg-[#FFFFFF1C]  rounded-xl px-2 lg:h-32   cursor-pointer"
          onClick={() => {
            toggleView('shop')
          }}
        >
          <div className="flex flex-col items-start ">
            <h1 className="text-gray-300 font-semibold   text-xl">Shop products</h1>
            <p className="text-[#FFFFFFA8] text-sm">
              Trusted prescription and over-the-counter options
            </p>
          </div>

          <div className="flex items-center">
            <button className="text-gray-300 text-sm font-bold py-2 px-4 rounded-full  ">
              {/* right arrow */}
              <svg
                className="w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L9.586 11H3a1 1 0 110-2h6.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </li>
        <li
          className="flex justify-between items-center  hover:bg-[#FFFFFF1C] rounded-xl px-2 lg:h-32  cursor-pointer"
          onClick={() => {
            toggleView('meet')
          }}
        >
          <div className="flex flex-col items-start">
            <h1 className="text-gray-300 font-semibold  text-xl ">Meet Drivanrusilko</h1>
            <p className="text-[#FFFFFFA8] text-sm ">
              What we do, who we do it for and how we do it
            </p>
          </div>
          <div className="flex items-center">
            <button className="text-gray-300 text-sm font-bold py-2 px-4 rounded-full  shadow shadow-lg uppercase">
              {/* right arrow */}
              <svg
                className="w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L9.586 11H3a1 1 0 110-2h6.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </li>
        {/* </div> */}
      </ul>
      <div
        id="consultation"
        className="  mx-3 h-48 p-3 mt-20  rounded-3xl cursor-pointer place-self-stretch"
      >
        <h4 className="text-gray-300 font-semibold lg:text-2xl text-sm">
          Start a free consultation
        </h4>
        <button className="text-gray-300 text-sm py-2">
          <svg
            className="w-6 h-6 pl-1 bg-white rounded-full text-primary"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L9.586 11H3a1 1 0 110-2h6.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export type Viewkey = 'main' | 'treatment' | 'shop' | 'meet';
const MainDrawer = () => {
  const [mainView, setMainView] = useState(true);
  const [treatmentView, setTreatmentView] = useState(false);
  const [shopView, setShopView] = useState(false);
  const [meetView, setMeetView] = useState(false);
  const toggleView =(view: string):void=>{
   const views = {'main': setMainView, 'treatment': setTreatmentView, 'shop': setShopView, 'meet': setMeetView};

   Object.keys(views).map((item:string) =>  item === view ? views[item as Viewkey](true) : views[item as Viewkey](false))
  }
  return (
    <div
      className="invisible fixed bottom-0 top-0 right-0 z-[1045] flex  lg:w-[30vw] w-[90vw] md:w-[50vw]  translate-x-full flex-col text-neutral-700 shadow-sm outline-none transition  duration-500 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none "
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRight"
      data-te-offcanvas-init
    >
      <div className="absolute pt-3  w-full top-0 right-0 h-full  bg-black rounded-tl-3xl rounded-bl-3xl">
        <div className="flex items-center mb-5  mt-3 pl-6 justify-between  mybtns">
          <button
            onClick={() => {
              toggleView('main')
            }}
            className={`${
              mainView ? "invisible" : ""
            } hover:bg-[#FFFFFF1C] flex items-center text-gray-300 text-sm font-bold  gap-2 rounded-full shadow shadow-lg`}
          >
            {/*arrow left button*/}
            <span className="  [&>svg]:text-gray-300 dark:[&>svg]:text-gray-300">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L10.414 9H17a1 1 0 110 2h-6.586l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="text-gray-300 pr-3  ">Back</span>
          </button>
          <div className="flex justify-between">
            {" "}
            <button
              // hide if signed in
              id="loginbtn"
              type="button"
              data-te-offcanvas-toggle
              data-te-target="#offcanvasLogin"
              aria-controls="offcanvasLogin"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="bg-primary text-gray-300 outline outline-gray-700 outline-[0.5px] text-sm rounded-full  shadow shadow-lg "
            >
              <span className="block py-1 px-4  text-gray-300 text-sm"> Sign In </span>
            </button>
            <button
              data-te-offcanvas-dismiss
              className=" text-gray-300 text-sm font-bold  px-4 rounded-full  shadow shadow-lg uppercase"
            >
              {/* close button*/}
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>{" "}
              </svg>
            </button>
          </div>
        </div>

        {mainView ? (
          <Drawer
           toggleView={toggleView}
          />
        ) : treatmentView ? (
          <DrawerMenu />
        ) : shopView ? (
          <ProductsMenu />
        ) : meetView ? (
          <SiteMenu />
        ) : null}
      </div>
    </div>
  );
};

export default MainDrawer;
