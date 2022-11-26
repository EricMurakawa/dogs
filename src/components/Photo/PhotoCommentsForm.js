import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import {ReactComponent as Enviar} from '../../Assets/enviar.svg';
import { COMMENT_POST } from "../../api";
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({id, setComments}) => {
    const [comment, setComment] = useState('');

    const {request, error} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        const token = window.localStorage.getItem('token');
        const {url, options} = COMMENT_POST(id, token, {comment});

        const {response, json} = await request(url, options);

        if(response.ok === true){
            setComment('');
            setComments((comments)=> [...comments, json]);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
                className={styles.textarea} 
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment} 
                onChange={({target})=> setComment(target.value)}
                />
            <button className={styles.button}>{<Enviar/>}</button>
            <Error error={error}/> 
        </form>
    );
}
 
export default PhotoCommentsForm;