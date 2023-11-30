const SignupForm = ({ useSiteWideContext }: any) => {
  const { handleSubmit, response, 
     handleEmailChange, handlePassWordChange, toggleAuthView } = useSiteWideContext()


  return (
    <div className="bg-white mx-auto">
      {response !== null ? (
        <div className="text-center text-primary font-bold mb-5">
          {response === "User created"
            ? "User Created check your email for verification link"
            : "Error Creating User please try again"}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h4 className="text-left  text-primary font-bold">Welcome</h4>

          <div className=" mb-3 ">
            <label htmlFor="userEmail" className="sr-only">
              Email
            </label>
            <input
              required
              aria-required="true"
              type="email"
              name="email"
              id="userEmail"
              onChange={(e) => handleEmailChange(e)}
              placeholder="email address"
              className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-full mx-auto  py-5 w-full  rounded-xl sm:text-sm  form-input"
            />
          </div>

          <div className="relative mb-6 text-center ">
            <label htmlFor="password1" className="sr-only">
              Password
            </label>
            <input
              required
              aria-required="true"
              type="password"
              onChange={(e) => handlePassWordChange(e)}
              id="password1"
              name="password"
              placeholder="password"
              className="border-neutral-600  placeholder-neutral-600 placeholder:text-lg lg:w-96  w-72 py-5 rounded-xl  sm:text-sm form-input "
            />
          </div>

          <div className="mb-5 form-submit">
            <input
              type="submit"
              className="btn bg-primary w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer "
              value="Sign Up"
            />
          </div>
        </form>
      )}

      {/* signup if irst time */}

      <div className="mb-3 text-center text-[#6f50cb]">
        <p className="text-primary text-sm">
          Already have an account?{` `}
          <button
            className="text-[#6f50cb] font-bold"
            onClick={() => {
              toggleAuthView('signup')
            }}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export {SignupForm};
