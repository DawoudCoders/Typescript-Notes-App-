import Note from "../models/note.model";
import NoteCard from "../Components/NotesCard";
import { setSyntheticLeadingComments } from "typescript";

type Props = {
  notes: Note[];
  //taken from intellesense when hovering over setNotes
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

export default function NotesList({ notes, setNotes }: Props) {
  const handleDelete = (id: string) => {
    console.log("The note to be deleted", id);
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <NoteCard key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    <div className="App-header ">
      <h2>Notes</h2>
      <div>{renderNotes()}</div>
    </div>
  );
}
