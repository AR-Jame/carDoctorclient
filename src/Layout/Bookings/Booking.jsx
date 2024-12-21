import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:3000/bookings?email=${user?.email}`;

    useEffect(() => {
        if (user.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [url]);

    const handleDelete = (_id) => {
        const prossed = confirm('Do you want to Prosed?');
        if (prossed) {
            fetch(`http://localhost:3000/bookings/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== _id);
                        setBookings(remaining)
                        alert('Deleted Successfully')
                    }
                })
        }

    }

    const handleConfirm = (_id) => {
        fetch(`http://localhost:3000/bookings/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== _id);
                    const updated = bookings.find(single => single._id === _id);
                    updated.status = 'confirmed'
                    const newBookings = [...remaining, updated]
                    setBookings(newBookings)
                }
            })
    }
    return (
        <div className="mx-[15%]">
            <h4 className="text-4xl font-semibold text-center my-7 mb-14">You have {bookings.length} bookings</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th></th>
                            <th>Date</th>
                            <th>name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingRow
                                key={booking._id}
                                data={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;