import styles from "./BttnMode.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

interface Props {
    onClick: () => void;
    lightmode: boolean;
}

export function BttnMode({ onClick, lightmode }: Props) {
    return (
        <div
            className={styles.div}
            onClick={onClick}
        >
            <FiMoon size={20} className={lightmode ? '' : styles.hide} />
            <FiSun size={20} className={lightmode ? styles.hide : ''} />
        </div>
    )
}