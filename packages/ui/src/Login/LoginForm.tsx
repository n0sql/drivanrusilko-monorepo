import { Input } from "../input";
const LoginForm = ({ useSiteWideContext }: any) => {
  // after submit hide login form
 const { handleLogin, toggleAuthView,handleEmailChange, handlePassWordChange,  } = useSiteWideContext()
  return (
    <div className="bg-white mx-auto ">
      <h4 className="text-left  text-primary font-bold mb-2">Welcome Back</h4>
      <form onSubmit={handleLogin} className="flex flex-col justify-between gap-y-4">
      <div className="relative text-center ">
          <Input value="email" type="text" changeHandler={handleEmailChange} label="Email"/>
          </div>
          <div className="relative  text-center ">
          <Input value="password" type="password" changeHandler={handlePassWordChange} label="Password"/>
          </div>

        {/* forgot your password */}
        <div className="text-right">
          <span
            className="text-[#6f50cb] font-bold text-sm"
            onClick={() => {
              toggleAuthView("resetPw")

            }}
          >
            Forgot your password?
          </span>
        </div>
        <div className=" form-submit">
          <input
            type="submit"
            className="btn bg-black dark:bg-white dark:text-gray-100 w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
            value="Login"
          />
        </div>
      </form>

      {/* signup if irst time */}

      <div className="text-center">
        <span className="text-[#6f50cb] text-sm">
          Dont have an account?{` `}
          <button
            className="text-[#6f50cb] font-bold"
            onClick={() => {
              toggleAuthView("signup")
            }}
          >
            Create an account
          </button>
        </span>
      </div>
    </div>
  );
};

export {LoginForm};
