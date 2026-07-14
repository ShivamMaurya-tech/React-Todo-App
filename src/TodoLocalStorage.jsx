const todokey = "reacttodo";
export const getTodoLocalStroage = () => {
  console.log(localStorage.getItem(todokey));
  const rawtodo = localStorage.getItem(todokey);
  if (!rawtodo) return []; //if data doesn't exist then return null array[].
  // data got from localstroge is string then need to change in string.
  return JSON.parse(rawtodo);
};

// export const getTodoLocalStroage = () => {
//   const rawtodo = localStorage.getItem(todokey);

//   if (!rawtodo || rawtodo === "undefined") {
//     return [];
//   }

//   try {
//     return JSON.parse(rawtodo);
//   } catch (error) {
//     console.error("Invalid JSON in localStorage:", error);
//     return [];
//   }
// };

export const setTodoLocalStroage = (task) => {
  // functionality of adding data on LocalStorage
  if (!task) return;

  localStorage.setItem(todokey, JSON.stringify(task));
};
