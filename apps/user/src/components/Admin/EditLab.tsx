import React, { useState } from "react";

const EditLab = ({ labData }: any) => {
  const [lab, setLab] = useState<any>(labData);

  const categories = [
    "ALLERGY TESTING",
    "AUTOIMMUNE DISORDER TESTS",
    "CANCER SCREENING TESTS",
    "DIABETES BLOOD TESTS",
    "DIGESTIVE SYSTEM BLOOD TESTS",
    "DRUGS AND ALCOHOL TESTS",
    "FERTILITY TESTS",
    "GENERAL HEALTH & WELLNESS TESTS",
    "HEART HEALTH BLOOD TESTS",
    "HEAVY METAL TESTING",
    "HORMONE TESTING",
    "INFECTIOUS DISEASE TESTS",
    "KIDNEY FUNCTION TESTS",
    "LIVER FUNCTION TESTS",
    "MEN’S HEALTH TESTS",
    "STD TESTS",
    "THYROID FUNCTION TESTS",
    "VITAMIN AND NUTRITION TESTS",
    "WEIGHT MANAGEMENT TESTS",
    "WOMEN’S HEALTH TESTS",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLab((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleResultsChange = (e: any, index: number) => {
    const results = [...lab.results];
    results[index] = e.target.value;
    setLab((prevState: any) => ({ ...prevState, results }));
  };

  const addResult = () => {
    setLab((prevState: any) => ({ ...prevState, results: [...prevState.results, ""] }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(lab);
    // fetch('/api/createlab', {
    //   method: 'POST',
    //   body: JSON.stringify(lab),
    // }).then (response => {
    //   response.json().then(json => {
    //     console.log(json);
    //   })
    // })
  };

  return (
    <div
      className="fixed inset-0 z-[1055] hidden overflow-x-hidden"
      id={`lab-update-${lab?.id}`}
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
      data-te-modal-init
    >
      <div
        className="relative mx-auto p-4 w-full max-w-2xl h-full md:h-auto"
        data-te-modal-dialog-ref
      >
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update Lab</h3>
            <button
              type="button"
              aria-label="Close"
              data-te-modal-dismiss
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Add input fields for testName, alsoKnownAs, purpose, measures, whoShouldTake */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="labcategory"
                name="category"
                value={categories[lab?.categoryid - 1]}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-x-3 lg:flex-nowrap">
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
                  Test Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  id="labtestName"
                  name="testName"
                  type="text"
                  placeholder="Test Name"
                  value={lab?.testName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alsoKnownAs">
                  Also Known As
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  id="labalsoKnownAs"
                  name="alsoKnownAs"
                  type="text"
                  placeholder="Also Known As"
                  value={lab?.alsoKnownAs}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whoShouldTake">
                Who Should Take
              </label>
              <textarea
                rows={8}
                className="block focus:ring-[#cc835c] focus:border-[#cc835c] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="whoShouldTake"
                name="whoShouldTake"
                placeholder="Who Should Take"
                value={lab?.whoShouldTake}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purpose">
                Purpose
              </label>
              <textarea
                rows={5}
                className="block focus:ring-[#cc835c] focus:border-[#cc835c] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
                id="purpose"
                name="purpose"
                placeholder="Purpose"
                value={lab?.purpose}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="measures">
                Measures
              </label>
              <textarea
                rows={7}
                className="block p-2.5 w-full focus:ring-[#cc835c] focus:border-[#cc835c] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
                id="measures"
                name="measures"
                placeholder="Measures"
                value={lab?.measures}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex flex-col">
              <label className="block text-gray-700 text-sm font-bold mb-2">Results</label>
              {lab?.results
                ?.split("\n")
                .map((result: string, index: number) => (
                  <input
                    key={index}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    type="text"
                    value={result}
                    onChange={(e) => handleResultsChange(e, index)}
                  />
                ))}
              <button
                type="button"
                onClick={addResult}
                className="bg-[#cc835c] mt-4 hover:bg-[#cc835c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Result
              </button>
            </div>
            <button
              className="text-[#cc835c] inline-flex items-center hover:text-white border border-[#cc835c] hover:bg-[#cc835c] focus:ring-4 focus:outline-none focus:ring-[#cc835c] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditLab;
