import styles from './ConfirmationModal.module.css'

export function ConfirmationModal({ message, onCancel, onConfirm}) {
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{message}</p>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={onCancel}>Cancelar</button>
                    <button className={styles.button} onClick={onConfirm}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}