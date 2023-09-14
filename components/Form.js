"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const taskDetailsHandler = async (event) => {
    event.preventDefault();
    if (!event.target.toDo.value) {
      alert("Task is required");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/request", {
        method: "POST",
        body: JSON.stringify({
          task: event.target.toDo.value,
          completed: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        router.refresh();
        //to refresh the page
      }
      setMessage("added");
    } catch (error) {}

    event.target.toDo.value = "";
  };

  if (message) {
    setInterval(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <>
      {message && <Notification message={message} />}
      <div className="enterDetails">
        <form onSubmit={taskDetailsHandler}>
          <input
            type="text"
            placeholder="Type Here....."
            className="inputArea"
            name="toDo"
          />
          <button type="submit" className="add">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <span className="addTask">Add Task</span>
        </form>
      </div>
    </>
  );
};
export default Form;
