const Notification = ({ message }) => {
  if (message === "added") {
    return <p className="green">Task Added</p>;
  }
  if (message === "delete") {
    return <p className="red">Task Deleted</p>;
  }
  if (message === "update") {
    return <p className="green">Task Updated</p>;
  }
  if (message === "completed") {
    return <p className="green">Task Completed</p>;
  }
  if (message === "pending") {
    return <p className="red">Task Pending</p>;
  }
};

export default Notification;
