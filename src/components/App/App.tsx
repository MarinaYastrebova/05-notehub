import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { type useDebounce } from "use-debounce";
import { fetchNotes, createNote, deleteNote } from "../../services/noteService";
import { type CreateNoteData } from "../../services/noteService";
import NoteList from "../NoteList/NoteList";
import SearchBox from "../SearchBox/SearchBox";
import Pagination from "../Pagination/Pagination";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* <SearchBox />
        <Pagination /> */}
        <button></button>
      </header>
    </div>
  );
};

export default App;
