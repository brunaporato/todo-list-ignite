import styles from "./BttnDelete.module.css";
import { FiTrash2 } from "react-icons/fi";

export function BttnDelete() {
    return (
        <button className={styles.button}>
            <FiTrash2 size={14} />
        </button>
    )
}