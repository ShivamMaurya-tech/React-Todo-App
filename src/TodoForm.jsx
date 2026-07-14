import styles from "./Todo.module.css";
import { useState } from "react";
export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    content: "",
    checked: false,
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();

    onAddTodo(inputValue);
    setInputValue({
      id: "",
      content: "",
      checked: false,
    }); //changes done here
  };

  const handleInputButton = (value) => {
    setInputValue({ id: value, content: value, checked: false }); //changes also done here.
  };
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className={styles["todo-input"]}
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => {
              handleInputButton(event.target.value);
            }}
          />
        </div>
        <div>
          <button className={styles["todo-btn"]}>Add Task</button>
        </div>
      </form>
    </section>
  );
};
