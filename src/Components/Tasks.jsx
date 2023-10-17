import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const Tasks = () => {
  const notes = useSelector((state) => state.todoReducer.todoList);
  console.log(notes);
  return (
    <>
      {notes.length > 0 ? (
        <div className=" max-w-full w-[90%] flex flex-wrap gap-y-8 gap-x-4 text-white mt-16 mx-auto">
          {notes.map((note, idx) => (
            <Task key={idx} id={idx} note={note} />
          ))}
        </div>
      ) : (
        <div className=" text-center text-white text-xl mt-[150px]">
          <p>No task to show...</p>
        </div>
      )}
    </>
  );
};

export default Tasks;
