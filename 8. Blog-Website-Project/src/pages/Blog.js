import { useContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const Blog = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    setLoading(true);

    let url = `${newBaseUrl}?blogId=${blogId}`;

    console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.log("Something went wrong");
      setBlog(null);
      setRelatedBlog([]);
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className="mt-11">
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Related Blogs</h2>
          {relatedBlog.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Blogs Founds</p>
      )}
    </div>
  );
};

export default Blog;
