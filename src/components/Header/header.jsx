import styles from './header.module.css'

export const Header = () => {
    return(
        <header className={styles.Header}>
            <h1 className={styles.h1}>Portfólio</h1>
            <div className={styles.divAbout}>
                <h2 className={styles.h2}>Sobre</h2>
                <h2 className={styles.h2}>Stack</h2>
                <h2 className={styles.h2}>Projetos</h2>
            </div>
            <button className={styles.buttonContact}>Contato</button>
        </header>
    )
}