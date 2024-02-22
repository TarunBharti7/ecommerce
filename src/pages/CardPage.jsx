import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";
import { Button } from 'flowbite-react';

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

  const filterItem = (type) => {
    if (type == "all") {
      setFilterData(data);
      return;
    }
    
    const filter = data?.filter((item) =>
      item.category.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter)
  }

  return (
    <>
      <div className="flex justify-center pt-5">
        <Button outline gradientDuoTone="pinkToOrange">
          Different Category options
        </Button>
      </div>
      {/* Button */}
      <div className="flex flex-wrap justify-around pt-5 gap-2">
        <Button onClick={() => filterItem("all")} gradientDuoTone="pinkToOrange" className="lg:px-10">All</Button>
        <Button onClick={() => filterItem("men's clothing")} gradientDuoTone="pinkToOrange" className="lg:px-10">Men's clothing</Button>
        <Button onClick={() => filterItem("jewelery")} gradientDuoTone="pinkToOrange" className="lg:px-10">Jewelery</Button>
        <Button onClick={() => filterItem("electronics")} gradientDuoTone="pinkToOrange" className="lg:px-10">Electronics</Button>
        <Button onClick={() => filterItem("women's clothing")} gradientDuoTone="pinkToOrange" className="lg:px-10">Women's clothing</Button>
      </div>
      {/* search bar */}
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
