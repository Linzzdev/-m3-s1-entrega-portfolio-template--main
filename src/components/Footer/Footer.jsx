import styles from './footer.module.css'
import logoW from '/src/assets/whatsapp-icon.png'
import logoI from '/src/assets/linkedin-icon.png'
import logoG from '/src/assets/github-icon.png'

export const Footer = () =>{
    return(
        <footer id='footer' className={styles.footer}>
            <div className={styles.div}>
                <h2 className={styles.h2Footer}>Contato</h2>
                <img className={styles.img} src={logoW}></img>
                <img className={styles.img} src={logoI}></img>
                <img className={styles.img} src={logoG}></img>
            </div>
            <div className={styles.div}>
                <h2 className={styles.h2p}>Todos os direitos reservados - Guilherme</h2>
            </div>
        </footer>
    )
}