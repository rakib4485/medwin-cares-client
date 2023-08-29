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
import Appointment from "../../Pages/Appointment/Appointment";
import Departments from "../../Pages/Departments/Departments";
import Appointments from "../../Pages/Appointments/Appointments/Appointments";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
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
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/appointments',
                element: <Appointments/>
            },
            {
                path: '/departments',
                element: <Departments/>
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
        path: '*',
        element: <Error/>
    }
])

export default router;