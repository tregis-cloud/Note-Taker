//Dependences
const express = require("express");
const fs = require("fs");
const path = require("path");

//Setup Express APP
const app = express();
const PORT = 7500;

//Setup express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = [];

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(_dirname, "db.json"));
});

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes/:id", function (req, res) {
  let newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
  res.json(newNote);
});
//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("api/notes/:id", function () {
  let chosen = req.params.id;
  for (let i = 0; i < notes.length; i++) {
    if (chosen === notes[i]) {
      res.delete(notes[i]);
    }
  }
});
//Start server to begin listening
app.listen(PORT, function () {
  console.log("App is listening on PORT " + PORT);
});
