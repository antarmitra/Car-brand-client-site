import { AiOutlineArrowRight, AiOutlineComment, AiOutlineFolderView, AiOutlineMacCommand } from "react-icons/Ai";
import blog from "../assets/image/blog.jpg"

const Blog = () => {
    return (
        <div className="mt-14">
            <div className="text-center">
                <h2 className="text-4xl font-bold  py-2">Latest <span className="text-[#F0151f]">Blog </span> Post</h2>
                <p className="text-lg">You can share your experience by posting here</p>
            </div>

            <div className="lg:flex md:flex mt-10 max-w-screen-xl mx-auto">

                <div className="lg:flex md:flex  gap-6">
                    <div><img className="w-[600px] h-[400px]" src={blog} alt="" /></div>
                    <div className="lg:mt-6 mt-5 text-center md:text-start">
                        <h1 className="lg:text-3xl md:text-xl text-lg font-medium mb-4">Are You Ready for the Online Dealership?</h1>
                        <div className="flex gap-4 mb-4 ml-24 md:ml-0 lg:ml-0">
                            <div className="flex items-center gap-1">
                                <div><AiOutlineMacCommand className="text-2xl text-red-500"></AiOutlineMacCommand></div>
                                <div className="text-[12px] md:text-base lg:text-base">Antar</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <div><AiOutlineComment className="text-2xl text-red-500"></AiOutlineComment></div>
                                <div className="text-[12px] md:text-base lg:text-base">Comments</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <div><AiOutlineFolderView className="text-2xl text-red-500"></AiOutlineFolderView></div>
                                <div className="text-[12px] md:text-base lg:text-base">View</div>
                            </div>
                        </div>
                        <p className="text-sm md:text-sm lg:text-lg">Prepare for the future of car shopping with our Online Dealership! <br /> Explore a vast inventory of vehicles from the comfort of your home,<br /> browse detailed listings, and enjoy a seamless buying experience. <br /> Our virtual showroom is equipped with interactive tools <br /> and expert assistance, making it easy for you to find the perfect vehicle online. Get ready for a new way to buy cars, hassle-free and convenient.</p>
                        <div className='mt-10'>
                            <button className=" btn bg-[#F0151F] text-white lg:text-lg md:text-[12px] text-[12px] font-semibold">Show Details<AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </div>
                    </div>
                </div>

                <div className="lg:mt-0 md:mt-0 mt-4 ml-10 md:ml-0 lg:ml-0">
                    <div className="flex gap-4">
                        <div className=" text-center bg-red-500 lg:p-4 md:p-2 p-2 mb-5 text-white font-bold">
                            <h1>14</h1>
                            <p>April</p>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[12px] lg:text-lg font-medium">Are You Ready for the Online Dealership?</h1>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1 ">
                                    <div><AiOutlineMacCommand className="text-lg "></AiOutlineMacCommand></div>
                                    <div>
                                        <h1>Antar</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div><AiOutlineFolderView className="text-lg "></AiOutlineFolderView></div>
                                    <div>
                                        <h1>200k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 ">
                        <div className=" text-center bg-red-500 lg:p-4 md:p-2 p-2 mb-5 text-white font-bold">
                            <h1>10</h1>
                            <p>April</p>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[12px] lg:text-lg font-medium">What new coming from the carhouse in future?</h1>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1 ">
                                    <div><AiOutlineMacCommand className="text-lg "></AiOutlineMacCommand></div>
                                    <div>
                                        <h1>Epu</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div><AiOutlineFolderView className="text-lg "></AiOutlineFolderView></div>
                                    <div>
                                        <h1>200k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 ">
                        <div className="text-center bg-red-500 lg:p-4 md:p-2 p-2 mb-5 text-white font-bold">
                            <h1>25</h1>
                            <p>April</p>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[12px] lg:text-lg font-medium">Quality not Quantity for Selling Cars Today?</h1>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1 ">
                                    <div><AiOutlineMacCommand className="text-lg "></AiOutlineMacCommand></div>
                                    <div>
                                        <h1>Redoan</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div><AiOutlineFolderView className="text-lg "></AiOutlineFolderView></div>
                                    <div>
                                        <h1>200k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 ">
                        <div className=" text-center bg-red-500 lg:p-4 md:p-2 p-2 mb-5 text-white font-bold">
                            <h1>23</h1>
                            <p>April</p>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-[12px] lg:text-lg font-medium">Ready for the Online Dealership?</h1>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                    <div><AiOutlineMacCommand className="text-lg"></AiOutlineMacCommand></div>
                                    <div>
                                        <h1>Siam</h1>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div><AiOutlineFolderView className="text-lg"></AiOutlineFolderView></div>
                                    <div>
                                        <h1>200k</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;