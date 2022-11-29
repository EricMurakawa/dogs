import { React, useEffect } from "react";
import { STATS_GET } from "../../api";
import Head from "../../components/Helper/Head";
import Loading from "../../components/Helper/Loading";
import Error from "../../components/Helper/Error";
import useFetch from '../../Hooks/useFetch';

const UserStatsGraphs = React.lazy(()=> import("./UserStatsGraphs"));

const UserStats = () => {
    const {data, error, loading, request} = useFetch();

    useEffect(()=>{
        async function getData(){
            const {url, options} = STATS_GET();
            await request(url, options);
        }
        getData();
    },[request])
    console.log(data);
    if(loading) return <Loading/>;
    if(error) return <Error error={error}/>;
    if(Array.isArray(data) && data.length > 0)
        return (
            <React.Suspense fallback={<Loading/>}>
                <Head title="Estatísticas"/>
                <UserStatsGraphs data={data}/>
            </React.Suspense>
        );
    else return null;
}
 
export default UserStats;