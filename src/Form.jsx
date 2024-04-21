import { useState } from 'react';
import styles from './Form.module.css'
import { PlusCircle } from "@phosphor-icons/react";

export function Form () {

    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(task) {
        event.preventDefault();
        setNewTask('');
    }

    return (
        <form onSubmit={handleCreateNewTask}className={styles.form}>
            <textarea 
                className={styles.textarea} 
                placeholder="Adicione uma nova tarefa" 
            />            
            <button className={styles.button}>
                Criar
                <PlusCircle size={32} />
            </button>
        </form>
    );
}