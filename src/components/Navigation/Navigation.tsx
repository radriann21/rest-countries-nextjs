import { Sun, Moon } from "lucide-react";

export const Navigation = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <section className="max-w-7xl flex items-center justify-between mx-auto py-6 pl-4 xl:pl-0">
        <h1 className="text-lg sm:text-xl font-bold text-very-dark-blue-light-mode">
          Where in the world?
        </h1>
        <button className="text-sm font-semibold px-6 py-2 rounded-md bg-transparent flex items-center space-x-2 transition-colors duration-200 cursor-pointer hover:bg-slate-200/50">
          Light Mode
          <Sun className="w-5 h-5 ml-2" />
        </button>
      </section>
    </header>
  );
};
