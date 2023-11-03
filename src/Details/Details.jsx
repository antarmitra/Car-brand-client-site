import { AiOutlineShoppingCart } from "react-icons/Ai";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const detailsData = useLoaderData();
    const { id } = useParams();

    const findDetails = detailsData.find(details => details._id === id)

    const { photo, modelName, price, rating, details } = findDetails;

    const handleAddToCart = () => {
        const product = {
            photo:  photo,
            modelName:  modelName ,
            price: price ,
            rating:  rating ,
            details:  details ,
        };

        fetch('https://car-brand-server-shop.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="lg:flex gap-10 mt-24 max-w-screen-xl mx-auto shadow-xl">
            <div >
                <img className="w-[5000px] h-[500px]" src={photo} alt="" />
            </div>
            <div className="space-y-5 item-center">
                <h1 className="text-3xl font-medium">Product-Model: {modelName}</h1>
                <div className="flex gap-20">
                    <div>
                        <p className="text-lg font-bold text-gray-500"><span className="text-xl font-bold text-black">Price:</span> {price}</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-gray-500"><span className="text-xl font-bold text-black">Rating:</span> {rating}</p>
                    </div>
                </div>
                <p className="text-lg font-normal text-gray-500">{details}</p>
                <div>
                    <button className="btn w-full text-xl bg-[#F0151F] text-white" onClick={handleAddToCart}>Add Cart <AiOutlineShoppingCart className="text-4xl"></AiOutlineShoppingCart></button>
                </div>
            </div>   
        </div>
    );
};

export default Details;