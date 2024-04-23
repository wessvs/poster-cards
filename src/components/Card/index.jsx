import posterImg from "../../assets/the-office.jpg" 
import Button from "../Button"
import styles from './styles.module.css'



export default function Card({ title, posterImg }) {
    return (
    <>  <div className={ styles.container }>
            <img src={ posterImg } className={ styles.poster } alt={ title } />
        
            <div>
                <h2>{title}</h2>
                <p>Um poster decorativo épico da série The Office, em tamanho A3. Uma ótima recordação de um dos mais icônicos seriados de humor de todos os tempos. Com suas muitas temporadas, divertiu, e diverte, muitos públicos até o dia de hoje. Não perca a chance de imortalizar a sua série favorita.</p>
                <Button text="Comprar Agora" />
            </div>
        </div>
        </>
    )
}