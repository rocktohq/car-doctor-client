import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <Loader></Loader>;
    if (!user)
        return <Navigate state={location.pathname} to="/signIn" replace></Navigate>;
    return { children };
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
