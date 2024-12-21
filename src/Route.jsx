import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Layout/Home/Home";
import Login from "./Layout/Login";
import Register from "./Layout/Register";
import CheckOut from "./Layout/CheckOut";
import PrivateRoute from "./Layout/Authentication/PrivateRoute";
import Booking from './Layout/Bookings/Booking'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute><Booking /></PrivateRoute>
            }
        ]
    },
]);
export default router;