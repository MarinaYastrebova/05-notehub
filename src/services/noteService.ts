import axios from "axios";
import { type Note } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";
const token = import.meta.env.VITE_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
  data: Note[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    totalPage: number;
  };
}

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface CreateNoteData {
  title: string;
  content: string;
  tag: string;
}

export interface CreateNoteResponse {
  data: Note;
}
export interface DeleteNoteResponse {
  data: Note;
}

export const fetchNotes = async (
  params: FetchNotesParams = {}
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>(`${BASE_URL}/notes`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const createNote = async (
  noteData: CreateNoteData
): Promise<CreateNoteResponse> => {
  const response = await axios.post<CreateNoteResponse>(
    `${BASE_URL}/notes`,
    noteData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteNote = async (id: string): Promise<DeleteNoteResponse> => {
  const response = await axios.delete<DeleteNoteResponse>(
    `${BASE_URL}/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
