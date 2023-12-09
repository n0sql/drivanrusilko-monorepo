import { Input } from "ui";
import { useSiteWideContext } from "../../context";
const LoginForm = () => {
 const { handleLogin, toggleAuthView,handleEmailChange, handlePassWordChange,  } = useSiteWideContext()
  return (
    <div className="mx-auto ">
      <h4 className="text-left  text-primary font-bold mb-2">Welcome Back</h4>
      <form onSubmit={handleLogin} className="flex flex-col justify-between gap-y-4">
      <div className="relative text-center ">
          <Input value="email" type="text" changeHandler={handleEmailChange} label="Email"/>
          </div>
          <div className="relative  text-center ">
          <Input value="password" type="password" changeHandler={handlePassWordChange} label="Password"/>
          </div>
        
        <div className=" form-submit">
          <input
            type="submit"
            className="btn bg-black dark:bg-white dark:text-gray-950 w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
            value="Login"
          />
        </div>
      </form>

      {/* signup if irst time */}

      <div className="text-center">
        <span className="text-[#6f50cb] dark:text-gray-100 text-sm">
          Dont have an account?{` `}
          <button
            className="text-[#6f50cb] font-bold hover:underline"
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

export  default LoginForm
