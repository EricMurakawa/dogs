import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/Feed";
import { UserContext } from "../../Contexts/UserContext";
import UserPhotoPost from "./UserPhotoPost";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";
import NotFound from "../../components/NotFound";
import Head from "../../components/Helper/Head";

const User = () => {

    const {data} = useContext(UserContext);

    return (
        <section className="container">
            <Head title="Minha conta"/>
            <UserHeader/>
            <Routes>
                <Route path="/" element={<Feed user={data.id}/>}/>
                <Route path="postar" element={<UserPhotoPost/>}/>
                <Route path="estatisticas" element={<UserStats/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </section>
    );
}
 
export default User;