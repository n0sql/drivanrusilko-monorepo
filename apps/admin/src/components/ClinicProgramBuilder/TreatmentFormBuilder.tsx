import React, { useState, useEffect } from "react";
import FormInput from "../FormGeneratorComponents/FormInput";

function FormBuilder({ onSubmit }: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !description) {
      alert("Please fill out all fields");
      return;
    }
    onSubmit({ name, description });
  }

  useEffect(() => {
    console.log(name, description);
  }, [name, description]);

  return (
    <div className="relative mx-auto p-4 w-full  max-w-2xl h-full md:h-auto pt-32">
      <h1 className="mb-6 font-semibold text-gray-800 dark:text-white">New Clinic</h1>
      <div className="relative p-4  bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label
              htmlFor="treatmentname"
              className="block text-sm mb-3 font-medium text-gray-700 dark:text-gray-400"
            >
              Clinic Name
            </label>
            <input
              name="name"
              id="treatmentname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Clinic Name"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>

          <textarea
            placeholder="Description"
            rows={7}
            className="block p-2.5 w-full focus:ring-[#cc835c] focus:border-[#cc835c] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
            id="exampleFormControlTextarea1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-[#cc835c] text-white w-72  mx-auto px-8 py-3 hover:bg-[#cc835c] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormBuilder;
