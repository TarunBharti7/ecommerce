import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Link } from "react-router-dom";

const CardPage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      // Handle the error if needed
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-24"></div>
      <div className="flex flex-wrap justify-around items-center  gap-10 ">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="mb-14  " >
              <Link to={`product/${item.id}`} target="_blank">  
                <ProductCard productName={item.title} image={item.image} price={item.price} rating={item.rating.rate}/>
              </Link>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default CardPage;
