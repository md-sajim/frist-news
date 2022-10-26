import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Catagore from "../Pages/Catagore/Catagore/Catagore";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Profiles from "../Pages/Others/Profiles/Profiles";
import Register from "../Pages/Register/Register";
import TermsAndConditions from "../Pages/Terms/TermsAndConditions";
import PrivateRouts from "./Private/PrivateRouts";

export const routs = createBrowserRouter([
    {
        path:"/",
       element:<Main></Main>,
       children:[
        { 
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/news')
        },
        {
            path:'/catagore/:id',
            element:<Catagore></Catagore>,
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)


        },
        {
            path:'/news/:id',
            element:<PrivateRouts><News></News></PrivateRouts>,
            loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/trems&conditions',
            element:<TermsAndConditions></TermsAndConditions>
        },
        {
            path:'/profile',
            element:<PrivateRouts><Profiles></Profiles></PrivateRouts>
        },
        {},
        {},
        {}
       ]

    }
])