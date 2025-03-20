import { useContext } from "react";
import { TasksContext } from "../../context/Taskcontext.jsx";
import Task from "./Task.jsx";

export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
