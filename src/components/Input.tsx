import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function Input({ onChange, value }: InputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={onChange}
      placeholder="Adicione uma nova tarefa"
      value={value}
    />
  )
}