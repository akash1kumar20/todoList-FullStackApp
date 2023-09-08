import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <p className="navbar">
        <Link href="/">
          <span className="navbarHeadingAll">All</span>
        </Link>
        <Link href="/active">
          <span className="navbarHeading">Active</span>
        </Link>
        <Link href="/completed">
          <span className="navbarHeading">Completed</span>
        </Link>
      </p>
    </>
  );
};

export default Navbar;
