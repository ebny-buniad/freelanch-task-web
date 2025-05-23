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

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('https://upwork-server.vercel.app/dedline/tasks'),
                hydrateFallbackElement: <Spinner></Spinner>
            },
            {
                path: 'add-task',
                element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>,
                loader: () => fetch('https://upwork-server.vercel.app/users')
            },
            {
                path: 'browse-task',
                Component: BrowseTask,
                loader: () => fetch('https://upwork-server.vercel.app/tasks')
            },
            {
                path: 'details-task/:id',
                element: <PrivateRoutes><DetailsTask></DetailsTask></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://upwork-server.vercel.app/tasks/${params.id}`)
            },
            {
                path: 'my-posted-task',
                element: <PrivateRoutes><MyPostedTasks></MyPostedTasks></PrivateRoutes>,
                loader: () => fetch('https://upwork-server.vercel.app/tasks')
            },
            {
                path: 'update-task/:id',
                element: <PrivateRoutes><UpdateTask></UpdateTask></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://upwork-server.vercel.app/tasks/${params.id}`)
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
        path: '*',
        Component: ErrorPage
    }
])

export default router