import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 border border-black rounded-xl flex flex-col items-center gap-y-5 mt-4">
      <h1 className="mt-4 text-2xl underline font-bold uppercase">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="random gif" width="450" />}

      <button
        onClick={() => fetchData()}
        className="w-10/12 text-lg bg-slate-300 py-2 rounded-lg mb-5"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
