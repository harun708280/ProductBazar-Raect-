import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { delateCardLs, getCardLS } from '../../utils/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddCart from './AddCart';
import { delateFavorite, getFavoriteLs } from '../../utils/Favorite';
const Cart = () => {
    const loadData=useLoaderData()
    const [cart,setCart]=useState([])
    const [favorite,setFavorite]=useState([])
    useEffect(()=>{
        if (loadData.length>0) {
            const getCartData=getCardLS()
            const data=[]
            for(const name of getCartData){
                const dataFilter=[...loadData].find(cart=>cart.productName===name)
                if (dataFilter) {
                    data.push(dataFilter)
                    
                }
                
                
            }
            setCart(data)
        }

        if (loadData.length>0) {

            const getFavorite=getFavoriteLs()
            const saveFav=[]
            for(const favData of getFavorite){
                const findFavData=[...loadData].find(fav=>fav.productName===favData)
                if (findFavData) {
                    saveFav.push(findFavData)
                }
            }
            setFavorite(saveFav)
            

        }



    },[])
    const handleDelateCart=(name)=>{
        console.log(name,'kaj');
        const carts=cart.filter(cart=>cart.productName!==name)
        console.log(carts);
        
        setCart(carts)
        delateCardLs(name)
    }
    
    const handleFavoriteDelate=(name)=>{
        const delateFilter=favorite.filter(FavData=>FavData.productName!==name)
        setFavorite(delateFilter)
        delateFavorite(name)

    }
    


    
    return (
        <div>
            <div className="my-12 ">
            <Tabs>
                <TabList>
                <Tab><span className='text-xl font-bold'>Cart</span></Tab>
                <Tab><span className='text-xl font-bold'>Favorite</span></Tab>
                </TabList>

                <TabPanel>

                    <div className="">
                        {
                            cart.length>0?<div><h1 className='text-3xl font-extrabold text-center my-7'>Your Cat <span><i class="fa-solid fa-cart-arrow-down"></i></span></h1></div>:
                            <div className='h-[320px] text-5xl font-extrabold flex justify-center items-center'>
                                <h1>Not Cart Found  <span><i class="fa-solid fa-cart-arrow-down"></i></span></h1>
                            </div>
                        }
                        <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                    {
                                        cart.length>0 &&
                                        <tr>
                                        
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                      </tr>
                                    }
                                    </thead>
                                    <tbody>
                                    {/* row 1 */}
                                    {
                                cart.map(cart=><tr>
                                        
                                    <td>
                                    
                                        
                                            <img className='w-[70px] h-[70px]'
                                            src={cart.image}
                                            alt="Avatar Tailwind CSS Component" />
                                        
                                    
                                    </td>
                                    <td>{cart.productName}</td>
                                    <td>{cart.brandName}</td>
                                    <td>{cart.price}</td>
                                    <td><button onClick={()=>handleDelateCart(cart.productName)} className='bg-red-600 px-5 py-1 rounded-lg text-white uppercase font-bold'>delate</button></td>
                                
                                </tr>)
                                }
                                    {/* row 2 */}
                                    
                                    </tbody>
                                    {/* foot */}
                                
                                </table>
                        </div>

                       
                    </div>
                
                </TabPanel>
                <TabPanel>
                <div className="">
                        {
                            favorite.length>0?<div><h1 className='text-3xl font-extrabold text-center my-7'>Your Favorite List <span><i class="fa-regular fa-heart"></i></span></h1></div>:
                            <div className='h-[320px] text-5xl font-extrabold flex justify-center items-center'>
                                <h1>Not Favorite Found  <span><i class="fa-solid fa-heart-circle-exclamation"></i></span></h1>
                            </div>
                        }
                        <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                    {
                                        favorite.length>0 &&
                                        <tr>
                                        
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                      </tr>
                                    }
                                    </thead>
                                    <tbody>
                                    {/* row 1 */}
                                    {
                                favorite.map(cart=><tr>
                                        
                                    <td>
                                    
                                        
                                            <img className='w-[70px] h-[70px]'
                                            src={cart.image}
                                            alt="Avatar Tailwind CSS Component" />
                                        
                                    
                                    </td>
                                    <td>{cart.productName}</td>
                                    <td>{cart.brandName}</td>
                                    <td>{cart.price}</td>
                                    <td><button onClick={()=>handleFavoriteDelate(cart.productName)} className='bg-red-600 px-5 py-1 rounded-lg text-white uppercase font-bold'>delate</button></td>
                                
                                </tr>)
                                }
                                    {/* row 2 */}
                                    
                                    </tbody>
                                    {/* foot */}
                                
                                </table>
                        </div>

                       
                    </div>
                
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Cart;