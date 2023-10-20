import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  pressEnter: (e: React.KeyboardEvent) => void;
}

export function Input({ onChange, value, pressEnter }: InputProps) {

  return (
    <input
      className={styles.input && styles.lightmode}
      type="text"
      onChange={onChange}
      placeholder="Adicione uma nova tarefa"
      value={value}
      onKeyDown={pressEnter}
    />
  )
}