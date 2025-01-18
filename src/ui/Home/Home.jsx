import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { useState } from "react";
import { addToDo, removeTodo, updateToDo } from "../../states/todoSlice";

export default function Home() {
  const todos = useSelector((state) => state.todo);
  const [todo, setTodo] = useState("");
  const [updatedTodo, setupdatedTodo] = useState({});

  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState({ status: false, id: 0 });

  function handleAddTodo(e) {
    e.preventDefault();
    dispatch(addToDo(todo));
  }

  function handleUpdateTodo(e) {
    e.preventDefault();
    setIsUpdate(false);
    dispatch(updateToDo(updatedTodo));
  }

  function handleRemoveTodo(e, id) {
    e.preventDefault();
    dispatch(removeTodo(id));
  }

  return (
    <div className="container">
      <h1>To Do List App</h1>
      <form>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <input type="submit" onClick={handleAddTodo} />
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td className="todo">
                {isUpdate.status & (isUpdate.id === todo.id) ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setupdatedTodo({
                        id: todo.id,
                        todo: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{todo.todo}</p>
                )}
                <div className="todo-button">
                  {isUpdate.status && isUpdate.id === todo.id && (
                    <button type="submit" onClick={handleUpdateTodo}>
                      ✅
                    </button>
                  )}
                  <button
                    onClick={() => setIsUpdate({ status: true, id: todo.id })}
                  >
                    🔧
                  </button>
                  <button onClick={(e) => handleRemoveTodo(e, todo.id)}>
                    ❌
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
