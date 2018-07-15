<template>
  <div id="app">
    <Validation/>
  </div>
</template>

<script>
import Validation from './components/Validation';

export default {
  name: 'App',
  components: {
    Validation,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.google.com/specimen/Roboto');
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 456px;
  margin: 0 auto;
}
</style>
