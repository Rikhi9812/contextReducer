import { useReducer, useState } from "react";
import "./App.css";
import { Themecontext } from "./context/Themecontext";
import Button from "./component/Button";
import { TasksContext } from "./context/Taskcontext.jsx";
import { taskReducer } from "./reducer/taskReducer";
import TaskList from "./component/task/TaskList";
import AddTask from "./component/task/AddTask";
import { LanguageContext } from "./context/LanguageContext.jsx";

function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("English");
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <LanguageContext value={language}>
      <Themecontext.Provider value={theme}>
        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {language === "English" ? "Change Theme" : "テーマ変更"}
        </Button>
        <Button
          onClick={() => {
            setLanguage(language === "English" ? "Japanese" : "English");
          }}
        >
          {language === "English" ? "Change language" : "言語変更"}
        </Button>
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <AddTask />
          <TaskList />
        </TasksContext.Provider>
      </Themecontext.Provider>
    </LanguageContext>
  );
}

export default App;

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
