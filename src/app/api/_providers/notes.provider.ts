import { Note } from '@/types/note.type';
import { JSONFilePreset } from 'lowdb/node';

export const NOTES_DB = 'notes.json';

export async function getNotes() {
  const db = await JSONFilePreset(NOTES_DB, { notes: [] });
  return await db.read();
}

export async function createNote(note: Note) {
  const db = await JSONFilePreset(NOTES_DB, { notes: [] });
  // @ts-ignore
  db.notes.push(note);
  return await db.write();
}
