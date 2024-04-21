import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css'

export function Task () {
    return (
        <div className={styles.newTask}>
            <input type="checkbox" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, doloremque. Repellat, doloremque.</p>
            <Trash />
        </div>
    );
}