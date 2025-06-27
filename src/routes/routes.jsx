import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import BrowseTask from "../pages/BrowseTask"
import MyPostedTasks from "../pages/MyPostedTask"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import ErrorPage from "../pages/ErrorPage"
import AuthLayout from "../layouts/AuthLayout";
import DetailsTask from "../components/DetailsTask/DetailsTask";
import PrivateRoutes from "./PrivateRoutes";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import Spinner from "../components/Spinner/Spinner";
import DashboardLayout from "../layouts/DashboardLayout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MyAccount from "../pages/Dashboard/MyAccount/MyAccount";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/dedline/tasks'),
                hydrateFallbackElement: <Spinner></Spinner>
            },
            {
                path: 'browse-task',
                Component: BrowseTask,
                loader: () => fetch('http://localhost:3000/tasks')
            },
            {
                path: 'details-task/:id',
                element: <PrivateRoutes><DetailsTask></DetailsTask></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:3000/tasks/${params.id}`)
            },
            {
                path: 'update-task/:id',
                element: <PrivateRoutes><UpdateTask></UpdateTask></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:3000/tasks/${params.id}`)
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'contact',
                Component: Contact
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'sign-up',
                Component: SignUp,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: 'my-account',
                Component: MyAccount
            },
            {
                path: 'add-task',
                element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>,
                loader: () => fetch('http://localhost:3000/users')
            },
            {
                path: 'my-posted-task',
                element: <PrivateRoutes><MyPostedTasks></MyPostedTasks></PrivateRoutes>,
                loader: () => fetch('http://localhost:3000/tasks')
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])

export default router