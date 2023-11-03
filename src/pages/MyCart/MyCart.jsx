import { useLoaderData } from "react-router-dom";
import MyAddCart from "./MyAddCart";
import { useState } from "react";



const MyCart = () => {
    const dataAdd = useLoaderData();
    const [data, setData] = useState(dataAdd)
    console.log(data);
    const handleDeleteItem = (_id) => {
        const updatedData = data.filter(item => item._id !== _id);
        setData(updatedData);
    };
    return (
        <div className="grid grid-cols-1 md:grid lg:grid-cols-2 gap-6  max-w-screen-2xl mx-auto mt-10">
            {
                data.map(data => <MyAddCart key={data._id} data={data} handleDeleteItem={handleDeleteItem} ></MyAddCart>)
            }
        </div>
    );
};

export default MyCart;