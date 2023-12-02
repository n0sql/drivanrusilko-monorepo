import DrawerMenu from "./DrawerMenu";
import SiteMenu from "./SiteMenu";
import ProductsMenu from "./ProductsMenu";
import { UserCircleIcon,XCircleIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import SmallDrawer from "./SmallDrawer";
import {
  Drawer,
} from "@material-tailwind/react";



export const MainDrawer = ({useSiteWideContext, menus, products, classNam}:{useSiteWideContext:any, menus:any, products:any, classNam:any}) => {
  const {mainView, treatmentView, shopView, meetView, openHomeModal, toggleHomeModal, toggleView, toggleAuthModal} = useSiteWideContext();
   
  


  return (

      
      <Drawer overlay={false} size={550} className={`${classNam} rounded-tl-3xl rounded-bl-3xl dark:bg-gray-950`} placement="right"  open={openHomeModal} onClose={() => toggleHomeModal()}>
        <div className="px-6 ui-text-black dark:bg-black rounded-tl-3xl rounded-bl-3xl">
        <div className="flex  items-center py-4 justify-between  mybtns">
       {
        mainView ? ( <h3 className="text-left text-3xl font-bold text-gray-950 dark:text-gray-100 px-2">Menu</h3>): (<a type="button" onClick={() => {
          toggleView('main')
        }} className="cursor-pointer [&>svg]:text-gray-950  dark:[&>svg]:text-gray-100 ui-py-2 font-bold" >
          <ChevronLeftIcon className="w-5" />
        </a>)
       }
       
    
            
           
          <div className="flex  justify-between">
        
         
            <a className="cursor-pointer [&>svg]:text-gray-950 dark:[&>svg]:text-gray-100 ui-py-2" onClick={()=>{
              toggleAuthModal()
            }}>
          <UserCircleIcon className="w-8" />
          </a>
          <a type="button" className="cursor-pointer [&>svg]:text-gray-950  dark:[&>svg]:text-gray-100 ui-py-2" onClick={()=>{
            toggleHomeModal()
          }}>
          <XCircleIcon className="w-8" />
          </a>
          </div>
          
        </div>

        </div>
        <div className="dark:bg-black h-[calc(80vh-8rem)]   transition-all">
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
