import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Error from '../../components/Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { useEffect, useState } from "react";
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../../components/Helper/Head';

const LoginPasswordReset = () => {
    const [login, setLogin] = useState('');
    const [key, setKey] = useState('');
    const password = useForm();
    const {data, loading, error, request} = useFetch();
    const navigate = useNavigate();

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if(key) setKey(key);
        if(login) setLogin(login);
    }, []);

    async function handleSubmit(event){
        event.preventDefault();
        if(password.validate()){
            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            })
            const {response} = await request(url, options);
            if(response.ok) navigate('/login');
        }
    }

    return (
        <section className='animeLeft'>
            <Head title="Redefinir senha"/>
            <h1 className='title'>Redefinir Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova senha" type="password" name="password" {...password}/>
                {loading?(
                        <Button disabled>Enviando...</Button>
                ):(
                    <Button>Enviar</Button>
                )}
                <Error error={error}/>
            </form>
            
        </section>
    );
}
 
export default LoginPasswordReset;