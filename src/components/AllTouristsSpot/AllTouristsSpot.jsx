import { useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard";

const AllTouristsSpot = () => {
    const spots = useLoaderData();
    return (
        <div>
            <h2 className="text-4xl text-purple-600 text-center font-bold mt-12">All Tourists Spot</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-4">
            {
                spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
            }
            </div>
        </div>
    );
};

export default AllTouristsSpot;