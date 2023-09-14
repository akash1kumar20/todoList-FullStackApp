import UpdateTask from "@/components/UpdateTask";
const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/request/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get the data");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const Update = async ({ params }) => {
  const { id } = params;
  //we create functionality in our backend to get the element by id
  const { todo } = await getTaskById(id);
  //because our beckend is returing todo
  const { task, completed } = todo;
  return <UpdateTask id={id} task={task} completed={completed} />;
};

export default Update;
