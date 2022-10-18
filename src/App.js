//Student: Hoda Masteri
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import UserBar from "./user/UserBar";
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from "./reducer";

function App() {
  const initialTodos = [
    {
      title: "Todo# 1",
      description: " First Description",
      author: "Hoda",
      dateCreated: Date(Date.now()).toString(),
      complete: false,
      dateCompleted: "",
      id: uuidv4(),
    },
    {
      title: "Todo# 2",
      description: " Second Description",
      author: "Hoda",
      dateCreated: Date(Date.now()).toString(),
      complete: false,
      dateCompleted: "",
      id: uuidv4(),
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todoitems: initialTodos,
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <TodoList todoitems={state.todoitems} dispatch={dispatch} />
      {state.user && (
        <CreateTodo
          user={state.user}
          todoitems={state.todoitems}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default App;
