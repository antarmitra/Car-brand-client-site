import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/Fa";
import r1 from "../../../../../car-brand-client-shop/src/assets/image/banner3.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";


const Register = () => {
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


    const { createUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location in the register page", location);



    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // user create
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(error => {
                console.error(error);
            })
    }




    return (
        <div className="max-w-screen-xl mx-auto rounded-lg">
            <div className="relative">

                <div className="md:flex md:absolute top-12 lg:left-44 shadow-2xl">
                    <div className="text-center p-10">
                        <div className="space-y-3 ">
                            <h2 className="text-4xl font-medium">Welcome</h2>
                            <p className="text-xl font-normal">Please Register Now!</p>
                        </div>

                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="User Name here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL here...." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-medium">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password here..." className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#F0151F] text-xl rounded-full text-white">Register</button>
                            </div>

                            <div className="flex justify-center gap-5 mt-5">
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
                            <p className="mt-2">Do not have an account, please <Link to="/login" className="text-black text-lg font-bold underline">Login</Link></p>
                        </form>
                    </div>

                    <div>
                        <img className="w-[580px] h-[700px] rounded-lg" src={r1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;