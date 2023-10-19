import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { BttnCreate } from "./components/BttnCreate";
import { Task } from "./components/Task";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.inputSection}>
          <Input />
          <BttnCreate />
        </div>
        <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
      </div>
    </div>
  )
}
