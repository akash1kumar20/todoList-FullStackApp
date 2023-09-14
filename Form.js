"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Form = () => {
  const router = useRouter();
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
        toast.success("Task Added", {
          position: "top-right",
          theme: "colored",
          autoClose: 2000,
        });
        router.refresh();
        //to refresh the page
      }
    } catch (error) {}

    event.target.toDo.value = "";
  };

  return (
    <>
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
