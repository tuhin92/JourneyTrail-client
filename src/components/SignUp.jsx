import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        // const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // Password verification
        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

        // Clear any previous error
        setError(null);

        // Create user in firebase 
        createUser(email, password)
        .then( result => {
            console.log(result.user);
            navigate('/'); // Navigate to the home page
        })
        .catch( error => {
            console.error(error);
        });
    };

    return (
        <div className="mb-24">
            <form onSubmit={handleSignUp} className="md:w-1/3 lg:w-1/3 mx-auto bg-base-100 p-12 rounded-2xl my-4 md:my-32">
                <h2 className="text-3xl text-center font-bold text-purple-950">
                    Sign Up
                </h2>
                {error && (
                    <div className="text-red-600">{error}</div>
                )}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photo"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input input-bordered pr-10"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-6 mb-4 text-base">Already have an account? <Link to="/signin"> <span className='text-blue-600 font-bold'>Sign In</span></Link> </p>
            </form>
        </div>
    );
};

export default SignUp;
