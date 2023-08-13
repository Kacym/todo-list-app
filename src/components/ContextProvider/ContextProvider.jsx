import React, { createContext, useEffect, useState } from "react";

export const ContextProv = createContext();

const ContextProvider = ({ children }) => {
    const [todo, setTodo] = useState([]);
    const [isThemeChanged, setIsThemeChanged] = useState(false);

    useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodo(JSON.parse(storedTodos));
      }
    }, []);

    const changedThemeHandler = () => {
      setIsThemeChanged((prevState) => !prevState);
    }
  
    const deleteTodoHandler = (id) => {
        const filteredArray = todo.filter((item) => item.id !== id);
        setTodo(filteredArray)
      }

  return (
  <ContextProv.Provider value={{todo, setTodo, deleteTodoHandler, isThemeChanged, setIsThemeChanged, changedThemeHandler}}>
    {children}
  </ContextProv.Provider>
  )
};

export default ContextProvider;
