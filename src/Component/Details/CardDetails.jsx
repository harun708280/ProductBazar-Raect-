import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addCardLs } from '../../utils/Card';
import { addFavoriteLs } from '../../utils/Favorite';

const CardDetails = () => {
    const {name}=useParams()
    const loadData=useLoaderData()
    const [product,setProduct]=useState([])
    const navigate=useNavigate()



    useEffect(()=>{

        const findData=[...loadData].find(product=>product.productName===name)
        setProduct(findData)
        

    },[])

    const {productName,rating,price,image,brandName,category,availability}=product;
    const handleAddCard=(name)=>{
        addCardLs(name)
        
    }
    const handleFavorite=(name)=>{
        addFavoriteLs(name)

    }
    
    return (
        <div className="w-9/12 mx-auto relative">
                <div className='flex   p-4 shadow-2xl rounded-xl my-12'>
                <div className=" p-8">
                    <img className='h-[400px]' src={image} alt="" />
                </div>
                <div className="space-y-3 flex flex-col justify-center">
                    <h1 className='text-xl font-bold'>{productName}</h1>
                    <div className="flex space-x-5 text-lg font-bold text-gray-500">
                        <h1>Category : {category}</h1>
                        <h1>Brand : {brandName}</h1>
                    </div>
                    <div className="flex text-lg font-bold  space-x-9">
                        <h1>Price : {price}$</h1>
                        <h1><span>{rating}</span><span><i class="fa-regular fa-star"></i></span></h1>
                    </div>
                    <div className="text-lg font-bold">
                        <h1 >{availability}</h1>
                    </div>
                    {/* <div className="">
                        {
                        availability==='Available'&& <div className='flex text-xl items-center font-medium space-x-4'>
                            <h1>Quantity </h1>
                            <button className=' outline px-2 rounded-lg text-xl'>+</button>
                            <h1>0</h1>
                            <button className='outline px-2 rounded-lg text-xl'>-</button>
                        </div>
                        }
                    </div> */}
                    <div className="space-x-9">
                        <button onClick={()=>handleAddCard(productName)} className='bg-sky-500 px-5 py-1 rounded-lg text-white font-bold'>Add to card <span><i class="fa-solid fa-cart-plus"></i></span></button>
                        
                        <button onClick={()=>handleFavorite(productName)} className= ' bg-rose-400 px-5 py-1 rounded-lg text-white font-bold'>Add to WishList <span><i class="fa-solid fa-heart-circle-plus"></i></span></button>
                    </div>

                </div>
                
            </div>
            <div className="absolute -top-2 right-0 text-3xl">
                <button onClick={()=>navigate(-1)}><span><i class="fa-solid fa-xmark"></i></span></button>
            </div>
        </div>
    );
};

export default CardDetails;