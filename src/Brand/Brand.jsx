import BrandCard from "./BrandCard";


const Brand = ({ brands }) => {
    // console.log(brands);
    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-black py-2">Our <span className="text-[#F0151f]">Cars</span> Brands</h2>
                <p className="text-lg">You can see the brands we offer to buy the car of your choice</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-screen-xl mx-auto">
                {
                    brands?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;

