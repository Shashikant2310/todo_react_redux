import React from "react";
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteNote } from "../redux/todoslice";
const Task = ({ note, id }) => {
  const dispatch = useDispatch();
  return (
    <div className=" relative w-[90%] lg:w-[20%] md:w-[40%] border border-gray-500 rounded-md p-3 pb-6">
      <h2 className="text-xl mb-2">{note.title}</h2>
      <p className="text-xl">{note.content}</p>
      <button
        onClick={() => dispatch(deleteNote(id))}
        className=" absolute bottom-2 right-2 cursor-pointer"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Task;
