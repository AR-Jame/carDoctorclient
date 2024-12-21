import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(resp => resp.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="pt-16">
            <div className="text-center">
                <h4 className='font-bold text-[#FF3811] text-xl'>Services</h4>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised br words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-10">
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
            <div className="text-center mt-10">
            <button className="hover:text-white text-[#FF3811] border border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811] btn btn-outline">More Services</button>
            </div>

        </div>
    );
};

export default Services;