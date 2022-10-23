import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagore from "../Pages/Catagore/Catagore/Catagore";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News/News";

export const routs = createBrowserRouter([
    {
        path:"/",
       element:<Main></Main>,
       children:[
        { 
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/catagore/:id,',
            element:<Catagore></Catagore>

        },
        {
            path:'/news/:id',
            element:<News></News>
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
       ]

    }
])