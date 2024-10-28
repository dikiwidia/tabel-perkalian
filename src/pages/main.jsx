import { useState } from "react";
import InputComponent from "../components/InputComponent";
import TimesComponent from "../components/TimesComponent";
import { useEffect } from "react";

const MainPage = () => {
  const [length, setLength] = useState(10);
  const [limit, setLimit] = useState(10);

  const submitAction = (e) => {
    e.preventDefault();
    setLength(e.target.length.value);
    setLimit(e.target.limit.value);
  };

  return (
    <div className="flex items-center justify-center flex-col py-4">
      <h1 className="text-3xl font-bold mb-2">Tabel Perkalian</h1>
      <form className="w-full lg:w-1/4 px-2 py-2 mx-2" onSubmit={submitAction}>
        <InputComponent label="Perkalian Sampai" name="length" type="number" />
        <InputComponent label="Batas Akhir" name="limit" type="number" />
        <button
          type="submit"
          className="px-2 py-2 mt-2 bg-sky-500 w-full rounded text-white"
        >
          Terapkan
        </button>
      </form>
      <div className="flex items-center justify-center min-w-full flex-wrap rounded-md px-2 py-2 gap-2">
        {Array.from({ length: length }, (_, i) => (
          <TimesComponent limit={limit} value={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
