const AddTouristsSpot = () => {
    return (
        <div className="mb-8 p-24">
            <h2 className="text-3xl font-bold text-center text-purple-600">Add Tourists Spot</h2>
            <form>
                {/* form row  */}
                <div className="md:flex mt-8 gap-8">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Spot Name</span>
                    </label>
                    <label>
                        <input type="text" name="tourists_spot_name" placeholder="Spot Name"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label>
                        <input type="text" name="image" placeholder="Photo URL"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex  gap-8">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Country Name</span>
                    </label>
                    <label>
                        <input type="text" name="country_Name" placeholder="Country Name"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <label>
                        <input type="text" name="location" placeholder="Location"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-8">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label>
                        <input type="text" name="short_description" placeholder="Description"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Average Cost</span>
                    </label>
                    <label>
                        <input type="text" name="average_cost" placeholder="Average Cost"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex  gap-8">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Seasonality</span>
                    </label>
                    <label>
                        <input type="text" name="seasonality" placeholder="Seasonality"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Travel_Time</span>
                    </label>
                    <label>
                        <input type="text" name="travel_time" placeholder="Travel Time"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-8">
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Total Visitors PerYear</span>
                    </label>
                    <label>
                        <input type="text" name="totaVisitorsPerYear" placeholder="Total Visitors PerYear"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <label>
                        <input type="text" name="userEmail" placeholder="User Email"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-8">
                    <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <label>
                        <input type="text" name="userName" placeholder="User Name"  className="input input-bordered w-full"/>
                    </label>
                    </div>
                </div>
                <input type="submit" value="Add"  className="btn btn-block mt-6 bg-purple-500"/>
            </form>
        </div>
    );
};

export default AddTouristsSpot;