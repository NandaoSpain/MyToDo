import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css'

// eslint-disable-next-line react/prop-types
export function Task ({ content, completed, onComplete, onDelete }) {
    return (
        <div className={`${styles.newTask} ${completed ? styles.completed: ''}`}>
            <input type="checkbox" checked={completed} onChange={onComplete} />
            <p className={completed ? styles.completedText : ''}>{content}</p>
            <Trash onClick={onDelete}/>
        </div>
    );
}