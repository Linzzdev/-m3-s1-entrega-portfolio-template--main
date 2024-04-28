import styles from './footer.module.css'

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.div}>
                <h2 className={styles.h2Footer}>Contato</h2>
                <img className={styles.img} src="./src/assets/whatsapp-icon.png"></img>
                <img className={styles.img} src="./src/assets/linkedin-icon.png"></img>
                <img className={styles.img} src="./src/assets/github-icon.png"></img>
            </div>
            <div className={styles.div}>
                <h2 className={styles.h2p}>Todos os direitos reservados - Guilherme</h2>
            </div>
        </footer>
    )
}