import HomeContainer from "../pages/front-pages/HomeContainer";

const frontRoutes = [
    {
        path: "/",
        element: <HomeContainer/>,
        auth: true
    },
];
export default frontRoutes;