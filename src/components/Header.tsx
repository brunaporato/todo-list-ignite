import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header && styles.lightmode}>
      <img src={logo} alt="ToDo List logo" />
      <h1>to<span>do</span></h1>
    </header>
  )
}