import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    useEffect(() => {
        const fetchDataForCart = async () => {
            const productDetailsApi = 'https://fakestoreapi.com/products/';

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
                    image: productsData[index]?.image || '',
                    price: productsData[index]?.price || 0,
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
    }, [cart]);

    return (
        <>
            <div>
                <h2>Cart Details</h2>
                {cart.map((item) => (
                    <div key={item.productId}>
                        {/* Display product image */}
                        <img src={item.image} alt={`Product ${item.productId}`} style={{ width: '50px' }} />

                        {/* Display product price */}
                        <p>${item.price}</p>

                        {/* Display other product details as needed */}
                        <p>{item.title}</p>
                        <p>Quantity: {item.productQuantity}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;
