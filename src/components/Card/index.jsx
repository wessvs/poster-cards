import posterImg from "../../assets/the-office.jpg" 
import styles from './styles.module.css'



export default function Card() {
    return (
    <>  <div className={styles.container}>
            <img src={posterImg} className={styles.poster} alt="" />
        
            <div>
                <h2>Pôster: The Office(2005)</h2>
                <p>Um poster decorativo épico da série The Office, em tamanho A3. Uma ótima recordação de um dos mais icônicos seriados de humor de todos os tempos. Com suas muitas temporadas, divertiu, e diverte, muitos públicos até o dia de hoje. Não perca a chance de imortalizar a sua série favorita.</p>
                <button>Comprar Agora</button>
            </div>
        </div>
        </>
    )
}