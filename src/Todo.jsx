import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { getTodoLocalStroage, setTodoLocalStroage } from "./TodoLocalStorage";
export const Todo = () => {
  // gettinG data from localstorage and after getting refreshment no data will be deleted.

  const [task, setTask] = useState(() => getTodoLocalStroage());
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // to check the content (inputfield) is empty or not
    if (!content) return;
    // console.log(!content);
    // checking the data is already existing or not
    // if (task.includes(inputValue)) return;\\\==>

    const ifTodocontentMatched = task.find(
      (curelement) => curelement.content === content,
      //Find method uses for the object property it will find only one element and then execution terminates.
      // curelement.task === content;
      //changes done here
      // console.log(curelement.task === content);
      // console.log(task);
    );
    if (ifTodocontentMatched) return;
    // console.log(ifTodocontentMatched);

    setTask((prevTask) => [
      ...prevTask,
      { id, content, checked },

      // if both value and key are the same then we can write at once only like { id: id, content: content, checked: checked },
    ]); //...prevTask know as spread operator and it contains previous value while Current value contained by inputValue and
    // if input value matches then input box clear and doesn't add into components array;

    // ===========>
    console.log(inputValue);
    // console.log(...prevtTask);
  };

  // Set data to localstorage
  setTodoLocalStroage(task);
  // localStorage.setItem(todokey,JSON.stringify(task));

  //  date and time area

  // Todo Delete functionality
  const handleDeleteButton = (curelem) => {
    console.log(task);
    console.log(curelem);

    // filter method return only that part where data value doesn't match
    const updatedtask = task.filter(
      (taskvalue) => curelem != taskvalue.content,
    );
    setTask(updatedtask);
  };

  // ClearAll functionality
  const handleClearAllButton = () => {
    console.log(task);
    // const clear = task.filter((clearvalue) => clearelem != clearvalue);

    setTask([]);
  };

  // to check the handle check todo functionality
  const handlecheckedtodo = (contents) => {
    const taskupdated = task.map((curtask) => {
      if (curtask.content == contents) {
        return { ...curtask, checked: !curtask.checked };
      } else {
        return curtask;
      }
    });
    setTask(taskupdated);
  };

  return (
    <>
      <section className={styles["Todo-List"]}>
        <header>
          <h1>Todo-List App</h1>
          {/* result of date and time */}
          <TodoDateTime />
        </header>
        {/* form area */}
        <TodoForm onAddTodo={handleFormSubmit} />
        {/* form area end */}
        <section className="unOrdList">
          {task.map((curelement) => {
            return (
              // list area
              <TodoList
                key={curelement.id}
                data={curelement.content}
                checked={curelement.checked}
                onHandleDeleteButton={handleDeleteButton}
                onHandleCheckedTodo={handlecheckedtodo}
              />
            );
            // TodoList area
          })}
        </section>
        <section className={styles["clear-btn"]} onClick={handleClearAllButton}>
          ClearAll
        </section>
      </section>
    </>
  );
};
