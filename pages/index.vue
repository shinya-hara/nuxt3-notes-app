<template>
  <q-page class="container">
    <div v-if="notes.length" class="cards">
      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @update="updateNote(note.id, $event)"
        @delete="deleteNote"
      />
    </div>
    <div v-else>
      <q-banner class="bg-grey-3">
        There are no notes. Let's add the first note!
        <template #action>
          <q-btn color="secondary" @click="addNote">Add new note</q-btn>
        </template>
      </q-banner>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="secondary" @click="addNote">
        <q-tooltip>Add new note</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue'
import { NoteRepositoryImpl } from '@/repositories/noteRepositoryImpl'
import { useNoteUseCase } from '@/useCases/noteUseCase'

const { notes, updateNote, addNote, deleteNote } = useNoteUseCase(new NoteRepositoryImpl())
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
