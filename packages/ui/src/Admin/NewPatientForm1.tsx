
import {Selectele} from "./Selectele";
import {Inputele }from "./Inputele";

const NewPatientForm1 = () => {
  return (
    <form
      action="#"
      className="max-w-2xl ml-64 mt-5 bg-gray-50 shadow shadow-lg border rounded-lg px-3 py-3"
    >
      <h3 className="mb-6 font-medium leading-none text-gray-900 dark:text-white">
        Important Information
      </h3>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <Selectele
          data={{ name: "provider", label: "Primary Care Provider", options: ["Dr Ivan Rusilko"] }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Selectele
          data={{
            name: "status",
            label: "Status",
            options: ["Active", "Inactive", "Inactive Deceased"],
          }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Inputele
          data={{ name: "first-name", label: "First Name", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Inputele
          data={{ name: "last-name", label: "Last Name", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Inputele
          data={{ name: "middle-name", label: "Middle Name", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Inputele
          data={{ name: "email", label: "Email", type: "email" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Inputele
          data={{ name: "phone", label: "Phone", type: "tel" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Selectele
          data={{
            name: "communication",
            label: "Preferred Communication",
            options: ["Email", "Phone", "Text"],
          }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-[#cc835c] py-2.5 w-32 mx-auto mb-4 mt-4  items-center hover:text-white border border-[#cc835c] hover:bg-[#cc835c] focus:ring-4 focus:outline-none focus:ring-[#cc835c] font-medium rounded-lg text-sm  text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 capitalize dark:focus:ring-blue-900"
      >
        Save
      </button>
    </form>
  );
};

export {NewPatientForm1}