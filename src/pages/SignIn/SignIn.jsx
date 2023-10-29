import { useLocation } from "react-router-dom";

const SignIn = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            This is Login Page
        </div>
    );
};

export default SignIn;