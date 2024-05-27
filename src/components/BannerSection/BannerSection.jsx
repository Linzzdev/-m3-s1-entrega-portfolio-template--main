import styles from './banner.module.css'
import logo from '/src/assets/banner-img.png'

export const BannerSection = () => {
    return(
        <section className={styles.section}>
            <div>
                <p className={styles.nameLabel}>Guilherme</p>
                <h2 className={styles.h2msg}>Bem vindo ao <br></br>meu Portfólio</h2>
                <p className={styles.spanmsg}>O conhecimento é capaz de transformar vidas e, se utilizado devidamente, contribui significativamente para a construção de um mundo melhor</p>
                <button className={styles.buttonAbout}><a className={styles.buttonAbout} href='https://github.com/Linzzdev' target="blank">Saiba Mais</a></button>
            </div>
            <div>
                <img className={styles.img} src={logo}></img>
            </div>
        </section>
    )
}