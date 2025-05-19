import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import BrowseTask from "../pages/BrowseTask"
import MyPostedTasks from "../pages/MyPostedTask"

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
                path:'add-task',
                Component: AddTask
            },
            {
                path:'browse-task',
                Component: BrowseTask
            },
            {
                path:'my-posted-task',
                Component: MyPostedTasks
            }
        ]
    }
])

export default router