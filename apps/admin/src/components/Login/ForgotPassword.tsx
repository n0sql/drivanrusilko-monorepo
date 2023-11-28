import { useState } from "react";

const ForgotPassword = ({ setOpenLogin, setOpenSignup, setOpenForgotPassword }: any) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

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

  return (
    <div className="bg-white ">
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
                  setEmailSent(false);
                }}
              >
                Resend link
              </button>
            </p>
          </div>
          <button
            onClick={() => {
              setOpenLogin(true);
              setOpenForgotPassword(false);
            }}
            className="btn bg-primary w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
          >
            Back to Login
          </button>
        </div>
      ) : (
        <>
          {" "}
          <form method="POST" onSubmit={handleForgotPassword} className="form ">
            <h4 className="w-96  mx-auto text-primary font-bold ">
              Enter your email and well send a link to reset your password
            </h4>

            <div className=" mb-6 text-center">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                required
                aria-required="true"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="email address"
                className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-96  w-72 py-5 rounded-xl  sm:text-sm form-input "
              />
            </div>

            <div className="mb-5 form-submit text-center">
              <input
                type="submit"
                className="btn bg-primary w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
                value="Reset Password"
              />
            </div>
          </form>
          <div className="mb-3 text-center">
            <p className="text-sm text-primary">
              Remember your password?{` `}
              <button
                className="text-[#6f50cb] font-bold"
                onClick={() => {
                  setOpenLogin(true);
                  setOpenSignup(false);
                  setOpenForgotPassword(false);
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

export default ForgotPassword;
