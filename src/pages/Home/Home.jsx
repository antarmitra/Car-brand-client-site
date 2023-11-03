import Banner from "../shared/Banner/Banner";
import Brand from "../../Brand/Brand";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Offer from "../../Offer/Offer";
import Blog from "../../Blog/Blog";
import { useEffect, useState } from "react";
import dark from "../../../../car-brand-client-shop/src/assets/image/dark_mode.png"
import light from "../../../../car-brand-client-shop/src/assets/image/light_mode.png"


const Home = () => {
    const brands = useLoaderData();
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === false);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode)
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode)
    };

    const bodyStyle = {
        backgroundColor: isDarkMode ? '#262626' : '#fff',
        color: isDarkMode ? '#fff' : '#262626'
    };


    return (
        <div style={bodyStyle}>
            <button onClick={toggleMode} className="w-8 absolute right-5 md:right-10 lg:right-10 top-6 ">
                {
                    isDarkMode ? <img src={dark} alt="" /> : <img src={light} alt="" />
                }
            </button>
            <Banner></Banner>
            <Brand brands={brands}></Brand>
            <Offer></Offer>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;
