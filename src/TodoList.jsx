import { MdCheck, MdDeleteForever } from "react-icons/md";
import styles from "./Todo.module.css";

export const TodoList = ({
  data,
  onHandleDeleteButton,
  onHandleCheckedTodo,
  checked,
}) => {
  const checkedoption = checked ? styles.completed : styles["not-completed"];
  return (
    <li className={styles["todo-item"]}>
      <span className={checkedoption}>{data}</span>
      <div className={styles["controls"]}>
        <button
          className={styles["check-btn"]}
          onClick={() => onHandleCheckedTodo(data)}
        >
          <MdCheck />
        </button>

        <button
          className={styles["delete-btn"]}
          onClick={() => onHandleDeleteButton(data)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};
