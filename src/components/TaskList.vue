<template>
  <div class="space-y-4">
    <div v-if="tasks.length === 0" class="text-center text-gray-500 py-8">
      Nessun task presente. Aggiungine uno!
    </div>
    <TransitionGroup v-else name="task-list" tag="ul" class="divide-y divide-gray-200">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </TransitionGroup>
    <div class="text-sm text-gray-500 mt-4">
      Task totali: {{ tasks.length }} / 500
    </div>
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue';
import { useTasks } from '../composables/useTasks.js';

const { tasks, toggleTask, deleteTask } = useTasks();
</script>