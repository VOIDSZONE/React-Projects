import { useState, useEffect } from "react";
import Products from "../components/Products";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL);

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log("Something went wrong");

      setProducts([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        "LOADING...."
      ) : products.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  max-w-6xl space-y-10 space-x-5 p-2 mx-auto min-h-[80vh]">
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>"No Product Found"</p>
        </div>
      )}
    </div>
  );
};

export default Home;
