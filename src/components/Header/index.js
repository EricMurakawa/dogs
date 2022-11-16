import { useContext } from 'react';

import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {

    const {data, userLogout} = useContext(UserContext);
    console.log(data);
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label='dogs - Home'><Dogs/></Link>
                {data ? (
                        <Link className={styles.login} to="/conta">
                            {data.nome}
                            <button onClick={userLogout}>sair</button>
                        </Link>
                    ) : (
                        <Link className={styles.login} to="/login">Login / Criar</Link>
                    )
                }
            </nav>
        </header>
    );
}
 
export default Header;