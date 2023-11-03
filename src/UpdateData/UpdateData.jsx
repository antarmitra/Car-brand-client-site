import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {
    const update = useLoaderData();
    const { _id, photo, modelName, brandName, types, price, rating, details } = update;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const modelName = form.modelname.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const types = form.types.value;
        const photo = form.photo.value;
        const updateProduct = { modelName, brandName, price, details, rating, types, photo };
        console.log(updateProduct);

        // add server site
        fetch(`https://car-brand-server-shop.vercel.app/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Product Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>

            <div className="bg-[#F4F3F0] p-5 mt-5 rounded-lg max-w-screen-lg mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-500">Update Product</h2>
                <form onSubmit={handleUpdateProduct} >
                    {/* product and brand name */}
                    <div className="md:flex gap-4 mt-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Model Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="modelname" defaultValue={modelName}  placeholder="Model Name...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" defaultValue={brandName}  placeholder="Brand Name....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* price and description */}
                    <div className="md:flex gap-4 mt-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price here...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL...." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* rating and detials */}
                    <div className="md:flex gap-4 mt-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Product Rating...." className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-gray-600">Types</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="types" defaultValue={types} placeholder="Product Types....." className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* photo url */}
                    <div className="form-control md:w-full mt-8">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details here....." className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input type="submit" value="Update Product" className=" btn btn-block mt-8  bg-[#F0151F] text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateData;