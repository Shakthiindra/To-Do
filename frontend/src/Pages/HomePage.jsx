import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from backend API
    const fetchNotes = async () => {
      try {
        const res = await axios.get("https://to-do-j69k.onrender.com/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-12 text-lg">
            No notes yet. Create your first one!
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
