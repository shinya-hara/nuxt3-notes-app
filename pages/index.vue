<template>
  <q-page class="container">
    <div v-if="notes.length" class="cards">
      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @update="updateContent(note.id, $event)"
        @delete="deleteNote"
      />
    </div>
    <div v-else>
      <q-banner class="bg-grey-3">
        There are no notes. Let's add the first note!
        <template #action>
          <q-btn color="indigo" @click="addNew">Add new note</q-btn>
        </template>
      </q-banner>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="indigo" @click="addNew">
        <q-tooltip>Add new note</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
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

const addNew = () => {
  notes.value.unshift(new Note((notes.value[0]?.id || 0) + 1, ''))
}

const deleteNote = (note: Note) => {
  const index = notes.value.findIndex((_note) => _note.id === note.id)
  notes.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px 0;
}

.cards {
  > *:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
