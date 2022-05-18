import Note from "../models/note.model";

type Props = {
  note: Note;
  handleDelete: (id: string) => void;
};

export default function NoteCard({ note, handleDelete }: Props) {
  return (
    <div className="card" key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <p className="date">{note.date}</p>
      <button onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
  );
}
