import React from "react";
import  Drawer  from './drawer';
import { DrawerMenu } from './drawer-menu';
import  ProductsMenu  from './product-smenu';
import  SiteMenu  from './site-menu';

export type Viewkey = 'main' | 'treatment' | 'shop' | 'meet';

export function MainDrawer ({data}:{data: any}):JSX.Element
{

  const [mainView, setMainView] = React.useState(true);
  const [treatmentView, setTreatmentView] = React.useState(false);
  const [shopView, setShopView] = React.useState(false);
  const [meetView, setMeetView] = React.useState(false);
  const toggleView =(view: string):void=>{
   const views = {'main': setMainView, 'treatment': setTreatmentView, 'shop': setShopView, 'meet': setMeetView};

   Object.keys(views).map((item:string) =>  item === view ? views[item as Viewkey](true) : views[item as Viewkey](false))

  }
    return (
        <div
        className="bottom-0 top-0 right-0 z-[1045] flex  lg:w-[30vw] w-[90vw] md:w-[50vw]  translate-x-full flex-col text-neutral-700 shadow-sm outline-none transition  duration-500 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRight"
        data-te-offcanvas-init
      >
        <div className="absolute pt-3  w-full top-0 right-0 h-full  bg-black rounded-tl-3xl rounded-bl-3xl">
          <div className="flex items-center mb-5  mt-3 pl-6 justify-between  mybtns">
            <button
            type='button'
              onClick={() => {
               toggleView('main');
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
              type='button'
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
  
          {mainView ? (<Drawer toggleView={toggleView}/> ) : treatmentView ? (<DrawerMenu>{data[0]}</DrawerMenu>) : shopView ? ( <ProductsMenu >{data[1]}</ProductsMenu> ) : meetView ? ( <SiteMenu  menus={["About Us", "How it Works", "Our Medical Experts", "Reviews"]}/> ) : null} </div>
      </div> 
)
}