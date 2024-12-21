import PropTypes from "prop-types";

const BookingRow = ({ data, handleDelete, handleConfirm }) => {
    const { service, img, userName, date, amount, _id, status } = data;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle border-none btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td className="flex items-center gap-5">
                <img src={img} className="w-20 h-20 rounded-lg" />
                <div>
                    <p className="text-lg font-bold">{service}</p>
                    <p>{amount}</p>
                </div>
            </td>
            <td>
                <p>{date}</p>
            </td>
            <td>{userName}</td>
            <th>
                {
                    status ?
                        <span className="text-green-500 text-lg">Confirmed</span>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn">Confirm</button>

                }
            </th>

        </tr>
    );
};

BookingRow.propTypes = {
    data: PropTypes.object,
    handleDelete: PropTypes.func,
    handleConfirm: PropTypes.func

};
export default BookingRow;