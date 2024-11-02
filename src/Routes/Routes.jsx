import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import CardData from "../Component/Home/CardData";
import CardDetails from "../Component/Details/CardDetails";
import Product from "../Component/Product/Product";
import Cart from "../Component/Product/Cart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch(`../Category.json`),
            children:[
                {
                    path:'/',
                    element:<CardData></CardData>,
                    loader:()=>fetch(`../Product.json`)
                },
                {
                    path:'/product/:categoryName',
                    element:<CardData></CardData>,
                    loader:()=>fetch(`../Product.json`)


                }
            ]
        },
        {
            path:'/productDetails/:name',
            element:<CardDetails></CardDetails>,
            loader:()=>fetch(`../Product.json`)
        },
        {
            path:'/product',
            element:<Product></Product>,
            loader:()=>fetch(`../Product.json`)
        },
        {
            path:'/cart',
            element:<Cart></Cart>,
            loader:()=>fetch(`../Product.json`)
        }
      ]
    },
  ]);  

  export {router}