<template>
  <div id="app">
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import ToDoList from './components/ToDolist';

export default {
  name: 'App',
  components: {
    ToDoList,
  },
};
</script>

<style>
#app {
  padding-bottom: 32px;
}
</style>
