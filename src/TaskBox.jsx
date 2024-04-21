import clipboard from './assets/Clipboard.svg'
import { Task } from './Task';
import styles from './TaskBox.module.css'
import { useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";


export function TaskBox () {
    const [newTask, setNewTask] = useState([]);       
    const [newTaskText, setNewTaskText] = useState('');
    
    function handleCreateNewTask () {
        event.preventDefault();
        setNewTask([...newTask, newTaskText]);
        setNewTaskText('');
                
        
    }
    
    function handleNewTaskChange() {
        setNewTaskText(event.target.value);
    } 
    
    return (
        
        <main className={styles.main}>
            <form onSubmit={handleCreateNewTask}className={styles.form}>
            <textarea 
                className={styles.textarea}
                value={newTaskText} 
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
            />            
            <button type='submit' className={styles.button} >
                Criar
                <PlusCircle size={32} />
            </button>
            </form>
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
                    {newTask.map((post, index) => (
                        
                        <Task 
                            key={index} 
                            content={post} 
                        />
                    ))}
                                         
                </div>                     
            </div>
        </main>
    );
}