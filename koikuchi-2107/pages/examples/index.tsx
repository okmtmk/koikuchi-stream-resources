import Container from '../../components/Container/Container'
import styles from './index.module.scss'

export default function Index() {
    return (
        <Container>
            <div className={styles.borderTop}></div>
            <div className={styles.borderRight}></div>
            <div className={styles.borderLeft}></div>
            <div className={styles.borderBottom}></div>
        </Container>
    )
}