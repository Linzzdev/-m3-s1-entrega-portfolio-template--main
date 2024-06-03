import { technologies } from "../../data/technologies"
import styles from './techsection.module.css'


export const TechSection = () =>{
    return(
        <section id="techSec" className={styles.section}>
            <h2 className={styles.h2tech}>Tecnologias</h2>
            <div>
                <ul className={styles.ulTec}>
                    {technologies.map(card =>(
                        <li className={styles.litec} key={card.name}>
                            <img className={styles.img} src={card.img}></img>
                            <h2 className={styles.h3tech}>{card.name}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}