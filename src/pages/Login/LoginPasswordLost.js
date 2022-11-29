import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../../components/Helper/Error';
import Head from '../../components/Helper/Head';

const LoginPasswordLost = () => {
    const login = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        if(login.validate()){
            const {url, options} = PASSWORD_LOST({
                login: login.value, 
                url: window.location.href.replace('perdeu', 'resetar'), 
            });
            const {json} = await request(url, options);
            console.log(json);
        }
    }

    return (
        <section className='animeLeft'>
            <Head title="Recuperar a senha"/>
            <h1 className="title">Perdeu a senha?</h1>
            {data ? (
                <p style={{color: '#4c1'}}>{data}</p>
            ):(
                <form onSubmit={handleSubmit}>
                    <Input label="Email/Usuário" type="text" name="email" {...login}/>
                    {loading?(
                        <Button disabled>Enviando...</Button>
                    ):(
                        <Button>Enviar Email</Button>
                    )}
                    <Error error={error}/>
                </form>
            )}
        </section>
    );
}
 
export default LoginPasswordLost;