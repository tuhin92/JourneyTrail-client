const AddTouristsSpot = () => {
    const handleAddTouristSpot = event => {
        event.preventDefault();

        const form = event.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const image = form.image.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const newSpot = {tourists_spot_name, image, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, userEmail, userName}
        console.log(newSpot);

        // send data to the server 
        fetch('http://localhost:3005/addSpot', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="mb-8 p-24">
            <h2 className="text-3xl font-bold text-center text-purple-600">Add Tourists Spot</h2>
            <form onSubmit={handleAddTouristSpot}>
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
                        <span className="label-text">Travel Time</span>
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