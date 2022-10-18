//Student: Hoda Masteri
function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        title: action.title,
        description: action.description,
        author: action.author,
        dateCreated: action.dateCreated,
        complete: action.complete,
        dateCompleted: action.dateCompleted,
        id: action.id,
      };
      return [newTodo, ...state];

    case "TOGGLE_TODO":
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
          return {
            ...todoItem,
            complete: !todoItem.complete,
            dateCompleted:
              todoItem.dateCompleted === "" ? Date(Date.now()).toString() : "",
          };
        } else {
          return todoItem;
        }
      });

    case "DELETE_TODO":
      return state.filter((todoItem) => todoItem.id !== action.id);

    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todoitems: todoReducer(state.todoitems, action),
  };
}
