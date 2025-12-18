import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = (await Note.find());
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateNote(req, res){
    try{
        await Note.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: "Note updated successfully"});
    } catch(error){
        res.status(500).json({ error: error.message});
    }
}

export async function deleteNote(req, res){
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Note deleted successfully"});
    } catch(error){
        res.status(500).json({ error: error.message});
    }
}