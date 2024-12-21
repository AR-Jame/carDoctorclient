import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { price, img, title, _id } = service;
    return (
        <div className=" p-7 rounded-xl border">
            <img src={img} className="rounded-md" />
            <h2 className="text-3xl font-bold mt-5">{title}</h2>
            <div className="flex justify-between items-center mt-5">
                <p className="text-[#FF3811] text-2xl font-bold">${price}</p>
                <Link to={`/checkOut/${_id}`}>
                    <p
                        className="hover:scale-x-125 text-xl cursor-pointer hover:text-[#FF3811] hover:translate-x-3 transition-all"
                    >
                        {<FaArrowRight />}
                    </p>
                </Link>
            </div>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object,
};
export default Service;