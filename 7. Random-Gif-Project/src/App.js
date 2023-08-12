import React from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col background items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold ">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-7">
        <Random />
        <Tags />
      </div>
    </div>
  );
};

export default App;
