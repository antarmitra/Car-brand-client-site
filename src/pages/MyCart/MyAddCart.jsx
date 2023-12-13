/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/Ri";
import Swal from "sweetalert2";

const MyAddCart = ({ data: datas, handleDeleteItem }) => {
    const { _id, photo, modelName, price, rating } = datas;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-brand-server-shop.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            handleDeleteItem(_id);
                        }
                    })
            }

        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[300px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product-Name: {modelName}</h2>
                <p className="text-lg font-medium text-gray-500"><span className="text-lg font-medium text-black">Price:</span> {price}</p>
                <p className="text-lg font-medium text-gray-500"><span className="text-lg font-medium text-black">Rating: </span>{rating}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#F0151F] mx-auto text-white text-lg">Delete <RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line></button>
                </div>
            </div>
        </div>
    );
};

export default MyAddCart;