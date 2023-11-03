import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 text-center space-y-3">
                <h1 className="text-7xl text-red-500 font-bold">Oops!</h1>
                <h2 className="text-4xl text-gray-800">404 - Page Not Found</h2>
                <div className="mt-10">
                    <NavLink className="text-lg font-semibold text-white bg-red-400 px-3 py-2 rounded-lg" to="/">Go Back Home</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;