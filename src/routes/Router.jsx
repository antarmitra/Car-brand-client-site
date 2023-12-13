import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProuct/AddProuct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import BrandProduct from "../BrandProduct/BrandProduct";
import Details from "../Details/Details";
import UpdateData from "../UpdateData/UpdateData";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://car-brand-server-shop.vercel.app/product')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/cars/:id",
                element: <BrandProduct></BrandProduct>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('https://car-brand-server-shop.vercel.app/car')
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateData></UpdateData></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-brand-server-shop.vercel.app/${params.id}`)
            }
        ]
    }
])

export default router;