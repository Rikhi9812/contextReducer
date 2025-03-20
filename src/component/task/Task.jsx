import { useContext, useState } from "react";
import { TasksContext } from "../../context/Taskcontext";
import { LanguageContext } from "../../context/LanguageContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useContext(TasksContext);
  const language = useContext(LanguageContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>{language === "English" ? "Save" : "保存"}</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>{language === "English" ? "Edit" : "編集"}</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        {language === "English" ? "Delete" : "削除"}
      </button>
    </label>
  );
}
