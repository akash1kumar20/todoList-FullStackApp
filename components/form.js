import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
const Form = () => {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const taskDetailsHandler = (event) => {
    event.preventDefault();
    setData(event.target.toDo.value);
  };
  const clickStatus = () => {
    setClick((prevSate) => !prevSate);
  };
  return (
    <>
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
          <p>
            <span className="listHeading ">
              {!click && (
                <FontAwesomeIcon
                  icon={faSquare}
                  onClick={clickStatus}
                  className="notCompleted"
                />
              )}
              {click && (
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  onClick={clickStatus}
                  className="completed"
                />
              )}
            </span>
            <span className="listHeadingTask ">{data}</span>
            <span className="listHeading ">
              <FontAwesomeIcon icon={faPen} className="edit" />
              <FontAwesomeIcon icon={faTrashCan} className="delete" />
            </span>
          </p>
        )}
      </div>
    </>
  );
};
export default Form;
