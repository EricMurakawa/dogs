import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/Feed";
import { UserContext } from "../../Contexts/UserContext";
import UsePhotoPost from "./UsePhotoPost";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";

const User = () => {

    const {data} = useContext(UserContext);

    return (
        <section className="container">
            <UserHeader/>
            <Routes>
                <Route path="/" element={<Feed user={data.id}/>}/>
                <Route path="postar" element={<UsePhotoPost/>}/>
                <Route path="estatisticas" element={<UserStats/>}/>
            </Routes>
        </section>
    );
}
 
export default User;