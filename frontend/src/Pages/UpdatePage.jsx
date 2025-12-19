import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const UpdatePage = () => {
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`https://to-do-j69k.onrender.com/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Error fetching note data");
        navigate("/");
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await axios.delete(`https://to-do-j69k.onrender.com/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error deleting note");
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`https://to-do-j69k.onrender.com/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error updating note");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Notes
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete Note
          </button>
        </div>

        <div className="border border-gray-300 rounded p-6">
          <h2 className="text-2xl font-bold mb-6 text-black">Update Note</h2>

          <div className="mb-4">
            <label className="block font-semibold mb-2 text-black">Title</label>
            <input
              type="text"
              placeholder="Note Title"
              className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-white"
              value={note ? note.title : ""}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2 text-black">
              Content
            </label>
            <textarea
              placeholder="Write your note here..."
              className="w-full border border-gray-300 rounded px-3 py-2 h-32 text-black bg-white"
              value={note ? note.content : ""}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            />
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
