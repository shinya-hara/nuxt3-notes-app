<template>
  <div class="container">
    <div class="cards">
      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @update="updateContent(note.id, $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import NoteCard from '@/components/NoteCard.vue'
import { Note } from '@/domains/note'

const notes: Ref<Note[]> = ref([])
notes.value.push(new Note(1, 'this is first note content', new Date().toISOString()))

const updateContent = (id: Note['id'], content: Note['content']) => {
  const targetId = notes.value.findIndex((note) => note.id === id)
  const newNote = new Note(id, content)
  notes.value.splice(targetId, 1, newNote)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  margin: 30px auto;
}

.cards {
  > *:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
