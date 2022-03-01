<template>
  <q-card>
    <q-bar class="bg-purple-1">
      <div>{{ note.updatedAt }}</div>
      <q-space />
      <q-btn dense flat icon="delete" color="negative">
        <q-tooltip>Delete</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div v-if="preview" @click="toggleMode">{{ note.content }}</div>
      <div v-else>
        <q-input v-model="editContent" v-click-outside="updateContent" filled autogrow />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Note } from '@/domains/note'

type Props = {
  note: Note
}
type Emits = {
  (e: 'update', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const preview = ref(true)
const editContent = ref('')

const toggleMode = () => {
  editContent.value = props.note.content
  preview.value = !preview.value
}

const updateContent = () => {
  emit('update', editContent.value)
  toggleMode()
}
</script>
