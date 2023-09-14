"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Notification from "./Notification";
const Form = () => {
  const [click, setClick] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const taskDetailsHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/request", {
        method: "POST",
        body: JSON.stringify({ task: event.target.toDo.value }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setMessage("added");
    } catch (error) {}

    event.target.toDo.value = "";
  };
  const clickStatus = () => {
    setClick((prevSate) => !prevSate);
    if (click) {
      setMessage("pending");
    } else {
      setMessage("completed");
    }
  };
  const deleteHandler = () => {
    setMessage("delete");
  };
  if (message) {
    setInterval(() => {
      setMessage("");
    }, 3000);
  }
  const data = [1, 2, 4];
  return (
    <>
      {message && <Notification message={message} />}
      <div className="enterDetails">
        <form onSubmit={taskDetailsHandler}>
          <input
            type="text"
            placeholder="Type Here....."
            required
            className="inputArea"
            name="toDo"
          />
          <button type="submit" className="add">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <span className="addTask">Add Task</span>
        </form>
      </div>
      <div className="displayDetails">
        {data.length === 0 ? (
          <p>No Task Added</p>
        ) : (
          <>
            {/* {DummyData.map((data) => ( */}
            <p>
              <span className="listHeading ">
                {!data.completed && (
                  <FontAwesomeIcon
                    icon={faSquare}
                    onClick={clickStatus}
                    className="notCompleted"
                  />
                )}
                {data.completed && (
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    onClick={clickStatus}
                    className="completed"
                  />
                )}
              </span>
              <span className="listHeadingTask ">Hi</span>
              <span className="listHeading ">
                <FontAwesomeIcon
                  icon={faPen}
                  className="edit"
                  onClick={() => router.push("/update")}
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="delete"
                  onClick={deleteHandler}
                />
              </span>
            </p>
            {/* ))} */}
          </>
        )}
      </div>
    </>
  );
};
export default Form;
