import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-col flex-1 text-center items-center justify-center">
        <h1 className="m-10 text-7xl font-semibold">Justin Wu</h1>
        <h2 className="m-3 text-xl">Project Portfolio</h2>
        <Link to="/projects">
          <button className="m-10 bg-transparent hover:bg-white hover:text-black w-36 h-14 border border-white rounded-lg">
            See Projects
          </button>
        </Link>
      </main>
    </>
  );
}

export default Home;
