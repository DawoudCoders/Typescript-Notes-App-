import React, { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import Note from "./models/note.model";
import NotesList from "./Components/NotesList";
import CreateNotes from "./Components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with teams.",
      date: new Date().toString(),
    },
  ]);

  return (
    <div className="App">
      <Header />
      <CreateNotes notes={notes} setNotes={setNotes}/>
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
