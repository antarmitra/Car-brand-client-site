import { FaGithub, FaGoogle } from "react-icons/Fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image1 from "../../../../../car-brand-client-shop/src/assets/image/banner4.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";



const Login = () => {
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider(); 

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }



    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('location in the login page', location);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // user create
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })


    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="relative">

                <div className="md:flex rounded-lg md:absolute top-12 lg:left-40 mt-5 shadow-xl">
                    <div>
                        <img className="w-[600px] h-[550px] rounded-lg" src={image1} alt="" />
                    </div>

                    <div className="text-center p-5">
                        <div className="space-y-3 mt-10 ">
                            <h2 className="text-4xl font-medium">Welcome</h2>
                            <p className="text-xl font-normal">Please Login Now !</p>
                        </div>

                        <form onClick={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email here..." className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password here..." className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#F0151F] text-xl rounded-full text-white">Login</button>
                            </div>

                            <div className="flex justify-center gap-5 mt-5 ">
                                <div>
                                    <button onClick={handleGoogleSingIn} className="btn">
                                        <FaGoogle className="text-xl"></FaGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button className="btn">
                                        <FaGithub className="text-xl"></FaGithub>
                                        Github
                                    </button>
                                </div>
                            </div>

                            <p className=" mt-2">Do not have an account, please <Link to="/register" className="text-black text-lg font-bold underline">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;