import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";


const myRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    path:'/',
                    element: <Home></Home>,
                    loader: ()=> fetch('/data.json'),
                },
                {
                    path: '/donation',
                    element: <h2>donation</h2>,
                }
            ]
        },
    ]
);

export default myRouter;