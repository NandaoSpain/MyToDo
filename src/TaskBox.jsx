import clipboard from './assets/Clipboard.svg'
import { Task } from './Task';
import styles from './TaskBox.module.css'
import { useState } from 'react';
import { PlusCircle } from "@phosphor-icons/react";
import { ConfirmationModal } from './ConfirmationModal';


export function TaskBox () {
    const [newTask, setNewTask] = useState([]);       
    const [newTaskText, setNewTaskText] = useState('');
    const [completedTasks, setCompletedTasks] = useState(0);
    const [showComfirmationModal, setShowComfirmationModal] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    
    function handleCreateNewTask () {
        event.preventDefault();
        setNewTask([...newTask, { text: newTaskText, completed: false }]);
        setNewTaskText('');      
    }
    
    function handleNewTaskChange() {
        setNewTaskText(event.target.value);
    } 
    
    function handleTaskCompletion(index) {
        const updatedTasks = [...newTask];
        updatedTasks[index] = {...updatedTasks[index], completed: !updatedTasks[index].completed };
        setNewTask(updatedTasks);
        setCompletedTasks(updatedTasks.filter(task => task.completed).length);
    }

    function handleDeleteTask(index) {
        setTaskToDelete(index);
        setShowComfirmationModal(true);
    }

    function confirmdeleteTask() {
        const updatedTasks = [...newTask];
        updatedTasks.splice(taskToDelete, 1);
        setNewTask(updatedTasks);
        setCompletedTasks(updatedTasks.filter(task => task.completed).length);
        setShowComfirmationModal(false);
    }

    function cancelDeleteTask() {
        setShowComfirmationModal(false);
    }

    const totalTasks = newTask.length;
    const completedTasksCount = newTask.filter(task => task.completed).length;

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
                    <span className={styles.counter}>{totalTasks}</span>
                </div>
                <div>
                    <strong className={styles.concluded}>Concluídas</strong>
                    <span className={styles.counter}>{completedTasksCount} de {totalTasks}</span>
                </div>
            </header>
            <div className={styles.box}>
                <div className={styles.contentVoid}>
                    <img src={clipboard} alt="clipboard icon" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
                <div>
                    {newTask.map((task, index) => (                        
                        <Task 
                            key={index} 
                            content={task.text}
                            completed={task.completed}
                            onComplete = {() => handleTaskCompletion(index)}
                            onDelete={() => handleDeleteTask(index)} 
                        /> 
                    ))}
                    
                                         
                </div>
                                     
            </div>
            {showComfirmationModal && (
                <ConfirmationModal
                    message="Tem certeza de que deseja excluir esta tarefa?"
                    onCancel={cancelDeleteTask}
                    onConfirm={confirmdeleteTask}
                />
            )}
            
        </main>
    );
}