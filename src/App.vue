<template>
  <div id="app">
    <gameplay />
  </div>
</template>

<script>
import gameplay from "@/views/gameplay.vue";

export default {
  components: { gameplay },
};
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: black;
  color: white;
  height: 100vh;
  width: 100vw;
}
</style>