import { useState } from "react";
import todoLogo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a New Task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  );
}
