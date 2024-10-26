import TimesComponent from "../components/TimesComponent";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center flex-wrap bg-slate-50 rounded-md px-2 py-2 gap-2">
      {Array.from({ length: 10 }, (_, i) => (
        <TimesComponent limit={10} value={i + 1} />
      ))}
    </div>
  );
};

export default MainPage;
