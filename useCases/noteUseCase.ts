import { Ref } from 'vue'
import { NoteRepository } from '@/repositories/noteRepository'
import { Note } from '@/domains/note'

export const useNoteUseCase = (repository: NoteRepository) => {
  const notes: Ref<Note[]> = ref([])

  notes.value = repository.getAll()

  // Noteが1件もない場合は、サンプルを1件追加
  if (!notes.value.length)
    notes.value.push(
      new Note(
        1,
        '### Hello!\n\nThis is a note app.\n\nSupports **Markdown** formatting.\n\nYou can do...\n- Create\n- Read\n- Update\n- Delete\n\n*Click to edit the note.*',
        new Date().toISOString(),
      ),
    )

  const updateNote = (id: Note['id'], content: Note['content']) => {
    const targetId = notes.value.findIndex((note) => note.id === id)
    const newNote = new Note(id, content)
    notes.value.splice(targetId, 1, newNote)
  }

  const addNote = () => {
    notes.value.unshift(new Note((notes.value[0]?.id || 0) + 1, ''))
  }

  const deleteNote = (note: Note) => {
    const index = notes.value.findIndex((_note) => _note.id === note.id)
    notes.value.splice(index, 1)
  }

  watch(
    notes,
    (notes) => {
      repository.save(notes)
    },
    { deep: true },
  )

  return {
    notes,
    updateNote,
    addNote,
    deleteNote,
  }
}
