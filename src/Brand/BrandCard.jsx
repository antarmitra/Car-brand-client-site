/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { image, title, id } = brand || {}

    return (
        <Link to={`/cars/${id}`}>
            <div className="card w-80 items-center bg-base-100 shadow-xl max-w-6xl mx-auto  ">
                <div>
                    <img className="w-48 h-52 mt-4" src={image} alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title mx-auto ">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;


