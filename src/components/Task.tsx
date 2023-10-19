import { BttnDelete } from "./BttnDelete";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

interface TaskItem {
  id: number
  text: string;
  done: boolean;
}

interface Props {
  task: TaskItem;
  onDeleteTask: (taskToDelete: TaskItem) => void;
  onToggle: (taskToToggle: TaskItem) => void;
}

export function Task({ task, onDeleteTask, onToggle }: Props) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleOnToggle() {
    onToggle(task);
  }
  
  return (
    <div className={styles.div}>
      <Checkbox onClick={handleOnToggle}/>
      <p className={task.done ? styles.done : ""}>{task.text}</p>
      <BttnDelete
        onClick={handleDeleteTask}
      />
    </div>
  )
}