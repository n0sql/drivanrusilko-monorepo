

const SmallDrawer = ({useSiteWideContext}:{useSiteWideContext:any}) => {
    const {toggleView} =  useSiteWideContext();
  
  
    return (
      <div className="ui-flex ui-flex-col  justify-between">
        
        <ul className="list-none px-6 space-y-2 flex flex-col ">
          {/* <div className="flex flex-col mb-6 gap-5"> */}
          <li
            className="flex justify-between items-center  w-full hover:bg-[#FFFFFF1C] rounded-xl px-2 lg:h-32 cursor-pointer"
            onClick={() => {
              toggleView('treatment')
            }}
          > 
            <div className="flex flex-col items-start ">
              <h1 className="text-gray-950 dark:text-gray-100 font-semibold text-xl ">Explore treatments</h1>
              <p className="text-[#FFFFFFA8] text-sm ">Proven treatments for dozen of conditions</p>
            </div>
            <div className="flex items-center">
              <button className=" text-gray-950 dark:text-gray-100 text-sm font-bold py-2 px-4 rounded-full  ">
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
              <h1 className="text-gray-950 font-semibold  dark:text-gray-100 text-xl">Shop products</h1>
              <p className="text-[#FFFFFFA8] text-sm">
                Trusted prescription and over-the-counter options
              </p>
            </div>
  
            <div className="flex items-center">
              <button className="text-gray-950 dark:text-gray-100 text-sm font-bold py-2 px-4 rounded-full  ">
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
              <h1 className="text-gray-950 font-semibold dark:text-gray-100  text-xl ">Meet Drivanrusilko</h1>
              <p className="text-[#FFFFFFA8] text-sm ">
                What we do, who we do it for and how we do it
              </p>
            </div>
            <div className="flex items-center">
              <button className="text-gray-950 text-sm dark:text-gray-100 font-bold py-2 px-4 rounded-full uppercase">
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
          <h4 className="text-gray-950 dark:text-gray-100 font-semibold lg:text-2xl text-sm">
            Start a free consultation
          </h4>
          <button className="text-gray-950 dark:text-gray-100 text-sm py-2">
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

export default SmallDrawer