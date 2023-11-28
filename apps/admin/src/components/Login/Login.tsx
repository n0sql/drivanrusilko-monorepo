import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import SignupForm from "./SignupForm";

const Login = () => {
  const [openLogin, setOpenLogin] = useState(true);
  const [openSignup, setOpenSignup] = useState(false);

  const [openForgotPassword, setOpenForgotPassword] = useState(false);

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

  return (
    <div
      className="invisible bg-white fixed bottom-0 top-0 right-0 z-[1045] flex   lg:w-[50vw] w-full transition duration-500 ease-in-out   translate-x-full flex-col text-neutral-700 shadow-sm outline-none dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none "
      tabIndex={-1}
      id="offcanvasLogin"
      aria-labelledby="offcanvasLogin"
      data-te-offcanvas-init
    >
      <button
        data-te-offcanvas-dismiss
        className=" text-black text-sm font-bold   rounded-full  shadow shadow-lg uppercase absolute left-0 top-0 mt-5 ml-3"
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
          handleLogin={handleLogin}
          setOpenLogin={setOpenLogin}
          setOpenSignup={setOpenSignup}
          setOpenForgotPassword={setOpenForgotPassword}
        />
      )}

      {openSignup && (
        <SignupForm
          setOpenSignup={setOpenSignup}
          setOpenLogin={setOpenLogin}
          setOpenForgotPassword={setOpenForgotPassword}
        />
      )}

      {openForgotPassword && (
        <ForgotPassword
          setOpenSignup={setOpenSignup}
          setOpenLogin={setOpenLogin}
          setOpenForgotPassword={setOpenForgotPassword}
        />
      )}
    </div>
  );
};

export default Login;
