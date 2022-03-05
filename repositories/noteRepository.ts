import { Note, NoteJson } from '@/domains/note'

const CACHE_KEY = 'nuxt3-notes-app:notes'

export class NoteRepository {
  public getAll(): Note[] {
    try {
      const notes: NoteJson[] = JSON.parse(localStorage.getItem(CACHE_KEY)) || []
      return notes.map((note) => {
        return new Note(note.id, note.content, note.updatedAt)
      })
    } catch {
      return []
    }
  }

  public save(notes: Note[]): void {
    localStorage.setItem(CACHE_KEY, JSON.stringify(notes.map((note) => note.toJSON())))
  }
}
