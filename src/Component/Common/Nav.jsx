import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100   ">
            <div className="flex-1">
            <Link to='/' className="btn btn-ghost bg-sky-600  text-white font-bold text-xl">ProDuct Bazar</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal text-lg space-x-12 px-1">
                <NavLink to='/' className={({isActive})=>[
                            isActive?'text-sky-600 font-bold ':'hover:text-sky-600'
                        ]}>Home</NavLink>
                        
                        <NavLink to='/product' className={({isActive})=>[
                            isActive?'text-sky-600 font-bold ':'hover:text-sky-600'
                        ]}>Product</NavLink>

                        <NavLink to='/cart' className={({isActive})=>[
                            isActive?'text-sky-600 font-bold ':'hover:text-sky-600'
                        ]}>Cart</NavLink>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Nav;