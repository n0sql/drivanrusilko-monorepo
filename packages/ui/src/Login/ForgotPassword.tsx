import { Input } from "../input";

const ForgotPassword = ({ useSiteWideContext }: any) => {
  const { 
      emailSent, noEmailSent, handleForgotPassword,
    handleEmailChange, toggleAuthView
    } = useSiteWideContext()

  return (
    <div className=" ">
      {emailSent ? (
        <div className="mx-auto w-96">
          <h4 className="text-left  text-primary font-bold mb-5">Check your email</h4>
          <p className="text-left text-primary mb-5">
            You should receive an email shortly with a link to reset your password
          </p>

          <div className="mb-5 ">
            <p className="text-sm text-primary">
              Didnt receive it?{``}
              <button
                className="text-[#6f50cb] font-bold"
                onClick={() => {
                  noEmailSent();
                }}
              >
                Resend link
              </button>
            </p>
          </div>
          <button
            onClick={() => {
              toggleAuthView('resetPw')
              
            }}
            className="btn bg-primary  w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
          >
            Back to Login
          </button>
        </div>
      ) : (
        <>
          {" "}
          <form method="POST" onSubmit={handleForgotPassword} className="form ">
            <h4 className="w-72  mx-auto text-primary font-bold mb-3 ">
              Enter your email and we'll send a link to reset your password
            </h4>

            <div className=" mb-6 text-center">
            <div className="relative w-72 mx-auto text-center ">
          <Input value="email" type="text" changeHandler={handleEmailChange} label="Email"/>
          </div>
            </div>

            <div className="mb-5 form-submit text-center">
              <input
                type="submit"
                className="btn bg-black dark:bg-white dark:text-gray-950 w-full text-gray-100 lg:w-72 rounded-full py-2 cursor-pointer"
                value="Reset Password"
              />
            </div>
          </form>
          <div className="mb-3 text-center">
            <p className="text-sm text-primary">
              Remember your password?{` `}
              <button
                className="text-[#6f50cb] font-bold hover:underline"
                onClick={() => {
                  toggleAuthView("login")
                }}
              >
                Back to login
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export {ForgotPassword}
