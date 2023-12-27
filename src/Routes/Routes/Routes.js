import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import Error from "../../Pages/Error/Error";
import SignUp from "../../Pages/SignUp/SignUp";
import Doctors from "../../Pages/Doctors/Doctors";
import DoctorDetails from "../../Pages/DoctorDetails/DoctorDetails";
import Shop from "../../Pages/Shop/Shop";
import Departments from "../../Pages/Departments/Departments";
import Appointments from "../../Pages/Appointments/Appointments/Appointments";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../../Pages/Dashboard/ManageProduct/ManageProduct";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MDoctors from "../../Pages/Dashboard/MDoctors/MDoctors";
import Products from "../../Pages/Dashboard/Products/Products";
import BkashPayment from "../../Pages/Dashboard/BkashPayment/BkashPayment";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/doctors',
                element: <Doctors/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/doctorDetails',
                element: <DoctorDetails/>
            },
            {
                path: '/appointments',
                element: <PrivateRoute><Appointments/></PrivateRoute>
            },
            {
                path: '/departments/:id',
                element: <Departments/>,
                loader: ({params}) =>{
                    return fetch(`https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/departments/${params.id}`);
                }
            },
        ]
    }, 
    {
        path: '/contact',
        element: <AuthLayout/>,
        children: [
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    },
    {
        path: '/login',
        element: <AuthLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }, 
    {
        path: '/signup',
        element: <AuthLayout/>,
        children: [
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    }, 
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment/>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders/>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers/></AdminRoutes>
            },
            {
                path: '/dashboard/doctors',
                element: <AdminRoutes><MDoctors/></AdminRoutes>
            },
            {
                path: '/dashboard/products',
                element: <AdminRoutes><Products/></AdminRoutes>
            },
            {
                path: '/dashboard/manageproduct',
                element: <AdminRoutes><ManageProduct/></AdminRoutes>
            },
            {
                path: '/dashboard/confirmpayment',
                element: <AdminRoutes><BkashPayment/></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoutes><Payment/></AdminRoutes>,
                loader: ({params}) => fetch(`https://medwin-cares-server-two.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <Error/>
    }
])

export default router;