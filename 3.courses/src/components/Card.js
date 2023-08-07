import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ id, title, description, image }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const clickHandler = () => {
    if (likedCourses.includes(id)) {
      const filterData = likedCourses.filter((cid) => cid !== id);

      setLikedCourses(filterData);

      toast.warning("Liked Removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([id]);
      } else {
        setLikedCourses((prev) => [...prev, id]);
      }
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={image.url} alt={image.alt} />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">{title}</p>

        <p className="mt-2 text-white">
          {description.length > 100
            ? `${description.substr(0, 100)}...`
            : { description }}
        </p>
      </div>
    </div>
  );
};

export default Card;
