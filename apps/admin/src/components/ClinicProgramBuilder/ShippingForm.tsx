import { usstates } from "../../data/states"
import React from "react";

const ShippingForm = () => {
  return (
    <div>
      <div className="">
        <div className=" border-gray-900/10 ">
          <h1 className="">Shipping Info & Address</h1>
          <p className="mt-1 ">
            Where would you like to have your medication shipped, if prescribed? Use your legal
            name.
          </p>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="relative sm:col-span-3">
              <input
                type="text"
                className="peer m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="first-name"
                placeholder="First name (legal)"
              />
              <label
                htmlFor="first-name"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                First name (legal)
              </label>
            </div>

            <div className="relative sm:col-span-3">
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last name (legal)"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              />
              <label
                htmlFor="last-name"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                Last name (legal)
              </label>
            </div>

            <div className="relative sm:col-span-full">
              <input
                type="text"
                name="street"
                id="street"
                placeholder="street"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              />
              <label
                htmlFor="street"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                Street Address
              </label>
            </div>
            <div className="relative sm:col-span-6">
              <input
                type="text"
                name="apartment"
                id="apartment"
                placeholder="apartment"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              />
              <label
                htmlFor="apartment"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                Apt/Suite
              </label>
            </div>
            <div className="relative sm:col-span-6">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              />
              <label
                htmlFor="city"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                City
              </label>
            </div>
            <div className="relative sm:col-span-3">
              <select
                id="state"
                name="state"
                autoComplete="state"
                placeholder="State"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300  bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              >
                {usstates.map((state, index) => {
                  return (
                    <option key={index} value={state}>
                      {state}{" "}
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="state"
                className="absolute text-sm  dark:text-gray-400 origin-[0_0] duration-300 transform -translate-y-2 text-neutral-700 transition-[opacity,_transform]  ease-in-out  scale-75 top-4  peer-focus:translate-x-[0.15rem]  left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-4 motion-reduce:transition-none peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65]"
              >
                State
              </label>
            </div>

            <div className="relative sm:col-span-3">
              <input
                type="text"
                name="zip"
                id="zip"
                placeholder="Zip"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              />
              <label
                htmlFor="zip"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                Zip
              </label>
            </div>

            <div className="relative sm:col-span-full">
              <select
                id="country"
                name="country"
                placeholder="country"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300  bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer "
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <label
                htmlFor="state"
                className="absolute text-sm  dark:text-gray-400 origin-[0_0] duration-300 transform -translate-y-2 text-neutral-700 transition-[opacity,_transform]  ease-in-out  scale-75 top-4 z-10 peer-focus:translate-x-[0.15rem]  left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-4 motion-reduce:transition-none peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65]"
              >
                Country
              </label>
            </div>

            <div className="relative sm:col-span-full">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                className=" m-0 block h-16 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
              />
              <label
                htmlFor="zip"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform]  ease-in-out peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
              >
                Phone
              </label>
            </div>

            <div className="relative flex items-center sm:col-span-full">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="offers" className="font-medium text-gray-900 ml-4">
                Text me updates about drivanrusilko products and services
              </label>
            </div>
            <div className="relative  sm:col-span-full">
              <button
                onClick={() => {
                  console.log("clicked");
                }}
                className="bg-[#cc835c]  w-full text-white  mt-6 px-4 py-4 hover:bg-[#cc835c] cursor-pointer"
              >
                {" "}
                Save and Continue
              </button>
            </div>
            <div className="relative  sm:col-span-6 text-left">
              <span className=" tracking-wider ">
                By checking the option &quot;Text me updates about Hims products and
                services!!&quot;, I agree to receive marketing text messages from Hims Promotional
                Alerts at the number provided above. Messages may be sent using an automatic
                telephone dialing system. Consent is not required as a condition of purchase.
                Message and data rates may apply. Message frequency varies. Send HELP for help or
                STOP to cancel. Messages may include shopping cart reminders. Privacy policy. SMS
                Terms of Service.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
