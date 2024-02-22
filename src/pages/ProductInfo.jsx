import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../component/Loading';
import Nav from '../component/Nav';
import { Rating } from 'flowbite-react';
import { Button } from 'flowbite-react';


const ProductInfo = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log(id);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
                throw new Error("Network request failed");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            // Handle the error if needed
            console.error("Error fetching data:", error);
        }

    }

    useEffect(() => {
        fetchData();
    }, [id])

    return (
        <>
            <Nav />

            <div className='block lg:flex lg:justify-between '>
                <div className='m-4 lg:m-16 w-32 lg:w-96 mx-auto'>
                    <img width="200px" src={data.image} alt="" className="w-96" />
                </div>
                <div className='flex-1 m-4 lg:m-16 lg:ml-5'>
                    <h1 className="text-xl lg:text-4xl font-serif font-bold">{data.title}</h1>
                    <h2 className="text-lg lg:text-xl text-blue-500 font-serif font-bold uppercase ">{data.category}</h2>
                    <p className='font-sans font-semibold text-sm lg:'>{data.description}</p>
                    <div className='flex justify-around py-5'>
                        <h1 className="text-3xl font-bold text-gray-900 ">${data.price}</h1>
                        <Button color="blue"> Add to cart</Button>
                    </div>
                    <div className='pb-4'>
                        <Rating size="md" className='pb-3 '>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <div className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                {data && data.rating && data.rating.rate ? data.rating.rate : <Loading />}
                            </div>
                        </Rating>
                        <div className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {data && data.rating && data.rating.count ? data.rating.count + ' 🦸 global ratings' : <Loading />}
                        </div>
                        <Rating.Advanced percentFilled={70} className="mb-2">
                            5 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={17} className="mb-2">
                            4 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={8} className="mb-2">
                            3 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={4} className="mb-2">
                            2 star
                        </Rating.Advanced>
                        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo