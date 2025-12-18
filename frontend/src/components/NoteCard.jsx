import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import axios from "axios";
import toast from "react-hot-toast";

const NoteCard = ({ note }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      window.location.reload();
      toast.success("Note deleted successfully!");
    } catch (error) {
      toast.error("Error deleting note");
    }
  };
  return (
    <Link
      to={`/update/${note._id}`}
      className="border border-gray-300 rounded p-4 bg-gray-50 block hover:bg-gray-100 no-underline text-black"
    >
      <h3 className="font-bold text-lg mb-2 text-black">{note.title}</h3>
      <p className="text-gray-800 mb-3 line-clamp-2">{note.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{formatDate(note.createdAt)}</span>
        <button
          onClick={(e) => handleDelete(e, note._id)}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          Delete
        </button>
      </div>
    </Link>
  );
};

export default NoteCard;
