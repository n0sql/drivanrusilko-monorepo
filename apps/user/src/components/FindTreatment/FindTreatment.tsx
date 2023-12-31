
import Image from "next/image";
import {  Sofia_Sans } from "next/font/google";
import {
  Drawer,
} from "@material-tailwind/react";
import { menus } from "../../data/data";
const sofi = Sofia_Sans({subsets: ["latin"]})
const FindTreatment = ({useSiteWideContext}:{useSiteWideContext:any} ) => {

const {openTreatementModal, toggleTreatmentModal} = useSiteWideContext();
  return (
    <Drawer overlay={false} size={600} open={openTreatementModal} onClose={()=>{toggleTreatmentModal()}} placement="right"
      className={`${sofi.className} bg-white  overflow-y-scroll   flex mylist    w-full     flex-col text-neutral-700 shadow-sm outline-none dark:bg-neutral-800 dark:text-neutral-200`}
      id="offcanvasTreatment"
    >
      {/* a header that turns sticky when scrolled */}

      <div id="myhead" className=" top-0 z-10  pb-5 bg-[#f7f7f7]   px-5 sticky">
        {/* the header content */}

        <div id="headflex" className="flex justify-between py-5 mt-5 px-3 items-center">
          <div className="flex flex-col ">
            <h3> Your free online visit starts here</h3>
            <p> Tell us what we can help you with:</p>
          </div>

          <Image src="/treatmentheader.webp" alt="treatment" id="treatimg" width={100} height={100} />
        </div>

        {/* the close button */}
        <button
          data-te-offcanvas-dismiss
          onClick={()=>{toggleTreatmentModal()}}
          id="closebtn"
          className=" text-black text-sm font-bold   rounded-full  shadow shadow-lg uppercase flex top-2 absolute right-0  mr-3"
        >
          <svg
            className="w-6 h-6  "
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

      <ul className=" relative mt-5 list-none  px-6 space-y-6 " data-te-sidenav-menu-ref>
        {menus.map((menu:any, index:number) => {
          return (
            <li key={index} className="relative  makesticky">
              <div
                className="flex justify-between cursor-pointer items-center truncate rounded-[5px] px-2 hover:bg-[#FFFFFF1C]  outline-none transition duration-300 ease-linear  hover:hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <h5 className="truncate font-bold">{menu.name}</h5>
              </div>
              <ul
                className="relative m-0 list-none space-y-2 divide-y-2 px-2"
                data-te-sidenav-collapse-ref
                data-te-collapse-show
              >
                {menu.subcategories.map((sub:any, windex:number) => {
                  return (
                    <li key={windex} className="relative">
                      <a
                        className="flex justify-between text-sm cursor-pointer items-center truncate rounded-[5px]  py-2  outline-none transition duration-300 ease-linear hover:bg-[#FFFFFF1C] hover:hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                        data-te-sidenav-link-ref
                      >
                        {sub.name}{" "}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                        >
                          <path
                            d="M10 7L15 12L10 17"
                            stroke="rgba(0, 0, 0, .88)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Drawer>
  );
};

export default FindTreatment
