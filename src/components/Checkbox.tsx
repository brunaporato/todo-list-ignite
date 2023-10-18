import styles from "./Checkbox.module.css";

interface Props {
  checked?: boolean;
}

export function Checkbox({checked = false}: Props) {
    return (
      <label className={styles.container}>
        <input type="checkbox" className={styles.checkbox} checked={checked}/>
        <span className={styles.checkmark} />
      </label>
    )
}