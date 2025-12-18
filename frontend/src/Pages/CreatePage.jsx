import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Navbar from "../components/Navbar";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handling form submission logic here

    if (title && content) {
      await axios.post("https://to-do-j69k.onrender.com", { title, content });
      toast.success("Note created successfully!");
      navigate("/");
      // Resetting form fields
      setTitle("");
      setContent("");
    } else {
      toast.error("Please fill in all fields");
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-2xl mx-auto py-8 px-4">
         {/* Back-link to home page */}
        <Link
          to={"/"}
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to Notes
        </Link>

        {/* Note creation form */}
        <div className="border border-gray-300 rounded p-6">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Create New Note
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-black">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter note title"
                className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2 text-black">
                Content
              </label>
              <textarea
                placeholder="Enter note content"
                className="w-full border border-gray-300 rounded px-3 py-2 h-32 text-black bg-white"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Create Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
