import React from "react";

const Inputele = ({ data, handleChange }: any) => {
  return (
    <div className=" w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
        {data.label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        id={data.name}
        name={data.name}
        type={data.type}
        placeholder={data.label}
        onChange={handleChange}
      />
    </div>
  );
};

export default Inputele;
