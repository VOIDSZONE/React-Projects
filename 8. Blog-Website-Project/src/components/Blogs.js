import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 h-screen max-w-xl flex flex-col gap-y-7 mt-40 mb-40 justify-center items-center">
      {loading ? (
        "Loading"
      ) : posts.length === 0 ? (
        <div>No Posts Found</div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
