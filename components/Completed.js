import { useRouter } from "next/router";

const Completed = () => {
  const router = useRouter();
  return (
    <div className="displayDetails">
      <h2>Completed Task</h2>
      <h5 onClick={() => router.push("/")}>Back</h5>
    </div>
  );
};

export default Completed;
