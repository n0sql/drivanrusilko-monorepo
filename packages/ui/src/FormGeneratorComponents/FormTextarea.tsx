const FormTextarea = ({
  label,
  name,
  placeholder = "",
  required = false,
  handleChange,
}: FormTextareaProps) => {
  return (
    <div className="relative mb-3">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="peer block min-h-[auto] w-full  border-0 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={name}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export {FormTextarea}
