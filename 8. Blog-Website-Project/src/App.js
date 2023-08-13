import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Tag from "./pages/Tag";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/tags/:tag" element={<Tag />} />
        <Route path="/categories/:category" element={<Category />} />
      </Routes>
    </div>
  );
}
