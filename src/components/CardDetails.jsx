import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const spots = useLoaderData();
    const { _id } = useParams();

    console.log('ID from URL:', _id);
    console.log('All spots:', spots);

    const spot = spots.find(spot => spot._id === _id);

    if (!spot) {
        console.log('Spot not found');
    }

    return (
        <div className='my-12'>
            {/* <h2>This is card details page</h2> */}
            {spot ? (
                <div className="card h-[800px] bg-base-100 shadow-xl">
                <figure><img src={spot.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {spot.tourists_spot_name}
                    <div className="badge badge-secondary p-3">{spot.country_Name}</div>
                  </h2>
                  <div className='text-purple-500 text-base'>
                  <p className='font-semibold'>{spot.location}</p>
                  <p>{spot.short_description}</p>
                  <p>Cost: {spot.average_cost}</p>
                  <p>Travel Time: {spot.travel_time}</p>
                  <p>User: {spot.userName}</p>
                  <p>Contact : <span className='text-blue-600'>{spot.userEmail}</span> </p>
                  </div>
                  <div className="card-actions justify-end">
                    <div className="badge badge-secondary p-3 font-semibold">{spot.totaVisitorsPerYear} People</div> 
                    <div className="badge badge-secondary p-3 font-semibold">{spot.seasonality}</div>
                  </div>
                  <Link to="/" className='btn badge-secondary'>Back to Home</Link>
                </div>
              </div>
              
            ) : (
                <p>Spot not found</p>
            )}
        </div>
    );
};

export default CardDetails;
