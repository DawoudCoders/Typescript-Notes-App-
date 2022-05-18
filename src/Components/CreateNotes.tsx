import React, { useState } from "react";
import Note from "../models/note.model";

type Props = {
  notes: Note[];
  //taken from intellesense when hovering over setNotes
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

export default function CreateNotes({ notes, setNotes }: Props) {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const noteTextRef = React.useRef<HTMLInputElement | null>(null);
  const [err, setError] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //the ? means its optional since it can be null
    if (titleRef.current?.value === "" || noteTextRef.current?.value === "") {
      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        //typescript has inferred that the type is null, so we explicitly say what type the title should be
        title: (titleRef.current as HTMLInputElement).value,
        text: (noteTextRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (noteTextRef.current as HTMLInputElement).value = "";
  };

  return (
    <div className="createNote">
      <form onSubmit={(e) => handleSubmit(e)}>
        <p className="createNoteP">Title</p>
        <input placeholder="Title" ref={titleRef} />
        <p className="createNoteP">Text</p>
        <input placeholder="Note" ref={noteTextRef} />
        <button type="submit">Submit</button>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
}
