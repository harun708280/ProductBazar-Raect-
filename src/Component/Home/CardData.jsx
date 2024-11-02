import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const CardData = () => {
    const {categoryName}=useParams()    
    const LoadData=useLoaderData()

    const [cardInfo,setCardInfo]=useState([])

    useEffect(()=>{
        if (categoryName) {
            const filterData=[...LoadData].filter(category=>category.category===categoryName)
            setCardInfo(filterData)
            
        }
        else{
            setCardInfo(LoadData.slice(0,6))
        }

    },[LoadData])
    
    
    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
                {
                    cardInfo.map(card=><Card key={card.id } card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default CardData;