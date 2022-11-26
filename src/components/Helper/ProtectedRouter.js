import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const ProtectedRouter = ({children}) => {
    const {login} = useContext(UserContext);

    return login ? children: <Navigate to="/login"/>;
}
 
export default ProtectedRouter;