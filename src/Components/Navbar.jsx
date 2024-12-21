import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../Layout/Authentication/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then((result) => {
          console.log(result)  
        }).catch((err) => {
            console.log(err)
        });
    };
    console.log(user);
    const menu = <>
        <NavLink to="/" className=" hover:text-[#FF3811]">Home</NavLink>
        <NavLink to="/booking" className=" hover:text-[#FF3811]">My Bokings</NavLink>
        {
            user? <><p>{user.emal}</p> <button onClick={handleLogOut}>Log out</button></>
            : 
            <NavLink to="/login" className=" hover:text-[#FF3811]">login</NavLink>
        }
    </>
    return (
        <div className="flex lg:mx-[10%] font-lota text-lg font-medium flex-wrap justify-between items-center py-4 px-6 bg-white">
            {/* Left side: Website logo */}
            <div className="flex items-center space-x-2">
                <Link to='/'>
                    <img src={logo} className="w-16 h-16" />
                </Link>
            </div>

            {/* Middle: Links (visible only on larger screens) */}
            <div className="hidden sm:flex gap-6">
                {menu}

            </div>

            {/* Right side: Avatar */}
            <div className="flex items-center">
                <NavLink to="/" className="hover:text-white text-[#FF3811] border border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811] btn btn-outline"><button>Appoentment</button></NavLink>
            </div>

            {/* Mobile view: Links (shown when on smaller screens) */}
            <div className="w-full sm:hidden mt-4 flex justify-center gap-4">
                {menu}
            </div>
        </div>
    );
};

export default Navbar;