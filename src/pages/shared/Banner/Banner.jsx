import { AiOutlineArrowRight } from 'react-icons/Ai';
import image6 from "../../../assets/image/banner3.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-fit">
                <img className="w-screen h-[650px]" src={image6} alt="" />
                <div className="bg-white bg-opacity-25"></div>
                <div className="hero-content">
                    <div className='text-center md:text-center lg:text-start lg:mr-[650px]'>
                        <h1 className="lg:mb-5 lg:text-5xl md:text-4xl text-2xl font-bold text-white">WELCOME TO CAR HOUSE</h1>
                        <p className="lg:text-xl md:text-lg text-base font-normal text-white">Allow us to guide you through the innovative stress <br />
                            free approach in finding your dream car.</p>
                        <div className='mt-10'>
                            <button className=" btn bg-[#F0151F] text-white text-lg font-semibold">Read More<AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// lg:mb-5