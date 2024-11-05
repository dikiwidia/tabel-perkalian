const InputComponent = (props) => {
  const {
    label,
    name,
    type = "text",
    require = false,
    placeholder = null,
  } = props;
  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label htmlFor={name} className="w-full font-bold">
        {label} {require && <span className="text-red-500">*</span>} :
      </label>
      <input
        className="px-2 py-2 border border-sky-500 outline-sky-500 rounded-md w-full"
        type={type}
        name={name}
        placeholder={placeholder || label}
        required={require}
      />
    </div>
  );
};

export default InputComponent;
