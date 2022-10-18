//Student: Hoda Masteri
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateTodo({ user, todoitems, dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateCreated, setDateCreated] = useState(Date(Date.now()).toString());
  const [complete, setStatus] = useState(false);
  const [dateCompleted, setDate] = useState("");

  function handleStatus(evt) {
    setStatus(!complete);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_TODO",
          title,
          description,
          author: user,
          dateCreated,
          complete,
          dateCompleted,
          id: uuidv4(),
        });
      }}
    >
      <div>
        <br></br>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input type="submit" value="Create" disabled={title.length === 0} />
    </form>
  );
}
