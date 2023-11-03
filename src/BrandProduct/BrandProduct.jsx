import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";


const BrandProduct = () => {
    const brandData = useLoaderData();
    const [cars, setCars] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const { id } = useParams();
    const integerId = parseInt(id);
    const findDetials = brandData.find(details => details.id === integerId);
    console.log(findDetials);

    const { image1, image2, image3, brandName } = findDetials;


    useEffect(() => {
        setProduct(cars.filter(cars => cars.brandName === brandName))
    }, [cars, brandName]);
    console.log(product);





    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 mb-">
                {
                    product.map(car => <BrandProductCard key={car._id} car={car}></BrandProductCard>)
                }
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default BrandProduct;