const InputComponent = (props) => {
  const { label, name, type = "text", placeholder = null } = props;
  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label htmlFor={name} className="w-full font-bold">
        {label}:
      </label>
      <input
        className="px-2 py-2 border border-sky-500 outline-sky-500 rounded-md w-full"
        type={type}
        name={name}
        placeholder={placeholder || label}
      />
    </div>
  );
};

export default InputComponent;
