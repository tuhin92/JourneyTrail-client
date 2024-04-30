import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);


    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then( result => {
            console.log(result.user);
        })
        .catch( error => {
            console.error(error);
        })
    }
    return (
        <div className="mb-24">
    <form onSubmit={handleSignIn} className="md:w-1/3 lg:w-1/3 mx-auto bg-base-100 p-12 rounded-2xl my-4 md:my-32">
      <h2 className="text-3xl text-center font-bold text-purple-950">
        Sign In
      </h2>
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
        <button className="btn btn-primary">Sign In</button>
      </div>
      <p className="text-center mt-6 mb-4 text-base">Don't have an account? <Link to="/signup"> <span className='text-blue-600 font-bold'>Sign Up</span></Link> </p>
    </form>
    </div>
    );
};

export default SignIn;