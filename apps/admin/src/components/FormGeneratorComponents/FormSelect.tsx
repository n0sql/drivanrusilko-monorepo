import React from "react";

const FormSelect = ({
  label,
  name,
  options,
  id,
  required = false,
  handleChange,
}: FormSelectProps) => {
  return (
    <div className="relative mb-4">
      <select
        className="m-0 block h-16 w-full rounded border border-solid border-neutral-300 text-primary bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer "
        id={id}
        name={name}
        required={required}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        className="absolute text-sm text-gray-500 dark:text-gray-400 origin-[0_0] duration-300 transform -translate-y-2 transition-[opacity,_transform] ease-in-out  scale-75 top-4 z-10 peer-focus:translate-x-[0.15rem]  left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-4 motion-reduce:transition-none peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65]"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default FormSelect;
