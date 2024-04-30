import { Link } from "react-router-dom";

const SpotCard = ({spot}) => {
    const {tourists_spot_name, image, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, userEmail, userName, _id} = spot;



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p className="text-[#616060]">Locatin: {location}</p>
                    <p className="text-[#616060]">{short_description}</p>
                    <div className="flex gap-4">
                        <p className="font-bold text-purple-600">Cost: {average_cost}</p>
                        <p className="font-bold text-purple-600">Travel Time: {travel_time}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/spot/${_id}`} className="btn">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;