
const Select = ({ goToStep, usstates }: any) => {
  return (
    <div className="">
      {/* <button className="bg-[#9ab77d] text-white w-96  mt-6 px-2 py-1 hover:bg-[#cc835c] rounded-lg mb-[2.625rem] hover:cursor-pointer"><span >Your free online visit has been applied!</span></button> */}

      <span className="block text-[#cc835c] pt-2 mb-3">Lets Get Started</span>

      <h1 className=" ">Consult with a healthcare provider without leaving the house.</h1>

      <p className="mb-3 block">We need to make sure we are licensed in your state.</p>

      <span className="relative mb-3 block"> State</span>
      <div className="relative mb-3">
        {/* a label that will float inside the select on the upper left */}

        <select
          id="state"
          placeholder="dfdfd"
          className="bg-gray-50 border h-16 border-gray-300 text-gray-900  font-bold rounded shadow shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 peer"
        >
          {usstates.map((state:any, index:number) => {
            return (
              <option key={index} value={state}>
                {state}{" "}
              </option>
            );
          })}
        </select>
        <label
          htmlFor="state"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 "
        >
          Select State
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4  text-blue-600 bg-gray-100 border-[#cc835c] border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="link-checkbox"
          className=" ml-4 text-[12px] font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a href="#" className="underline decoration-[#cc835c]">
            Terms and conditions
          </a>
          ,{" "}
          <a href="#" className="underline decoration-[#cc835c]">
            Privacy Policy and Telehealth Consent
          </a>
        </label>
      </div>
      <button
        onClick={() => {
          goToStep(1, "/consultation/1");
        }}
        className="bg-[#cc835c] text-white w-full mt-6 px-4 py-4 hover:bg-[#cc835c] hover:cursor-pointer"
      >
        {" "}
        Continue
      </button>
    </div>
  );
};

export{Select}
