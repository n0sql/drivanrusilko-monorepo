import { Input } from "../input";
const ResetPassword = ({ id, useSiteWideContext }: { id: string, useSiteWideContext:any }) => {
  const{ handleResetPassword, handleConfirmPasswordChange, handlePassWordChange } = useSiteWideContext();
 
  return (
    <div className="mt-24">
      <form onSubmit={handleResetPassword} className="form">
        <h4 className="text-center  text-primary font-bold mb-5">Reset Your Password</h4>

        <div className="relative  text-center ">
          <Input value="password" type="password" changeHandler={handlePassWordChange} label="Password"/>
          </div>

        <div className="relative mb-7 text-center ">
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            required
            aria-required="true"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm password"
            onChange={(e) => handleConfirmPasswordChange(e)}
            className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-96  w-72 py-5 rounded-xl  sm:text-sm form-input "
          />
        </div>

        <div className="mb-5 form-submit text-center">
          <input
            type="submit"
            className="btn bg-black dark:bg-white dark:text-gray-100 w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
            value="Reset Password"
          />
        </div>
      </form>
    </div>
  );
};

export {ResetPassword};
