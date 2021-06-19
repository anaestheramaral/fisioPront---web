import styles from '../../styles/Login/Styles.module.scss'
import { FaGoogle } from 'react-icons/fa'

import { signIn } from 'next-auth/client'



export function Login() {
    return (
        <div className={ styles.container }>
            <header>
                <div>
                    <h3>Vamos entrar!</h3>
                    <p>É muito bom te ver de novo! </p>
                </div>
            </header>
            <main className={ styles.containerLogin } >
                <div>
                    <input type="text" placeholder="Email ou telefone" />
                    <input type="password" placeholder="Senha"/>
                    <span>ou</span>
                    <button onClick={ () => signIn('google') }><FaGoogle />Entrar com Google</button>
                </div>
            </main>
        </div>
    )
}