import { Input } from "ui";
import { useSiteWideContext } from "../../context";
const SignUpForm = () => {
  const { handleSignUpSubmit, response, 
     handleEmailChange, handlePassWordChange, toggleAuthView, 
     handleUsernameChange, 
    
    } = useSiteWideContext()
  return (
    <div className=" mx-auto">

        <form onSubmit={handleSignUpSubmit} className="form flex flex-col justify-between gap-y-4">
          <h4 className="text-left  text-primary font-bold">Welcome</h4>
          <div className="relative text-center ">
          <Input value="username"  type="text" changeHandler={handleUsernameChange} label="Username"/>
          </div>
          <div className="relative text-center ">
          <Input value="email" type="text" changeHandler={handleEmailChange} label="Email"/>
          </div>
          <div className="relative  text-center ">
          <Input value="password" type="password" changeHandler={handlePassWordChange} label="Password"/>
          </div>
 
          <div className="mb-5 form-submit">
            <input
              type="submit"
              className="bg-black dark:bg-gray-100 dark:text-gray-950 w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
              value="Sign Up"
            />
          </div>
        </form>
     

      <div className="mb-3 text-center text-[#6f50cb] dark:text-gray-100">
        <p className="text-primary text-sm">
          Already have an account?{` `}
          <button
            className="text-[#6f50cb] font-bold"
            onClick={() => {
              toggleAuthView('login')
            }}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm
