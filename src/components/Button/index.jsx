import styles from './styles.module.css'

export default function Button({ text }) {
    return (
        <button className={styles.wrapper}>{text}</button>
    )
}