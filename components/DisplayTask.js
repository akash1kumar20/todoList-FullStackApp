import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DeleteTask from "./DeleteTask";
const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/request", {
      cache: "no-store",
      //to make sure that we always get the updated data
    });
    if (!res.ok) {
      throw new Error("Failed to get the data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const DisplayTask = async () => {
  const { todos } = await getData();

  return (
    <div className="displayDetails">
      {todos.map((data) => (
        <p>
          <span className="listHeading ">
            {!data.completed && (
              <FontAwesomeIcon icon={faSquare} className="notCompleted" />
            )}
            {data.completed && (
              <FontAwesomeIcon icon={faSquareCheck} className="completed" />
            )}
          </span>
          <span className="listHeadingTask ">{data.task}</span>
          <span className="listHeading ">
            <Link href={`/update/${data._id}`}>
              <FontAwesomeIcon icon={faPen} className="edit" />
            </Link>
            {/* we can useRouter inside the client site only that's why we're using Link here */}
            <DeleteTask id={data._id} />
          </span>
        </p>
      ))}
    </div>
  );
};

export default DisplayTask;
