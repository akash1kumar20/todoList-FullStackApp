import Link from "next/link";
import Heading from "./Heading";
const Navbar = () => {
  return (
    <>
      <Heading />
      <p className="navbar">
        <Link href={"/"}>
          <span className="navbarHeading">All</span>
        </Link>
        <Link href={"/active"}>
          <span className="navbarHeading">Active</span>
        </Link>
        <Link href={"/completed"}>
          <span className="navbarHeading">Completed</span>
        </Link>
      </p>
    </>
  );
};

export default Navbar;
