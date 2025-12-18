import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 p-4 mb-6 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">My Notes</h1>
        <Link to="/create">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Note
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
