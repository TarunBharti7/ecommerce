import React, {  useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Product = ({id,img,title,price,quantity}) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    const [amount, setAmount] = useState(quantity);
    const IncAmount = (id) => {
        setAmount(amount+1);
        setCart((prevCart) =>
        prevCart.map((item) =>
            item.productId === id
                ? { ...item, productQuantity: amount +2}
                : item
        )
    );
        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const DecAmount = (id) => {
        setAmount(amount-1);
        setCart((prevCart) =>
        prevCart.map((item) =>
            item.productId === id
                ? { ...item, productQuantity: amount -2}
                : item
        )
    );
        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div className="flex items-center pr-1" key={id}>
            <div>
                <img src={img} alt="" className="h-16" />
            </div>
            <div className="flex-grow text-left">
                <h5 className="text-sm font-semibold">{title}</h5>
                <p className="text-xs text-zinc-600">${price}</p>
                <button className="ease text-sm tracking-wider text-sky-700 transition-all hover:text-sky-600" onClick={() => removeItem(id)}>
                    remove
                </button>
            </div>
            <div className="flex flex-col">
                <button onClick={() => IncAmount(id)}>
                    <IoIosArrowUp className="ease -mb-1 text-lg text-sky-700 transition-all hover:text-sky-600" />
                </button>
                <span className="pr-[1px] text-sm">{amount}</span>
                <button onClick={() => DecAmount(id)}>
                    <IoIosArrowDown className="ease -mt-1 text-lg text-sky-700 transition-all hover:text-sky-600" />
                </button>
            </div>
        </div>
    )
}

export default Product