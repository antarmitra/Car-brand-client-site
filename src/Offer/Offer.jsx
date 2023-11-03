import { AiOutlineArrowRight, AiFillCar, AiOutlineDollar, AiOutlineIdcard } from "react-icons/Ai";


// lg:mr-[650px]

const Offer = () => {
    return (
        <div className="mt-14">
            <div className="text-center">
                <h2 className="text-4xl font-bold  py-2">Why <span className="text-[#F0151f]">Choose </span> Us</h2>
            </div>

            <div className=" lg:flex md:flex lg:gap-28 md:gap-10 mt-10 max-w-screen-xl mx-auto">

                <div>
                    <div className='text-center md:text-center lg:text-start '>
                        <h1 className="lg:mb-5 lg:text-3xl md:text-4xl text-2xl font-bold ">Best Valued deals you will ever find</h1>
                        <p className="lg:text-base md:text-base text-sm font-normal">Discover the best deals you will ever find with our unbeatable offers. We are <br /> to providing you with the best value for you money, so you can enjoy top<br /> quality services and products without breaking the bank. <br />Our deals are designed to give you the ultimate renting experience, so dont miss out on your chance to save big.</p>
                        <div className='mt-10'>
                            <button className=" btn bg-[#F0151F] text-white text-lg font-semibold">Find Details<AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </div>
                    </div>
                </div>


                <div className="mt-5 md:mt-0 lg:mt-0">
                    <div className="lg:flex md:flex items-center gap-4 mb-4">
                        <div> <AiFillCar className="text-5xl mx-auto text-red-600"></AiFillCar> </div>
                        <div className="text-center md:text-start lg:text-start">
                            <h1 className="text-2xl font-medium">Cross Country Drive</h1>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross country adventures.</p>
                        </div>
                    </div>
                    <div className="lg:flex md:flex items-center gap-4 mb-4">
                        <div> <AiOutlineDollar className="text-5xl mx-auto text-red-600"></AiOutlineDollar> </div>
                        <div className="text-center md:text-start lg:text-start">
                            <h1 className="text-2xl font-medium">All Inclusive Pricing</h1>
                            <p>Get everything you need in one convenient, transparent price with our all Inclusive pricing policy.</p>
                        </div>
                    </div>
                    <div className="lg:flex md:flex items-center gap-4 mb-4">
                        <div> <AiOutlineIdcard className="text-5xl mx-auto text-red-600"></AiOutlineIdcard> </div>
                        <div className="text-center md:text-start lg:text-start">
                            <h1 className="text-2xl font-medium">Free Support</h1>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross country adventures.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Offer;