import DrawerMenu from "./DrawerMenu";
import SiteMenu from "./SiteMenu";
import ProductsMenu from "./ProductsMenu";
import  ArrowRightIcon  from "@heroicons/react/24/solid/ArrowRightIcon";
import SmallDrawer from "./SmallDrawer";
import {
  Drawer,
  Button,
  Typography
} from "@material-tailwind/react";



export const MainDrawer = ({useSiteWideContext, menus, products, classNam}:{useSiteWideContext:any, menus:any, products:any, classNam:any}) => {
  const {mainView, treatmentView, shopView, meetView, openHomeModal, toggleHomeModal, toggleView} = useSiteWideContext();
   
  


  return (

      
      <Drawer size={550} className={`${classNam} rounded-tl-3xl rounded-bl-3xl dark:bg-black` } placement="right"  open={openHomeModal} onClose={() => toggleHomeModal()}>
        <div className="ui-text-black dark:bg-black rounded-tl-3xl rounded-bl-3xl">
        <div className="flex  items-center py-4 justify-between  mybtns">
          <Button
            onClick={() => {
              toggleView('main')
            }}
            className={`${
              mainView ? "invisible" : ""
            } hover:bg-[#FFFFFF1C] flex items-center text-gray-300 text-sm font-bold  gap-2 rounded-full shadow shadow-lg`}
          >
     
            <Typography className="  [&>svg]:text-gray-300 dark:[&>svg]:text-gray-300">
              <ArrowRightIcon className="w-6 h-6" />
            </Typography>
            <Typography className="text-gray-300 pr-3  ">Back</Typography>
          </Button>
          <div className="flex  justify-between">
        
            <Button
              // hide if signed in
              id="loginbtn"
              type="button"
              className="bg-primary text-gray-300 outline outline-gray-700 outline-[0.5px] text-sm rounded-full  shadow shadow-lg "
            >
              <Typography className="block py-1 px-4 text-black text-gray-300 text-sm"> Sign In </Typography>
            </Button>

          </div>
        </div>

        </div>
        <div className="bg-gray-200 dark:bg-black min-h-[82vh]  h-full transition-all">
        {mainView ? (
          <SmallDrawer
           useSiteWideContext={useSiteWideContext}
          />
        ) : treatmentView ? (
          <DrawerMenu menus={menus}/>
        ) : shopView ? (
          <ProductsMenu products={products} />
        ) : meetView ? (
          <SiteMenu />
        ) : null}
        </div>

      </Drawer>
    
  );
}
