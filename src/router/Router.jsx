import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Auth from "../pages/Auth";
import News from "../components/News";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NewsDetails from "../components/NewsDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element:<Home/>,
            children:[
              {
                path:"/",
                element: <Navigate to={'news/category/01'}/>
              },
              {
                path:"news/category/:id",
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`) ,
                element:<News/>
              },
            ]
        },
        {
          path:'/news/:id',
          // @ts-ignore
          element:<PrivateRoute><NewsDetails/></PrivateRoute>,
          loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
        },
      ]
    },
    {
      path: '/auth',
      element:<Auth/>,
      children:[
        {
          path:'/auth/login',
          element:<Login/>
        },
        {
          path:'/auth/register',
          element:<Register/>
        },
      ]
    },
    {
      path:'*',
      element:<div>Error</div>
    }
  ]);

export default router;