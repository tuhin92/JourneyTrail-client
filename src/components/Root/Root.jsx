import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <p>jshjfhsd</p> */}
            <Footer></Footer>
        </div>
    );
};

export default Root;