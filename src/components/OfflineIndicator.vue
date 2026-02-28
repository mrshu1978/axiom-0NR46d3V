<template>
  <div v-if="!isOnline" class="fixed top-4 right-4 z-50 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg">
    Offline
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOnline = ref(navigator.onLine);

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine;
};

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus);
  window.removeEventListener('offline', updateOnlineStatus);
});
</script>