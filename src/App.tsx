import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { BttnCreate } from "./components/BttnCreate";
import { Task } from "./components/Task";

import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  let tasks: Object[] = [];

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.inputSection}>
          <Input />
          <BttnCreate />
        </div>
        <main className={styles.main}>
          <div className={styles.mainTop}>
            <div className={styles.created}>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div className={styles.done}>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </div>
          <div className={tasks.length == 0 ? styles.hide : styles.tasks}>
          </div>
          <div className={tasks.length == 0 ? styles.tasksNull : styles.hide}>
            <img src={clipboard} alt="clipboard icon" />
            <p>
              Você ainda não tem tarefas cadastradas <br />
              <span>
                Crie tarefas e organize seus itens a fazer
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
