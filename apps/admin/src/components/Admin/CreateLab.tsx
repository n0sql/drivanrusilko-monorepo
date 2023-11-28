import React, { useState } from "react";

const LabForm = () => {
  const [lab, setLab] = useState<Lab>({
    testName: "",
    alsoKnownAs: "",
    category: "",
    purpose: "",
    measures: "",
    whoShouldTake: "",
    results: [],
  });

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
    setLab((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleResultsChange = (e: any, index: number) => {
    const results = [...lab.results];
    results[index] = e.target.value;
    setLab((prevState) => ({ ...prevState, results }));
  };

  const addResult = () => {
    setLab((prevState) => ({ ...prevState, results: [...prevState.results, ""] }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(lab);
    fetch("/api/createlab", {
      method: "POST",
      body: JSON.stringify(lab),
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
    });
  };

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <h1 className="text-3xl font-bold mb-4">New Lab</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:mx-24"
      >
        {/* Add input fields for testName, alsoKnownAs, purpose, measures, whoShouldTake */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="category"
            name="category"
            value={lab.category}
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
        <div className="flex  gap-x-3 flex-wrap lg:flex-nowrap">
          <div className="mb-4  w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
              Test Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              id="testName"
              name="testName"
              type="text"
              placeholder="Test Name"
              value={lab.testName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4  w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alsoKnownAs">
              Also Known As
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              id="alsoKnownAs"
              name="alsoKnownAs"
              type="text"
              placeholder="Also Known As"
              value={lab.alsoKnownAs}
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
            value={lab.whoShouldTake}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purpose">
            Purpose
          </label>
          <textarea
            rows={8}
            className="block focus:ring-[#cc835c] focus:border-[#cc835c] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="purpose"
            name="purpose"
            placeholder="Purpose"
            value={lab.purpose}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="measures">
            Measures
          </label>
          <textarea
            rows={8}
            className="block focus:ring-[#cc835c] focus:border-[#cc835c] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            id="measures"
            name="measures"
            placeholder="Measures"
            value={lab.measures}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Results</label>
          {lab.results.map((result, index) => (
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
    </main>
  );
};

export default LabForm;
