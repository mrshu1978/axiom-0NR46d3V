<template>
  <li class="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div class="flex items-center space-x-4">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle', task.id)"
        class="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
      />
      <span
        :class="{
          'line-through text-gray-400': task.completed,
          'text-gray-800': !task.completed
        }"
        class="text-lg break-words max-w-md"
      >
        {{ task.text }}
      </span>
    </div>
    <button
      @click="$emit('delete', task.id)"
      class="px-3 py-1 bg-red-100 text-red-700 font-medium rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
    >
      Elimina
    </button>
  </li>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
});

defineEmits(['toggle', 'delete']);
</script>