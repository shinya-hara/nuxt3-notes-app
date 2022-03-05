import { Note } from '@/domains/note'

export interface NoteRepository {
  getAll: () => Note[]
  save: (notes: Note[]) => void
}
