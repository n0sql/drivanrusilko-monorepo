import React from "react";

const FormInput = ({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  required = false,
  value,
  handleChange,
}: FormInputProps) => {
  return (
    <div className="relative mb-4">
      <input
        className=" m-0 block h-12 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
      />
      <label
        className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 pt-2 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:-translate-y-1 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:translate-x-[0.12rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
