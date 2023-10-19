import styles from "./BttnDelete.module.css";
import { FiTrash2 } from "react-icons/fi";

interface BttnProps {
    onClick: () => void;
}

export function BttnDelete({ onClick }: BttnProps) {
    return (
        <button
        className={styles.button}
        onClick={onClick}
        >
            <FiTrash2 size={14} />
        </button>
    )
}