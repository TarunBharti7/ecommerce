import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const [data , setData] = useState([]);
    const {id} = useParams();
    console.log(id);

    const fetchData = async () => {
        const url = await fetch(`https://fakestoreapi.com/products/${id}`);

        const response = await url.json();
        // console.log(response.rating.rate);
        setData(response)
    }

    useEffect(() => {
        fetchData();
    }, [id])

  return (
    <div>
        <h1 className="title">{data.title}</h1>
        <h2>{data.category}</h2>
        <img width="200px" src={data.image} alt="" className="product-img" />
        <h2>$ {data.price}</h2>
        <p>{data.description}</p>
        <h3>
            {data && data.rating && data.rating.count ? data.rating.count + ' 🦸 will rating' : 'Rating data not available'}
        </h3>
        <h3>
            {data && data.rating && data.rating.rate ? data.rating.rate + ' ⭐ ⭐ ⭐ ⭐ ⭐' : 'Rating data not available'}
        </h3>
        {/* <h3>{data.rating.rate} ⭐ ⭐ ⭐ ⭐ ⭐</h3> */}
    </div>
  )
}

export default ProductInfo