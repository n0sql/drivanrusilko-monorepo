import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import {FormInput, FormSelect} from "ui";
import { PlusIcon } from "@heroicons/react/24/outline";

const BuildFormCategories = ({
  onSubmit,
  newFormId,
  router,
}: {
  onSubmit: any;
  newFormId: string;
  router: any;
}) => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const navigateToCategory = (e: any, index: number) => {
    e.preventDefault();
    setCurrentCategory(index);
  };

  const navigateToStep = (e: any, index: number) => {
    e.preventDefault();
    setCurrentStep(index);
  };

  const [categories, setCategories] = useState<TreatmentCategory[]>([
    {
      name: "",
      description: "",
      steps: [{ title: "", description: "", type: "text", options: [] }],
    },
  ]);

  const options: Options[] = [
    { value: "text", label: "Text" },
    { value: "textarea", label: "Textarea" },
    { value: "checkbox", label: "Checkbox" },
    { value: "select", label: "Select" },
    { value: "radio", label: "Radio" },
  ];

  // funtion to check if all fields are filled out in categories their steps and each step's options
  const checkFields = () => {
    let valid = true;
    categories.forEach((category) => {
      if (category.name === "") {
        valid = false;
      }
      if (category.steps.length === 0) {
        valid = false;
      }
      category.steps.forEach((step) => {
        if (step.title === "" || !step.type) {
          valid = false;
        }
        if (
          step.options &&
          step.options.length > 0 &&
          (step.type === "select" || step.type === "radio" || step.type === "checkbox")
        ) {
          step.options.forEach((option) => {
            if (option.label === "" || option.value === "") {
              valid = false;
            }
          });
        }
      });
    });
    return valid;
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const isFilled = checkFields();
    // if (isFilled === false) { alert('Please fill out all fields'); return; }
    onSubmit(categories);
  }

  function handleCategoryChange(index: number, changes: Partial<TreatmentCategory>) {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) => (i === index ? { ...category, ...changes } : category)),
    );
  }

  function handleStepChange(
    categoryIndex: number,
    stepIndex: number,
    changes: Partial<IntakeStep>,
  ) {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === categoryIndex
          ? {
              ...category,
              steps: category.steps.map((step, j) =>
                j === stepIndex ? { ...step, ...changes } : step,
              ),
            }
          : category,
      ),
    );
  }

  function handleAddCategory() {
    setCategories((prevCategories) => [
      ...prevCategories,
      { name: "", description: "", steps: [{ description: "", title: "", type: "text" }] },
    ]);
    setCurrentCategory(categories.length);
  }

  function handleRemoveCategory(index: number) {
    if (categories.length === 1) return;
    setCategories((prevCategories) => prevCategories.filter((category, i) => i !== index));
    setCurrentCategory(currentCategory - 1);
  }

  function handleAddStep(index: number) {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index
          ? {
              ...category,
              steps: [...category.steps, { title: "", description: "", type: "text" }],
            }
          : category,
      ),
    );
    setCurrentStep(categories[currentCategory - 1].steps.length);
  }

  function handleRemoveStep(categoryIndex: number, stepIndex: number) {
    if (categories[categoryIndex].steps.length === 1) return;
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === categoryIndex
          ? { ...category, steps: category.steps.filter((step, j) => j !== stepIndex) }
          : category,
      ),
    );
    setCurrentStep(currentStep - 1);
  }

  function handleAddOption(categoryIndex: number, stepIndex: number) {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      const newSteps = [...newCategories[categoryIndex].steps];
      const options = newSteps[stepIndex].options;
      if (options) {
        const newOptions = [...options, { label: "", value: "" }];
        newSteps[stepIndex] = { ...newSteps[stepIndex], options: newOptions };
        newCategories[categoryIndex] = { ...newCategories[categoryIndex], steps: newSteps };
      } else {
        newSteps[stepIndex] = { ...newSteps[stepIndex], options: [{ label: "", value: "" }] };
        newCategories[categoryIndex] = { ...newCategories[categoryIndex], steps: newSteps };
      }
      return newCategories;
    });
  }

  function handleRemoveOption(categoryIndex: number, stepIndex: number, optionIndex: number) {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      const newSteps = [...newCategories[categoryIndex].steps];
      const newOptions = [...newSteps[stepIndex].options!].filter((_, i) => i !== optionIndex); // Use ! to tell TypeScript that options is not undefined
      newSteps[stepIndex] = { ...newSteps[stepIndex], options: newOptions };
      newCategories[categoryIndex] = { ...newCategories[categoryIndex], steps: newSteps };
      return newCategories;
    });
  }
  const pageNumbers = Array.from({ length: categories.length }, (_, i) => i + 1).map((page) => (
    <div key={page} className="inline-flex -space-x-px">
      <button
        className={`px-3 py-2 leading-tight  border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${
          currentCategory === page ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={(e) => navigateToCategory(e, page)}
      >
        {page}
      </button>
    </div>
  ));

  const stepPageNumbers = Array.from(
    { length: categories[currentCategory - 1]?.steps?.length },
    (_, i) => i + 1,
  ).map((page) => (
    <div key={page} className="inline-flex -space-x-px">
      <button
        className={`px-3 py-2 leading-tight  border border-gray-300   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${
          currentStep === page ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={(e) => navigateToStep(e, page)}
      >
        {page}
      </button>
    </div>
  ));

  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <main className="p-4 md:ml-64 h-auto pt-20     py-8">
      <div className="relative mx-auto p-4 w-full max-w-2xl h-full md:h-auto">
        <h1 className="text-2xl font-bold text-center mb-5">
          Add Treatments to your Clinic {newFormId}
        </h1>
        <div className="relative p-4  rounded-lg  dark:bg-gray-800 sm:p-5">
          <div className="flex justify-center">
            <div className="flex justify-center items-center">{pageNumbers}</div>
            <div className="">
              <button
                id={`addCategory-${categories.length}`}
                onClick={() => {
                  handleAddCategory();
                }}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <PlusIcon className="w-5 stroke-[3px] text-secondary" aria-hidden="true" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} method="POST" className=" ">
            <div className="flex  gap-x-3 mt-5  shadow bg-gray-200 rounded rounded-xl">
              {categories.map((category, index) => {
                if (index === currentCategory - 1) {
                  return (
                    <div key={index} className=" w-full   px-3 py-2 mb-6">
                      <div className="mb-3 flex">
                        {index !== 0 && (
                          <MinusCircleIcon
                            className="w-5 text-black cursor-pointer"
                            id={`removeCategory-${index}`}
                            onClick={() => handleRemoveCategory(index)}
                          ></MinusCircleIcon>
                        )}
                      </div>
                      <div className="shadow px-3 py-2 mb-6 rounded bg-white shadow-md ">
                        {" "}
                        {`Treatment ${index + 1}`}
                        <div className="relative  mb-4 mt-1">
                          <input
                            className=" m-0 block h-12 w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
                            name="categoryname"
                            id={`categoryname-${index}`}
                            value={category.name}
                            onChange={(e) => handleCategoryChange(index, { name: e.target.value })}
                            placeholder="Treatment Name"
                            type="text"
                          />
                          <label className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:-translate-y-1 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200">
                            Treatment Name
                          </label>
                        </div>{" "}
                      </div>
                      <div className="">
                        <h3 className="items-center font-semibold">Intake Steps</h3>
                        <div className=" flex items-center justify-center py-2">
                          <div className="flex justify-center items-center">{stepPageNumbers}</div>
                          <div>
                            {" "}
                            <button
                              id={`addStep-${index}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddStep(index);
                              }}
                              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <PlusIcon
                                className="w-5 stroke-[3px] text-secondary"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        {category.steps.map((step, stepIndex) => {
                          if (stepIndex === currentStep - 1) {
                            return (
                              <div
                                key={stepIndex}
                                className="mb-3 mt-4 shadow bg-white rounded px-3 py-2 border-t"
                              >
                                <div className="float-right flex">
                                  {" "}
                                  {stepIndex !== 0 && (
                                    <MinusCircleIcon
                                      id={`removeStep-${stepIndex}`}
                                      className="w-5 text-black cursor-pointer"
                                      onClick={() => handleRemoveStep(index, stepIndex)}
                                    ></MinusCircleIcon>
                                  )}
                                </div>
                                {`Intake step ${stepIndex + 1}`}
                                <FormInput
                                  name="stepname"
                                  id={`question-${stepIndex}`}
                                  label="Question?"
                                  value={step.title}
                                  handleChange={(e) =>
                                    handleStepChange(index, stepIndex, { title: e.target.value })
                                  }
                                  placeholder="Step Name"
                                  type="text"
                                />

                                <FormInput
                                  name="stepdescription"
                                  id={`stepdescription-${stepIndex}`}
                                  label="Question Description"
                                  value={step.description}
                                  handleChange={(e) =>
                                    handleStepChange(index, stepIndex, {
                                      description: e.target.value,
                                    })
                                  }
                                  placeholder="Step Description"
                                  type="text"
                                />
                                <FormSelect
                                  options={options}
                                  name="steptype"
                                  id={`steptype-${stepIndex}`}
                                  label="Input Type"
                                  value={step.type}
                                  handleChange={(e) =>
                                    handleStepChange(index, stepIndex, {
                                      type: e.target.value as
                                        | "text"
                                        | "textarea"
                                        | "checkbox"
                                        | "select"
                                        | "radio",
                                    })
                                  }
                                  placeholder="Input Type"
                                />

                                {(step.type === "select" ||
                                  step.type === "radio" ||
                                  step.type === "checkbox") && (
                                  <div>
                                    <div className="flex items-center cursor-pointer mb-3 gap-x-2">
                                      <PlusCircleIcon
                                        className="w-5 h-5 text-black "
                                        onClick={(e) => handleAddOption(index, stepIndex)}
                                      ></PlusCircleIcon>{" "}
                                      <small>Add Input Options</small>
                                    </div>

                                    <div className="flex flex-col max-h-36 overflow-y-auto">
                                      {" "}
                                      {step.options?.map((option: Options, optionIndex: number) => (
                                        <div
                                          key={optionIndex}
                                          className="flex items-center gap-x-1"
                                        >
                                          <div className="relative  mb-2    flex items-center">
                                            <input
                                              className=" m-0 block w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white  focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
                                              name="optionlabel"
                                              id={`option-${optionIndex}`}
                                              value={option.label}
                                              onChange={(e) =>
                                                handleStepChange(index, stepIndex, {
                                                  options: [
                                                    ...(step.options || []).slice(0, optionIndex),
                                                    { ...option, label: e.target.value },
                                                    ...(step.options || []).slice(optionIndex + 1),
                                                  ],
                                                })
                                              }
                                              placeholder="Option Label"
                                              type="text"
                                            />
                                            <label className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:-translate-y-1 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200">
                                              Option Label
                                            </label>
                                          </div>

                                          <div className="relative mb-2 flex items-center">
                                            <input
                                              className=" m-0 block  w-full  rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white  focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] peer"
                                              name="optionvalue"
                                              id={`option-${optionIndex}`}
                                              value={option.value}
                                              onChange={(e) =>
                                                handleStepChange(index, stepIndex, {
                                                  options: [
                                                    ...(step.options || []).slice(0, optionIndex),
                                                    { ...option, value: e.target.value },
                                                    ...(step.options || []).slice(optionIndex + 1),
                                                  ],
                                                })
                                              }
                                              placeholder="Option Value"
                                              type="text"
                                            />
                                            <label className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:-translate-y-1 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200">
                                              Option Value
                                            </label>
                                          </div>

                                          <MinusCircleIcon
                                            id={`removeOption-${optionIndex}`}
                                            className="w-5 h-5 text-black cursor-pointer"
                                            onClick={() =>
                                              handleRemoveOption(index, stepIndex, optionIndex)
                                            }
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
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
    </main>
  );
};

export default BuildFormCategories;
