<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2 mb-6">
    <input
      v-model="taskText"
      type="text"
      placeholder="Inserisci un nuovo task..."
      class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      maxlength="500"
    />
    <button
      type="submit"
      class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
    >
      Aggiungi
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTasks } from '../composables/useTasks.js';

const { addTask } = useTasks();
const taskText = ref('');

function handleSubmit() {
  if (addTask(taskText.value)) {
    taskText.value = '';
  }
}
</script>