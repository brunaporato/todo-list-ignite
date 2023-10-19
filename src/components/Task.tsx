import { useState } from "react";
import { BttnDelete } from "./BttnDelete";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

interface Props {
  text: string;
}

export function Task({ text }: Props) {
  const [done, setDone] = useState(false);

  function handleTaskDone() {
    setDone(!done);
  }
  
  return (
    <div className={styles.div}>
      <Checkbox onClick={handleTaskDone}/>
      <p className={done ? styles.done : ""}>{text}</p>
      <BttnDelete />
    </div>
  )
}