import styles from './banner.module.css'

export const BannerSection = () => {
    return(
        <section className={styles.section}>
            <div>
                <p className={styles.nameLabel}>Guilherme</p>
                <h2 className={styles.h2msg}>Bem vindo ao <br></br>meu Portfólio</h2>
                <p className={styles.spanmsg}>Uma frase interessante sobre mim</p>
                <button className={styles.buttonAbout}>Saiba Mais</button>
            </div>
            <div>
                <img className={styles.img} src="./src/assets/banner-img.png"></img>
            </div>
        </section>
    )
}