import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import About from "./About";
import Home from "./Home";
import Root from "../Root"
import NotFound from "./NotFound";
import ErrorComponent from "../components/ErrorComponent";
import User from "./users/User";
import Followers from "./users/Followers";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path:"",
                element: <Home />,
                errorElement: <ErrorComponent />
            },
            {
                path:"about",
                element: <About />,
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
