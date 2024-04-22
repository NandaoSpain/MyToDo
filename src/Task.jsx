import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css'

export function Task ({ content, completed, onComplete, onDelete }) {
    return (
        <div className={`${styles.newTask} ${completed ? styles.completed: ''}`}>
            <input type="checkbox" checked={completed} onChange={onComplete} />
            <p className={completed ? styles.completedText : ''}>{content}</p>
            <Trash className={styles.svg} onClick={onDelete}/>
        </div>
    );
}