const TimesComponent = (props) => {
  const { limit = 10, value } = props;
  return (
    <div className="flex flex-col bg-sky-100 rounded-md p-2 w-full xl:w-1/6">
      <div className="p-2 bg-sky-200 rounded-sm">
        <p className="text-lg text-center font-bold">{`Perkalian ${value}`}</p>
      </div>
      {Array.from({ length: limit }, (_, i) => (
        <div className="grid grid-cols-5 even:bg-sky-100 odd:bg-sky-50 hover:bg-rose-100">
          <div className="flex justify-center items-center px-3 py-2">
            {value}
          </div>
          <div className="flex justify-center items-center px-3 py-2">x</div>
          <div className="flex justify-center items-center px-3 py-2">
            {i + 1}
          </div>
          <div className="flex justify-center items-center px-3 py-2">=</div>
          <div className="flex justify-center items-center px-3 py-2">
            {(i + 1) * value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimesComponent;
