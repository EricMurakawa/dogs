import styles from './UserPhotoPost.module.css';
import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Error from '../../components/Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../../components/Helper/Head';

const UsePhotoPost = () => {
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = useState({});
    const {error, data, loading, request} = useFetch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(data) navigate('/conta');
    }, [data, navigate]);
    
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem('token');
        const {url, options} = PHOTO_POST(formData, token);
    
        request(url, options);
    }

    function handleImgChange({target}){
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        })
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title="Poste sua foto"/>
            <form onSubmit={handleSubmit}>
                <Input name="nome" type="text" label="Nome" {...nome}/>
                <Input name="pese" type="number" label="Peso" {...peso}/>
                <Input name="idade" type="number" label="Idade" {...idade}/>
                <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange}/>
                { loading ? (
                    <Button disabled>Enviando</Button>
                ):(
                    <Button>Enviar</Button>
                )}
                <Error error={error}/>
            </form>
            { img.preview && (
                <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>
            )}
        </section>
    );
}
 
export default UsePhotoPost;