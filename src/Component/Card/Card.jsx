import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {productName,rating,price,image,brandName,category}=card
    return (
        <div>
            <div className="my-12">
                <div className="card bg-base-100 border  shadow-xl">
                <figure>
                    <img className='h-60 p-4 w-full transition-transform duration-300 ease-in-out transform hover:scale-150'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <div className="flex justify-between font-bold">
                        <h1>Price ${price}</h1>
                        <h1><span>{rating}</span> <span><i class="fa-regular fa-star"></i></span></h1>
                    </div>
                    <Link to={`/productDetails/${productName}`}>
                       <button className='bg-sky-500 w-full rounded-lg text-lg shadow-xl font-bold py-1 text-white'>See Details</button>
                    </Link>
                </div>
                </div> 
            </div>
        </div>
    );
};

export default Card;