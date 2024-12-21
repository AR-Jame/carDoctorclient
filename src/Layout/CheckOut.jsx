import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const booking = {
            userName: name,
            date,
            email,
            amount,
            service: title,
            service_id: _id,
            img
        }
        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Booking Successful')
                form.reset()
            }
        })   
    }
    return (
        <div className="mx-[15%] mt-10">
            <h4 className="text-center text-3xl font-bold mb-9">Service Name: {title}</h4>
            <div className="bg-[#F3F3F3] rounded-3xl p-12 ">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-2xl">
                        <input type="text" placeholder="Enter your name" name="name" className="bg-white w-full rounded-lg p-4" />
                        <input type="date" placeholder="Enter your date" name="date" className="bg-white w-full rounded-lg p-4" />
                        <input type="email" defaultValue={user?.email} placeholder="Enter your email" name="email" className="bg-white w-full rounded-lg p-4" />
                        <input type="text" defaultValue={'$' + price} placeholder="Enter the due amount" name="amount" className="bg-white w-full rounded-lg p-4" />
                        <textarea rows='8' placeholder="Enter your Message" className="md:col-span-2 rounded-lg p-4"></textarea>
                        <input type="submit" value="Check Out" className="md:col-span-2 rounded-lg py-4 cursor-pointer text-white bg-[#ff3811]" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default CheckOut;