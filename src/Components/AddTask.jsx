import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ErrMsg from "./ErrMsg";
import { useDispatch } from "react-redux";
import { addToList } from "../redux/todoslice";

const AddTask = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const dispatch = useDispatch();

  const [err, setErr] = useState(false);

  function handleInput(e) {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitTask(e) {
    if (e.key === "Enter") {
      if (note.title.length > 0 || note.content.length > 0) {
        dispatch(addToList(note));
        setNote({
          title: "",
          content: "",
        });
      } else {
        setErr(true);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (note.title.length > 0 || note.content.length > 0) {
      dispatch(addToList(note));
      setNote({
        title: "",
        content: "",
      });
    } else {
      setErr(true);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      err && setErr(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [err]);

  return (
    <div>
      <div className="flex justify-center">
        <div className=" max-w-[90%] w-[600px] my-8 text-white relative border border-gray-500 shadow-xl rounded-md pb-5 p-2">
          <div>
            <input
              onKeyPress={submitTask}
              onChange={handleInput}
              value={note.title}
              name="title"
              type="text"
              className="p-2 bg-transparent outline-none w-full"
              placeholder="Title"
            />
            <textarea
              onKeyPress={submitTask}
              onChange={handleInput}
              value={note.content}
              name="content"
              type="text"
              className="p-2 bg-transparent outline-none w-full overflow-hidden"
              placeholder="Take a note..."
            />
          </div>
          <button onClick={handleSubmit} className=" absolute bottom-2 right-6">
            <Add />
          </button>
        </div>
      </div>
      {err && <ErrMsg msg={"Enter valid task"} />}
    </div>
  );
};

export default AddTask;
