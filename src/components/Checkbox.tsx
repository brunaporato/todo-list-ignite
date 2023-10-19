import styles from "./Checkbox.module.css";

interface CheckboxProps {
  onClick: () => void;
}

export function Checkbox({ onClick }: CheckboxProps) {
    return (
      <label className={styles.container}>
        <input type="checkbox" className={styles.checkbox} onClick={onClick} />
        <span className={styles.checkmark} />
      </label>
    )
}