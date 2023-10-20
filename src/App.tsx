import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { BttnCreate } from "./components/BttnCreate";
import { Task } from "./components/Task";

import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";
import { ChangeEvent, useState } from "react";

interface TaskItem {
  id: number;
  text: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  function handleCreateNewTask() {
    if(newTask == '') {
      alert('Tarefa inválida')
      return
    }

    const newTaskObject: TaskItem = {
      id: Math.floor(Math.random() * 300) + 1,
      text: newTask,
      done: false
    }

    setTasks([ ...tasks, newTaskObject ]);
    setNewTask('');
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('');
    setNewTask(e.target.value);
  }

  function deleteTask(taskToDelete: TaskItem) {
    const tasksWithoutDeletedOne = tasks.filter(task => task !== taskToDelete);
    setTasks(tasksWithoutDeletedOne);
  }

  function toggleTaskDone(taskToToggle: TaskItem) {
    const updatedTasks = tasks.map(task => {
      if (task === taskToToggle) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function countCompletedTasks(tasks: TaskItem[]) {
    const completedTasks = tasks.filter(task => task.done === true);
    return completedTasks.length;
  }

  function pressEnterAddTask(e: React.KeyboardEvent) {
    if(e.key === 'Enter') {
      handleCreateNewTask();
    }
  }

  const completedTaskCount = countCompletedTasks(tasks);

  return (
    <div className={styles.page && styles.lightmode}>
      <Header />
      <div className={styles.container}>
        <div className={styles.inputSection}>
          <Input
            onChange={handleNewTaskChange}
            value={newTask}
            pressEnter={pressEnterAddTask}
          />
          <BttnCreate
            onClick={handleCreateNewTask}
          />
        </div>
        <main className={styles.main}>
          <div className={styles.mainTop}>
            <div className={styles.created}>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.done}>
              <p>Concluídas</p>
              <span>{completedTaskCount}</span>
            </div>
          </div>
          <div className={tasks.length == 0 ? styles.hide : styles.tasks}>
            {
              tasks.map(task  => {
                return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onToggle={toggleTaskDone}
                />
                )
              })
            }
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
