import { useEffect } from "react";
const LoginForm = ({ handleLogin, setOpenLogin, setOpenSignup, setOpenForgotPassword }: any) => {
  // after submit hide login form

  return (
    <div className="bg-white mx-auto">
      <form onSubmit={handleLogin} className="form">
        <h4 className="text-left  text-primary font-bold">Welcome Back</h4>

        <div className=" mb-3 ">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            required
            aria-required="true"
            type="email"
            id="email"
            name="email"
            placeholder="email address"
            className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-full mx-auto  py-5 w-full  rounded-xl sm:text-sm  form-input"
          />
        </div>

        <div className="relative mb-3 text-center ">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            required
            aria-required="true"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-96  w-72 py-5 rounded-xl  sm:text-sm form-input "
          />
        </div>

        {/* forgot your password */}
        <div className="mb-6 text-right">
          <p
            className="text-[#6f50cb] font-bold"
            onClick={() => {
              setOpenLogin(false);
              setOpenSignup(false);
              setOpenForgotPassword(true);
            }}
          >
            Forgot your password?
          </p>
        </div>
        <div className="mb-5 form-submit">
          <input
            type="submit"
            className="btn bg-primary w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
            value="Login"
          />
        </div>
      </form>

      {/* signup if irst time */}

      <div className="mb-3 text-center">
        <p className="text-primary text-sm">
          Dont have an account?{` `}
          <button
            className="text-[#6f50cb] font-bold"
            onClick={() => {
              setOpenLogin(false);
              setOpenSignup(true);
              setOpenForgotPassword(false);
            }}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
