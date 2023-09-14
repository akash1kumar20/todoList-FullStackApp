"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteTask = ({ id }) => {
  const router = useRouter();
  const removeTask = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/request?id=${id}`, {
        method: "DELETE",
      });
      console.log(res);
      if (res.ok) {
        toast.error("Task Deleted", {
          position: "top-right",
          theme: "dark",
          autoClose: 2000,
        });
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faTrashCan}
      className="delete"
      onClick={removeTask}
    />
  );
};

export default DeleteTask;
