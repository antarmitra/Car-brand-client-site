
import Banner from "../shared/Banner/Banner";
import Brand from "../../Brand/Brand";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Offer from "../../Offer/Offer";
import Blog from "../../Blog/Blog";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Brand brands={brands}></Brand>
            <Offer></Offer>
            <Blog></Blog>
            <Footer></Footer>


        </div>
    );
};

export default Home;




// import { useLoaderData } from "react-router-dom";
// import Brand from "../../Brand/Brand";
// // import Banner from "../shared/Banner/Banner";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './style.css'

// // import required modules
// import { Navigation } from 'swiper/modules';



// import bannerImg1 from "../../assets/image/banner1.jpg"
// import bannerImg2 from "../../assets/image/banner2.jpg"
// import bannerImg3 from "../../assets/image/banner3.jpg"
// import bannerImg4 from "../../assets/image/banner4.jpg"

// const Home = () => {
//     const brands = useLoaderData();


//     return (
//         <div>
//             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//                 <SwiperSlide><img src={bannerImg1} alt="" /></SwiperSlide>
//                 <SwiperSlide><img src={bannerImg2} alt="" /></SwiperSlide>
//                 <SwiperSlide><img src={bannerImg3} alt="" /></SwiperSlide>
//                 <SwiperSlide><img src={bannerImg4} alt="" /></SwiperSlide>
//             </Swiper>

//             <Brand brands={brands}></Brand>

//         </div>
//     );
// };

// export default Home;



