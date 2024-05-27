import styles from './aboutme.module.css';

export const AboutMeSection = () =>{
    return(
        <section className={styles.section}>
            <h2 className={styles.h2aboutme}>Sobre mim</h2>
            <p className={styles.pabout}>Apaixonado por tecnologia e fascinado pelo mundo da programação, decidi me inserir no mercado de trabalho como desenvolvedor web. Possuo especialização em React, HTML, CSS, SCSS e JavaScript, e estou pronto para contribuir com minhas habilidades para projetos inovadores e desafiadores. </p>
        </section>
    )
}

