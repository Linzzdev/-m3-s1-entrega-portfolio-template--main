import { projects } from "../../data/projects";
import styles from './pjsec.module.css'

export const ProjectsSection = () =>{
    return(
        <section id="pjSec" className={styles.section}>
            <h2 className={styles.h2Project}>Projetos</h2>
            <ul className={styles.ulProject}>
                {projects.map(project =>(
                    <li className={styles.liProject} key={project.name}>
                        <h2 className={styles.h3Project}>{project.name}</h2>
                        <p className={styles.pProject}>{project.description}</p>
                        <a className={styles.a} href={project.link} target="blank" >Saiba mais</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}