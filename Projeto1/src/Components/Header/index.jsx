import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header className={styles.header}>
           <span>Bem Vindos!!</span>
            <nav>
                <Link to="/">Home</Link>
                 <Link to="">Cadastro</Link>
                  <Link to="">Perfil</Link>
                   <Link to="">Atualizar Perfil</Link>
            </nav>
             </header>
    )
}

export default Header