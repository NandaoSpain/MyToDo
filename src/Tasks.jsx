import clipboard from './assets/Clipboard.svg'
import styles from './Tasks.module.css'

export function Tasks () {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div>
                    <strong className={styles.created}>Tarefas criadas</strong>
                    <span className={styles.counter}>0</span>
                </div>
                <div>
                    <strong className={styles.concluded}>Concluídas</strong>
                    <span className={styles.counter}>0</span>
                </div>
            </header>
            <div className={styles.box}>
                <div className={styles.content}>
                    <img src={clipboard} alt="clipboard icon" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                
            </div>
        </main>
    );
}