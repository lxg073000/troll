import React, { createContext, useContext, useReducer } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ reducer, initialState, children }) => {
  return (
    <TaskContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskValue = () => useContext(TaskContext);
