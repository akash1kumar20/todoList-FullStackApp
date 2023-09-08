import { useRouter } from "next/router";

const Active = () => {
  const router = useRouter();
  return (
    <div className="displayDetails">
      <h2>Active Task</h2>
      <h5 onClick={() => router.push("/")}>Back</h5>
    </div>
  );
};

export default Active;
