import styles from './Card.module.css'
export default function Card() {
    return (<>
        <div className={styles.card}>
            <img src="/the-office.jpg" className={styles.photo} alt=""/>
            <div className={styles.infos}>
                <h1 className={styles.title}>Pôster: The Office(2005)</h1>
                <p className={styles.textSinopse}>Um poster decorativo épico da série The Office, em tamanho A3. Uma ótima recordação de um dos mais icônicos seriados de humor de todos os tempos. Com suas muitas temporadas, divertiu, e diverte, muitos públicos até o dia de hoje. Não perca a chance de imortalizar a sua série favorita.</p>
                <button className={styles.cta}>Comprar Agora</button>
            </div>
        </div>
        </>
        )
    }