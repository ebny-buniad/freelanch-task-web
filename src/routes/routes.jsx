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

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'add-task',
                Component: AddTask,
                loader: () => fetch('http://localhost:3000/users')
            },
            {
                path: 'browse-task',
                Component: BrowseTask,
                loader: () => fetch('http://localhost:3000/tasks')
            },
            {
                path: 'details-task/:id',
                Component: DetailsTask,
                loader: ({params}) => fetch(`http://localhost:3000/tasks/${params.id}`)
            },
            {
                path: 'my-posted-task',
                Component: MyPostedTasks
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
                Component: SignUp
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])

export default router