import styles from "./Checkbox.module.css";

export function Checkbox() {
    return (
      <label className={styles.container}>
        <input type="checkbox" className={styles.checkbox}/>
        <span className={styles.checkmark} />
      </label>
    )
}