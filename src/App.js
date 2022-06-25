import './App.css';
import React, {useState} from "react";
import { TodoList } from './todo-list/TodoList';
import { BrowserRouter } from 'react-router-dom';

export const taskList = React.createContext()
function App() {
  const [taskSelect, updateTask] =useState([])
  
  return (
    <taskList.Provider value={{
      taskSelect,
      updateTask
  }}>
        <div className="App">
          <BrowserRouter>
            <TodoList />
          </BrowserRouter>
        </div>
      </taskList.Provider>
  );
}

export default App;
