import styles from './header.module.css'

export const Header = ({handleLinkClick}) => {


    return(
        <header className={styles.Header}>
            <h1 className={styles.h1}>Portfólio</h1>
            <div className={styles.divAbout}>
                <a className={styles.a} href="aboutMeSec" onClick={(e) => handleLinkClick(e, 'aboutMeSec')} >About</a>
                <a className={styles.a} href="techSec" onClick={(e) => handleLinkClick(e, 'techSec')} >Tech</a>
                <a className={styles.a} href="pjSec" onClick={(e) => handleLinkClick(e, 'pjSec')} >Work</a>
            </div>
            <button onClick={(e) => handleLinkClick(e, 'footer')} className={styles.buttonContact}>Contato</button>
        </header>
    )
}