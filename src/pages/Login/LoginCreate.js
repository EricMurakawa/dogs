import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Error from "../../components/Helper/Error";
import Head from "../../components/Helper/Head";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const {userLogin} = useContext(UserContext);
    const {loading, error, request} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        const {url, options} = USER_POST({
            username: username.value, 
            email: email.value, 
            password: password.value
        });
        const {response} = await request(url, options);

        if(response.ok) userLogin(username.value, password.value);  
    }

    return (
        <section className="animeLeft">
            <Head title="Crie sua conta"/>
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Email" type="email" name="email" {...email}/>
                <Input label="Password" type="password" name="password" {...password}/>
                {loading ? (
                    <Button disabled>...Cadastrando</Button>
                ):(
                    <Button>Cadastrar</Button>
                )}
                <Error error={error}/>
            </form>
        </section>
    );
}
 
export default LoginCreate;