import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignupComponent from '../components/SignupComponent'
import HomeLayout from "../layouts/HomeLayout";
import PaymentSuccess from "../components/PaymentSuccess";
import PaymentFailure from "../components/PaymentFailure";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignupComponent />
    },
    {
        path: "/home",
        element: <HomeLayout />
    },
    {
        path: "/paymentSuccess",
        element: <PaymentSuccess />
    },
    {
        path: "/paymentFailure",
        element: <PaymentFailure />
    }
]);