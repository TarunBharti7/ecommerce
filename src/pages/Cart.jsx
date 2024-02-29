import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Product from "../component/Product";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );


  useEffect(() => {
    const fetchDataForCart = async () => {
      const productDetailsApi = "https://fakestoreapi.com/products/";

      try {
        const fetchPromises = cart.map(async (item) => {
          const response = await fetch(`${productDetailsApi}${item.productId}`);
          if (!response.ok) {
            throw new Error(`Error fetching product ${item.productId}`);
          }
          return response.json();
        });

        const productsData = await Promise.all(fetchPromises);

        // Update the cart with additional product details
        const updatedCart = cart.map((item, index) => ({
          ...item,
          // Assuming the API response includes properties like 'image' and 'price'
          image: productsData[index]?.image || "",
          price: productsData[index]?.price || 0,
          title: productsData[index]?.title || 0,
          // Add other properties as needed
        }));

        setCart(updatedCart);

        // Log the updated cart with product details
        console.log(updatedCart);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchDataForCart();
  }, []);

  return (
    <>
      <Nav />
      <h1 className="text-2xl font-bold text-center lg:mt-4">YOUR BAG</h1>
      <div className="mx-auto max-w-[672px] mt-8 flex w-11/12 flex-col gap-6">
        {cart.map((item, index) => (
          <Product
            key={index}
            id={item.productId}
            img={item.image}
            title={item.title}
            price={item.price}
            quantity={item.productQuantity}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
