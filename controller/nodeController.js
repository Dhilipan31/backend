const mongoose = require('mongoose')
const Notes = require('../dbNotes')

//get notes list
const getNotes = async (req , res) => {
    try {
        const allNotes = await Notes.find({}).sort({ createdAt: -1});
        res.status(200).send(allNotes);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

//create notes 
const createNote = async (req, res) => {
    const dbNote = req.body;
    try {
        const newNote = await Notes.create(dbNote);
        res.status(201).send(newNote);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

//delete notes 
const deleteNote = async (req, res) => {
    const {id} = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('There is node with the id not found')
        }
        const deleteNote = await Notes.findOneAndDelete({_id: id});
        res.status(201).send(deleteNote);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
getNotes,
createNote,
deleteNote
};