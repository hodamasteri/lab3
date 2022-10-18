//Student: Hoda Masteri
import TodoItem from "./TodoItem";
export default function TodoList({ todoitems = [], dispatch }) {
  return (
    <div>
      {todoitems.map((item, i) => {
        return (
          <div>
            <TodoItem {...item} key={item.id} />
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => {
                dispatch({ type: "TOGGLE_TODO", id: item.id });
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
