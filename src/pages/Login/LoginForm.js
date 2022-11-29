import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import Error from "../../components/Helper/Error";
import { UserContext } from "../../Contexts/UserContext";
import useForm from "../../Hooks/useForm";
import styles from './LoginForm.module.css';
import stylesBtn from '../../components/Form/Button/Button.module.css'
import Head from "../../components/Helper/Head";

const LoginForm = () => {

    const username = useForm(); 
    const password = useForm(); 

    const {userLogin, error, loading} = useContext(UserContext);

    async function handleSubmit(event){
        event.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Login"/>
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" name="username" type="text" {...username}/>
                <Input label="Senha" name="password" type="password" {...password}/>
                {loading ? (
                    <Button disabled>Carregando</Button>
                ):(
                    <Button>Entrar</Button>
                )}
                <Error error={error && 'Dados incorretos'}/>
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">Recuperar senha</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta?</p>
                <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
            </div>
        </section>
    );
}
 
export default LoginForm;