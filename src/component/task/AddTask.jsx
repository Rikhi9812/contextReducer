import React, { useContext, useState } from "react";
import { Themecontext } from "../../context/Themecontext";
import { TasksContext } from "../../context/Taskcontext";
import { LanguageContext } from "../../context/LanguageContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const  {dispatch}  = useContext(TasksContext);
  const theme = useContext(Themecontext);
  const className = 'panel-' + theme;
  const language = useContext(LanguageContext);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={className}
        onClick={() => {
          setText("");
          dispatch({ type: "added" ,
            id: nextid++,
            text: text, 
          });
        }}
      >{language === "English" ? "Add Text" : "テキスト追加"}</button>
    </>
  );
};

export default AddTask;

let nextid = 3;