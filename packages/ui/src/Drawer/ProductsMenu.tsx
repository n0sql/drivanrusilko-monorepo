

const ProductsMenu = ({products}:{products:any}) => {
  return (
    <ul
      className="relative list-none px-6 space-y-6 overflow-y-scroll h-[calc(100vh-8rem)] mylist "
      data-te-sidenav-menu-ref
    >
      <h4 className="text-left text-gray-300  px-2">Shop Our Products</h4>
      {products.map((product:any, index:number) => {
        return (
          <li key={index} className="relative">
            <a
              className="flex justify-between cursor-pointer items-center truncate rounded-[5px] px-2  text-gray-300 outline-none transition duration-300 ease-linear hover:bg-[#FFFFFF1C] hover:text-gray-300 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <p className="truncate">{product.category}</p>
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
            </a>
            <ul
              className="relative  list-none space-y-6"
              data-te-sidenav-collapse-ref
              data-te-collapse-show
            >
              {product.productlist.map((item:any, windex:number) => {
                return (
                  <li key={windex} className="relative ">
                    <a
                      className="flex text-sm cursor-pointer items-center truncate rounded-[5px] px-2  text-gray-300 outline-none transition duration-300 ease-linear hover:bg-[#FFFFFF1C] hover:text-gray-300 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                    >
                      {item}
                    </a>{" "}
                  </li>
                );
              })}
              <hr className="border-[#FFFFFF1C]" />
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsMenu;
