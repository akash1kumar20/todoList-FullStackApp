"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
const UpdateTask = ({ id, task, completed }) => {
  const router = useRouter();
  const [newTask, setTask] = useState(task);
  const [newCompleted, setNewCompleted] = useState(completed);
  const updateTaskHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/request/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTask, newCompleted }),
      });
      if (res.ok) {
        toast.warning("Task Updated", {
          position: "top-right",
          theme: "colored",
          autoClose: 2000,
        });
        router.refresh();
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="updateDetails">
      <form onSubmit={updateTaskHandler}>
        <input
          type="text"
          value={newTask}
          required
          className="inputAreaUpdate"
          onChange={(event) => (
            setTask(event.target.value), setNewCompleted(false)
          )}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTask;
