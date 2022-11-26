import { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({user}) => {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);
    
    useEffect(()=>{
        let wait = false;
        function infiniteScroll(event){
            if(infinite){
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
        
                console.log(scroll);
                console.log(height);
        
                if(scroll > height * .75 && !wait){
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(()=>{
                        wait = false;
                    }, 400)
                }
                //console.log(event);
            }
        }
        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);

        return ()=>{
            window.removeEventListener('wheel',infiniteScroll);
            window.removeEventListener('scroll',infiniteScroll);
        }

    }, [infinite]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
            {pages.map((page) => (<FeedPhotos 
                                    key={page} 
                                    user={user} 
                                    page={page}
                                    total={3} 
                                    setModalPhoto={setModalPhoto}
                                    setInfinite={setInfinite}/>
                                ))}
            
        </div>
    );
}
 
export default Feed;