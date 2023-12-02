import {LoginForm} from "./LoginForm";
import {ForgotPassword} from "./ForgotPassword";
import {SignupForm} from "./SignupForm";
import {
  Drawer,
} from "@material-tailwind/react";

export const Login = ({useSiteWideContext, classNam}:any) => {
  const {
     openLogin, openSignup, openForgotPassword, openAuthModal, toggleAuthModal
  } = useSiteWideContext()


  return (
    <Drawer overlay={false} size={800} open={openAuthModal} placement="right" onClose={()=>{toggleAuthModal()} }
     className={`${classNam} flex flex-col text-neutral-700 shadow-sm outline-none dark:bg-gray-950 dark:text-neutral-200`}
    >
      <button
        onClick={()=>{toggleAuthModal();}}
        className=" text-gray-950 dark:text-gray-100 text-sm font-bold   rounded-full  shadow shadow-lg uppercase absolute left-0 top-0 mt-5 ml-3"
      >
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
      <h3 className="text-center text-primary  pb-12 mt-5 mb-12">
        {openLogin ? "Login" : openSignup ? "Signup" : "Forgot Password"}
      </h3>

      {openLogin && (
        <LoginForm
        useSiteWideContext={useSiteWideContext}
        />
      )}

      {openSignup && (
        <SignupForm
        useSiteWideContext={useSiteWideContext}
        />
      )}

      {openForgotPassword && (
        <ForgotPassword
        useSiteWideContext={useSiteWideContext}
        />
      )}
    </Drawer>
  );
};

