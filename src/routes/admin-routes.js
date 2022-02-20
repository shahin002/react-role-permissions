import LoginContainer from "../pages/admin-dashboard/auth/LoginContainer";
import DashboardContainer from "../pages/admin-dashboard/dashboard/DashboardContainer";

const adminRoutes = [
    {
        path: "/login",
        element: <LoginContainer/>,
        auth: false
    },
    {
        path: "/admin/dashboard",
        element: <DashboardContainer/>,
        auth: true
    },
];

export default adminRoutes;