import { FormEvent } from "react";
import styles from "./BttnCreate.module.css";
import { FiPlusCircle } from "react-icons/fi";

interface BttnProps {
    onClick: (e: FormEvent) => void;
}

export function BttnCreate({ onClick }: BttnProps) {
    return(
        <button
        className={styles.button}
        onClick={onClick}
        >
            Criar <FiPlusCircle size={16} />
        </button>
    )
}