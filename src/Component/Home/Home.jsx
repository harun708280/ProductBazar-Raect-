import React from 'react';
import Banner from './Banner';
import Category from './Category';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const category=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Category category={category} key={category.id}></Category>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;