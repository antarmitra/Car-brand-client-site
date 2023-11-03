import Swal from 'sweetalert2';


const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const modelName = form.modelname.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const types = form.types.value;
        const photo = form.photo.value;
        const newProduct = { modelName, brandName, price, details, rating, types, photo };
        console.log(newProduct);

        // add server site
        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
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
        <div className="bg-[#F4F3F0] p-5 mt-5 rounded-lg max-w-screen-lg mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-500">Add Product</h2>
            <form onSubmit={handleAddProduct} >
                {/* product and brand name */}
                <div className="md:flex gap-4 mt-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Model Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="modelname" placeholder="Model Name...." className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name....." className="input input-bordered w-full" />
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
                            <input type="text" name="price" placeholder="Price here...." className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL...." className="input input-bordered w-full" />
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
                            <input type="text" name="rating" placeholder="Product Rating...." className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600">Types</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="types" placeholder="Product Types....." className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* photo url */}
                <div className="form-control md:w-full mt-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium text-gray-600">Details</span>
                    </label>
                    <label className="input-group">
                            <input type="text" name="details" placeholder="Details here....." className="input input-bordered w-full" />
                        </label>
                </div>

                <input type="submit" value="Add Product" className=" btn btn-block mt-8  bg-[#F0151F] text-white" />
            </form>
        </div>
    );
};


export default AddProduct;