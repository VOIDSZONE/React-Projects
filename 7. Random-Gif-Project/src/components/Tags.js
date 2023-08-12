import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tags = () => {
  const [tag, setTag] = useState("bike");

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 border border-black rounded-xl flex flex-col items-center gap-y-5 mt-4">
      <h1 className="mt-4 text-2xl underline font-bold uppercase">
        Random {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="random gif" width="450" />}

      <input
        type="text"
        className="w-10/12 text-lg py-2 rounded-lg mb-1 text-center"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 text-lg bg-slate-300 py-2 rounded-lg mb-5"
      >
        Generate
      </button>
    </div>
  );
};

export default Tags;
