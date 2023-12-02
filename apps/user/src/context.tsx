import { signIn } from "next-auth/react";
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
    openLogin: boolean;
    openSignup: boolean;
    openForgotPassword: boolean;
    authView: string;
    toggleAuthView: (authView:string) => void
    handleLogin: (e:any) => void;
    email:string;
    emailSent: boolean;
    noEmailSent: ()=> void;
    handleForgotPassword: (e:any) => void;
    handleEmailChange: (e:any) => void;
    password: string
    response: string
    handlePassWordChange: (e:any) => void;
    handleSignUpSubmit: (e:any) => void;
    confirmPassword: string;
    handleResetPassword: (e:any, id:string) => void;
    handleConfirmPasswordChange: (e:any) => void;
    openTreatementModal: boolean;
    toggleTreatmentModal: ()=> void;
 }
 export type Viewkey = 'main' | 'treatment' | 'shop' | 'meet';

 export const SiteWideContext = createContext<SiteWideContextType>({} as SiteWideContextType);

 export const SiteWideContextProvider =({children}: {children: React.ReactNode}) => {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [response, setResponse] = useState<any>(null);
    const [mainView, setMainView] = useState<boolean>(false);
    const [treatmentView, setTreatmentView] = useState<boolean>(false);
    const [shopView, setShopView] = useState<boolean>(false);
    const [meetView, setMeetView] = useState<boolean>(false);
    const [openHomeModal, setOpenHomeModal] = useState<boolean>(false);
    const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
    const [view, setView]  =  useState<string>('main')
    const [authView, setAuthView] =  useState<string>('login')
    const toggleAuthModal = () => setOpenAuthModal(!openAuthModal);
    const toggleHomeModal = () => setOpenHomeModal(!openHomeModal);
    const toggleView = (view: string) => setView(view);
    const toggleAuthView = (authView:string) => setAuthView(authView);
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const [openTreatementModal, setOpenTreatmentsModal] = useState(false);
    const toggleTreatmentModal = () => setOpenTreatmentsModal(!openTreatementModal);
    useEffect(()=>{
        const viewMap = {
                        'main': setMainView,
                       'treatment': setTreatmentView,
                       'shop': setShopView,
                       'meet': setMeetView
                    };
                    Object.keys(viewMap).map((item:string) => item === view ? viewMap[item as Viewkey](true) : viewMap[item as Viewkey](false))
                
    }, [view])
    useEffect(()=>{
        const viewMap = {
                        'login': setOpenLogin,
                       'signup': setOpenSignup,
                       'resetPw': setOpenForgotPassword,
                    };
                    Object.keys(viewMap).map((item:string) => item === authView ? viewMap[item as Viewkey](true) : viewMap[item as Viewkey](false))
                
    }, [authView])
    
    const handleLogin = (e: any) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        signIn("credentials", {
          redirect: false,
          email,
          password,
          
        });
      };
      const noEmailSent =()=>{
        setEmailSent(false);
      }
      const handleForgotPassword = (e: any) => {
        e.preventDefault();
        console.log(email);
        fetch("/api/auth/pass-reset/reset", {
          method: "POST",
          body: JSON.stringify({
            email,
          }),
        }).then((res) => {
          res.text().then((text) => {
            alert(text);
            if (text === "Email Sent") {
              setEmailSent(true);
            }
          });
        });
      };
      const handleEmailChange = (e:any) =>{ setEmail(e.target.value)}
      const handlePassWordChange = (e:any) => {setPassword(e.target.value)}
      const handleConfirmPasswordChange= (e:any)=>{setConfirmPassword(e.target.value)}
    
      const handleSignUpSubmit = async (e: any) => {
        e.preventDefault();
       
        await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
        }).then((res) => {
          res.text().then((text) => {
            setResponse(text);
          });
        });
      };
      

      const handleResetPassword = (e: any, id:string) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
    
        fetch(`/api/auth/resetpassword/${id}`, {
          method: "POST",
          body: JSON.stringify({
            password,
          }),
        }).then((res) => {
          res.text().then((text) => {
            alert(text);
            if (text === "Password reset successful") {
              window.location.href = "/";
            }
          });
        });
      };
        // on scroll id makesticky should have a class of sticky the image with id treatmentimg should have a class of hidden

  const callback = (entries: any) => {
    if (entries[0].isIntersecting) {
      document?.getElementById("treatimg")?.classList.add("hidden");

      document?.getElementById("closebtn")?.classList.add("mt-16");
      document?.getElementById("myhead")?.classList.add("shadow");
      document?.getElementById("myhead")?.classList.add("shadow-xl");
    } else {
      console.log(entries[0]);
      document?.getElementById("treatimg")?.classList.remove("hidden");

      document?.getElementById("closebtn")?.classList.remove("mt-16");
      document?.getElementById("myhead")?.classList.remove("shadow");
      document?.getElementById("myhead")?.classList.remove("shadow-xl");
    }
  };

  useEffect(() => {
    const options = {
      root: document?.querySelector("#offcanvasTreatment"),
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const targetEl = document?.querySelector("[data-te-sidenav-menu-ref]");
    observer.observe(targetEl as Element);
  },[]);
    
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
    view,
    openLogin,
    openSignup,
    openForgotPassword,
    handleLogin,
    email,
    emailSent,
    noEmailSent,
    handleForgotPassword,
    handleEmailChange,
    password,
    response,
    handlePassWordChange,
    handleSignUpSubmit,
    confirmPassword,
    handleResetPassword,
    handleConfirmPasswordChange,
    authView,
    toggleAuthView,
    openTreatementModal,
    toggleTreatmentModal
        }}
        >
{children}
        </SiteWideContext.Provider>
    )

 };

 export const useSiteWideContext =()=> useContext(SiteWideContext);