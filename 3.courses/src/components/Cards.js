import React from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const allCourses = [];

  const getAllCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((arr) => {
        arr.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getAllCourses().map((course) => {
        return <Card key={course.id} {...course} />;
      })}
    </div>
  );
};

export default Cards;
