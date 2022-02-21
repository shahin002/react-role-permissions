import LoginContainer from "../pages/admin-dashboard/auth/LoginContainer";
import SignUpContainer from "../pages/admin-dashboard/auth/SignUpContainer";
import DashboardContainer from "../pages/admin-dashboard/dashboard/DashboardContainer";

const adminRoutes = [
    {
        path: "/login",
        element: <LoginContainer />,
        auth: false
    },
    {
        path: "/sign-up",
        element: <SignUpContainer />,
        auth: false
    },
    {
        path: "/admin/dashboard",
        element: <DashboardContainer/>,
        auth: true
    },
];

export default adminRoutes;