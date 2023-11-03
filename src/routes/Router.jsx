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
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
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
                loader: () => fetch('http://localhost:5000/product')
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
                loader: () => fetch('http://localhost:5000/car')
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateData></UpdateData></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)
            }
        ]
    }
])

export default router;