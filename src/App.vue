<template>
  <div class="min-h-screen bg-blue-100 p-6 md:p-8">
    <OfflineIndicator />
    <div class="max-w-4xl mx-auto">
      <header class="mb-10 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Task Manager</h1>
        <p class="text-gray-600">Gestisci i tuoi task con validazione, notifiche e limite di 500 task.</p>
      </header>
      <main class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <TaskInput />
        <TaskList />
      </main>
      <footer class="mt-10 text-center text-gray-500 text-sm">
        <p>Un'app PWA per la gestione dei task. Crea, completa, elimina e ripristina con un click.</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import TaskInput from './components/TaskInput.vue';
import TaskList from './components/TaskList.vue';
import OfflineIndicator from './components/OfflineIndicator.vue';
</script>

<style scoped>
/* Stili specifici se necessari */
</style>