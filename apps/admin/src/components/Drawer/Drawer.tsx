import { menus } from "../../data/data"
import { useState, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";
import SiteMenu from "./SiteMenu";
import ProductsMenu from "./ProductsMenu";
import Login from "../Login/Login";

import { Button, Modal } from 'flowbite-react';
import { useSession } from "next-auth/react";
import  ArrowRightIcon  from "@heroicons/react/24/solid/ArrowRightIcon";
import  XCircleIcon  from "@heroicons/react/24/solid/XCircleIcon";
import { useSiteWideContext } from "../../context";
const Drawer = () => {
  const {toggleView} =  useSiteWideContext();
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
    <div className="flex flex-col  justify-between mylist">
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



const MainDrawer = () => {
  const {mainView, treatmentView, shopView, meetView, openHomeModal, toggleHomeModal, toggleView} = useSiteWideContext();
  
  


  return (

     
      <Modal size={"2xl"} className='min-h screen rounded-tl-3xl  rounded-bl-3xl' position={'top-right'} dismissible show={openHomeModal} onClose={() => toggleHomeModal()}>
        <Modal.Header className=" dark:bg-slate-300">
        <div className="flex  items-center py-4 justify-between  mybtns">
          <Button
            onClick={() => {
              toggleView('main')
            }}
            className={`${
              mainView ? "invisible" : ""
            } hover:bg-[#FFFFFF1C] flex items-center text-gray-300 text-sm font-bold  gap-2 rounded-full shadow shadow-lg`}
          >
     
            <span className="  [&>svg]:text-gray-300 dark:[&>svg]:text-gray-300">
              <ArrowRightIcon className="w-6 h-6" />
            </span>
            <span className="text-gray-300 pr-3  ">Back</span>
          </Button>
          <div className="flex  justify-between">
        
            <button
              // hide if signed in
              id="loginbtn"
              type="button"
              className="bg-primary text-gray-300 outline outline-gray-700 outline-[0.5px] text-sm rounded-full  shadow shadow-lg "
            >
              <span className="block py-1 px-4  text-gray-300 text-sm"> Sign In </span>
            </button>

          </div>
        </div>

        </Modal.Header>
        <Modal.Body className="bg-black">
        {mainView ? (
          <Drawer
           
          />
        ) : treatmentView ? (
          <DrawerMenu />
        ) : shopView ? (
          <ProductsMenu />
        ) : meetView ? (
          <SiteMenu />
        ) : null}
        </Modal.Body>

      </Modal>
    
  );
}
export default MainDrawer;