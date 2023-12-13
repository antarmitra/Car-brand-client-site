/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BiShow, BiSolidDownload } from 'react-icons/Bi';

const BrandProductCard = ({ car }) => {

    const { _id, modelName, brandName, price, rating, types, photo } = car;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-[500px] h-[200px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-xl">Model: {modelName}</h1>
                    <h2><span className="text-lg font-medium">Brand:</span> {brandName}</h2>
                    <p><span className="text-lg font-medium">Type:</span> {types}</p>
                    <p><span className="text-lg font-medium">Price:</span> {price}</p>
                    <p><span className="text-lg font-medium">Rating:</span> {rating}</p>
                    <div className="card-actions justify-center mt-4">
                        <Link to={`/details/${_id}`}>
                            <button className="badge badge-outline px-2 py-4 text-lg font-medium text-gray-600">Details <BiShow className="text-xl text-red-400"></BiShow></button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="badge badge-outline text-lg font-medium px-2 py-4 text-gray-600">Update <BiSolidDownload className="text-xl text-red-400"></BiSolidDownload></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;

{/* <div className="badge badge-secondary">NEW</div> */ }