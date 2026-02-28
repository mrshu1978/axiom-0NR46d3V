<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Start building your Vue 3 application here.
      <br>
      Edit <code>src/App.vue</code> to get started.
    </p>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.hello {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

code {
  background-color: #f4f4f4;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}
</style>