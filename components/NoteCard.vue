<template>
  <q-card>
    <q-bar class="bg-grey-3">
      <div>
        <span class="text-caption">{{ note.formattedUpdatedAt }}</span>
      </div>
      <q-space />
      <q-btn dense flat icon="delete" color="red-5" @click="confirm">
        <q-tooltip>Delete</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section>
      <div v-if="preview" class="preview" @click="toggleMode">
        <div v-if="md" v-html="md"></div>
        <div v-else class="text-blue-grey text-italic">Click here to edit note.</div>
      </div>
      <div v-else class="editor">
        <q-input
          v-model="editContent"
          v-click-outside="updateContent"
          color="purple"
          filled
          autogrow
          autofocus
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import { useQuasar } from 'quasar'
import { Note } from '@/domains/note'

type Props = {
  note: Note
}
type Emits = {
  (e: 'update', value: string): void
  (e: 'delete', note: Note): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const preview = ref(true)
const editContent = ref('')
const md = computed(() => marked.parse(props.note.content))

const toggleMode = () => {
  editContent.value = props.note.content
  preview.value = !preview.value
}

const updateContent = () => {
  emit('update', editContent.value)
  toggleMode()
}

const $q = useQuasar()
const confirm = () => {
  $q.dialog({
    title: 'Aer you sure?',
    message: "You won't to be able to revert this!",
    ok: 'DELETE',
    cancel: true,
    persistent: true,
    focus: 'cancel',
    color: 'purple',
  })
    .onOk(() => {
      emit('delete', props.note)
    })
    .onCancel(() => {
      // noop
    })
}
</script>

<style lang="scss" scoped>
.editor ::v-deep textarea {
  font-family: Monaco, Courier, monospace;
}
</style>
