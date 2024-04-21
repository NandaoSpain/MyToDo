import clipboard from './assets/Clipboard.svg'
import { Task } from './Task';
import styles from './TaskBox.module.css'

export function TaskBox () {
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
                <div className={styles.contentVoid}>
                    <img src={clipboard} alt="clipboard icon" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                <div>
                    <Task />
                    <Task />  
                    <Task />
                </div>                     
            </div>
        </main>
    );
}