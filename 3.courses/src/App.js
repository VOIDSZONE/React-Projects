import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(apiUrl);
      const result = await response.json();

      setCourseData(result.data);
    } catch (error) {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (courseData === null) {
    return (
      <div className="min-h-screen bg-bgDark2">
        <h1 className="text-white text-center font-semibold">No Data Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar />

      <div className="bg-bgDark2">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courseData} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
