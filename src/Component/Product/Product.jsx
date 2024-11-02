import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Product = () => {
    const products=useLoaderData()
    const [product,setProduct]=useState(products)
    const [button,setButton]=useState({status:''})

    const handleSort=(status)=>{
        if (status==='price') {
            const sortPrice=[...product].sort((a,b)=>a.price-b.price)
            setProduct(sortPrice)
            setButton({status:'price'})
        }
        else if(status==='rating'){
            const sortRating=[...product].sort((a,b)=>b.rating-a.rating)
            setProduct(sortRating)
            setButton({status:'rating'})
        }
        

    }
    console.log(button);
    
    

    return (
        <div>
            <div className="flex justify-between mt-12">
                <div className="text-2xl font-bold">
                    <h1 className='flex items-center space-x-2'><span>Sort by Price & Rating </span><span><i class="fa-solid fa-arrow-right"></i></span></h1>
                </div>
                <div className="space-x-10">
                    <button onClick={()=>handleSort('price')} className={` text-lg font-bold uppercase  py-1 px-5 rounded-lg outline ${button.status==='price'?' bg-sky-500 text-white transform duration-300 ease-in-out ':'hover:bg-sky-500 hover:text-white transform duration-300 ease-in-out'}`}>Sort By Price</button>
                    <button onClick={()=>handleSort('rating')}className={` text-lg font-bold uppercase  py-1 px-5 rounded-lg outline ${button.status==='rating'?' bg-sky-500 text-white transform duration-300 ease-in-out ':'hover:bg-sky-500 hover:text-white transform duration-300 ease-in-out'}`}> sort by rating </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {
                    product.map(product=><Card card={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Product;