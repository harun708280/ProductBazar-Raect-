import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    return (
        <div className='my-7  '>
            <div role="tablist" class="tabs tabs-lifted">
                {
                    category.map(category=>
                        <NavLink to={`/product/${category.categoryName}`} role="tab" className={({isActive})=>`tab text-lg font-bold  ${isActive?'tab-active text-sky-500':''}`} >{category.categoryName}</NavLink>
                    )
                }
            
            
            </div>
        </div>
    );
};

export default Category;