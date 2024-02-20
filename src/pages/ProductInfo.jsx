import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../component/Loading';
import Nav from '../component/Nav';
import { Rating } from 'flowbite-react';


const ProductInfo = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
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
        <>
            <Nav />

            <div className='flex justify-between '>
                <div className=' m-16 w-96'>
                    <img width="200px" src={data.image} alt="" className="w-96" />
                </div>
                <div className=' flex-1 m-16 ml-5'>
                    <h1 className="text-4xl font-serif font-bold">{data.title}</h1>
                    <h2 className="text-xl text-blue-500 font-serif font-bold uppercase ">{data.category}</h2>
                    <p className='font-sans font-semibold'>{data.description}</p>
                    <h1 className="text-3xl font-bold text-gray-900 pl-12 py-5 ">${data.price}</h1>
                    <div className='pl-4'>
                        <Rating size="md" className='py-3 '>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                {data && data.rating && data.rating.rate ? data.rating.rate : <Loading />}
                            </p>
                        </Rating>
                        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {data && data.rating && data.rating.count ? data.rating.count + ' 🦸 global ratings' : <Loading />}
                        </p>
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