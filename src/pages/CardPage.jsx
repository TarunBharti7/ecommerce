import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";

const CardPage = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      const result = await response.json();
      setData(result);
      setFilterData(result);
    } catch (error) {
      // Handle the error if needed
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchItem = (e) => {
    const searchValue = e.target.value;

    // console.log(searchValue);

    if (searchValue === "") {
      setFilterData(null);
    }

    const filter = data?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter)
  }

  return (
    <>
      <div className="flex justify-center py-10">
        <input 
          className="w-70 lg:w-[35rem] rounded-md text-center md:w-[30rem]"
          type="text" onChange={searchItem} placeholder='Search items. . . . . . . ' 
         />
      </div>
      <div className="flex flex-wrap justify-around items-center  gap-10 ">
        {filterData ? (
          filterData.map((item) => (
            <div key={item.id} className="mb-14  " >
              <Link to={`product/${item.id}`} target="_blank">
                <ProductCard productName={item.title} image={item.image} price={item.price} rating={item.rating.rate} />
              </Link>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default CardPage;
