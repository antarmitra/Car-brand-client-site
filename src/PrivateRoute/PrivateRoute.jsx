import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loader from "../../../car-brand-client-shop/src/assets/image/loader.gif"


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    console.log(location);

    if (loading) {
        return <img className="mx-auto lg:mt-60 md:mt-32 mt-28" src={loader} alt="" />
    }

    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;