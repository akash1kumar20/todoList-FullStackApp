"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Notification from "./Notification";
import { useRouter } from "next/navigation";

const DeleteTask = ({ id }) => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const removeTask = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/request?id=${id}`, {
        method: "DELETE",
      });
      console.log(res);
      if (res.ok) {
        setMessage("Task Deleted");
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (message) {
    setInterval(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <>
      {message && <Notification message={message} />}
      <FontAwesomeIcon
        icon={faTrashCan}
        className="delete"
        onClick={removeTask}
      />
    </>
  );
};

export default DeleteTask;
