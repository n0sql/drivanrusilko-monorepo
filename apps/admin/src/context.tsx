
import {

    createContext,
    useContext,
    useEffect,
    useState,

  } from "react";


interface SiteWideContextType {
    openHomeModal: boolean;
    openAuthModal: boolean;
    toggleHomeModal: ()=> void;
    toggleAuthModal: ()=> void;
    mainView: boolean;
    shopView: boolean;
    treatmentView: boolean;
    meetView: boolean;
    toggleView: (view:string)=> void;
    view: string;
 }
 export type Viewkey = 'main' | 'treatment' | 'shop' | 'meet';

 export const SiteWideContext = createContext<SiteWideContextType>({} as SiteWideContextType);

 export const SiteWideContextProvider =({children}: {children: React.ReactNode}) => {

    const [mainView, setMainView] = useState<boolean>(false);
    const [treatmentView, setTreatmentView] = useState<boolean>(false);
    const [shopView, setShopView] = useState<boolean>(false);
    const [meetView, setMeetView] = useState<boolean>(false);
    
    const [openHomeModal, setOpenHomeModal] = useState<boolean>(false);
    const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
    const [view, setView]  =  useState<string>('main')

    const toggleAuthModal = () => setOpenAuthModal(!openAuthModal);
    const toggleHomeModal = () => setOpenHomeModal(!openHomeModal);
    const toggleView = (view: string) => setView(view);

    useEffect(()=>{
        const viewMap = {
                        'main': setMainView,
                       'treatment': setTreatmentView,
                       'shop': setShopView,
                       'meet': setMeetView
                    };
                    Object.keys(viewMap).map((item:string) => item === view ? viewMap[item as Viewkey](true) : viewMap[item as Viewkey](false))
                
    }, [view])
    return(
        <SiteWideContext.Provider
        value={{
            openHomeModal,
    openAuthModal,
    toggleHomeModal,
    toggleAuthModal,
    mainView,
    shopView,
    treatmentView,
    meetView,
    toggleView,
    view
        }}
        >
{children}
        </SiteWideContext.Provider>
    )

 };

 export const useSiteWideContext =()=> useContext(SiteWideContext);