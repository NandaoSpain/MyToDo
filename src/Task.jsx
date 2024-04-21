import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css'

export function Task ({ content }) {
    return (
        <div className={styles.newTask}>
            <input type="checkbox" />
            <p>{content}</p>
            <Trash />
        </div>
    );
}