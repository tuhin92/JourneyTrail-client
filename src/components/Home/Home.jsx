import Slider from "../Slider/Slider";
import { useLoaderData } from 'react-router-dom';
import SpotCard from "../SpotCard";

const Home = () => {
    const spots = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <h2 className="text-4xl text-purple-600 text-center font-bold mt-12">Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-4">
            {
                spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
            }
            </div>
            {/* special offers */}
            <div>
                <h2 className="text-4xl text-purple-600 text-center font-bold mt-16 mb-4">Summer Offers</h2>
                <img className="mb-12 rounded-2xl " src="https://i.ibb.co/yfMb4Zv/Black-White-and-Red-Minimalist-Market-Shops-Discount-Black-Friday-Banner.jpg" alt="" />
            </div>

            {/* introduce our app  */}
            <div>
                <h2 className="text-4xl text-purple-600 text-center font-bold mt-16 mb-4">Our Mobile App Avaiable Now !</h2>
                <img className="mb-12 rounded-2xl " src="https://i.ibb.co/p3sNb4Y/Blue-and-Pink-Modern-Tech-Electronics-and-Technology-Retractable-Exhibition-Banner.png" alt="" />
            </div>
        </div>
    );
};

export default Home;