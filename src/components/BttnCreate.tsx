import styles from "./BttnCreate.module.css";
import { FiPlusCircle } from "react-icons/fi";

export function BttnCreate() {
    return(
        <button
        className={styles.button}
        >
            Criar <FiPlusCircle size={16} />
        </button>
    )
}