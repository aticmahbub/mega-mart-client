import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../pages/AllProducts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/registration',
                element: <Registration/>
            },
            {
                path:'/addProduct',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path:'/allProducts',
                element: <PrivateRoute><AllProducts/></PrivateRoute>
            },
        ]
    }
])
export default router