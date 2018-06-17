<template>
  <div id="app">
    <div id="navbar">
      <div id="app-logo">
        <img src="./assets/image/logo.svg"/>
      </div>
      <div id="search-bar">
        <div id="search-container">
          <i id="search-icon" class="fas fa-search fa-lg"></i>
          <input id="search-input" type="text" placeholder="Explore your own activities"/>
        </div>
      </div>
    </div>
    <div id="page-content">
      <div id="left-content">
        <filter-bar></filter-bar>
      </div>
      <div id="right-content">
        <filter-content></filter-content>
      </div>
    </div>
    <!-- <page></page> -->
  </div>
</template>

<script>
import FilterBar from './components/filterBar';
import FilterContent from './components/filterContent';

export default {
  name: 'App',
  components: {
    FilterBar,
    FilterContent,
  },
};
</script>

<style lang="scss" scoped>
@import './assets/style/variables';

$navbar-background: $color-dark-purple;

#navbar{
  width: 100%;
  height: 92px;
  background-color: $navbar-background;

  display: flex;

  #app-logo {
    flex: 0 0 340px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #search-bar {
    flex: 1;
    color: $color-white;
    display: flex;
    align-items: center;
    #search-container {
      border-bottom: 2px solid $color-white;
      padding: 5px;
      margin: 0 40px;

      #search-icon {
        margin: 0 5px;
      }
      #search-input {
        @include font-title-sm();
        background: $navbar-background;
        border: 0;
        color: $color-white;
        width: 350px;
        &:focus {
          outline: 0;
        }
        &::placeholder {
          font-style: italic;
          color: $color-white;
          opacity: 0.5;
        }
      }
    }
  }
}

#page-content {
  display: flex;

  #left-content {
    flex: 0 0 340px;
    display: flex;
    justify-content: flex-end;
    padding: 24px 0;
  }
  #right-content {
    flex: 1;
    padding: 24px 40px;
  }
}

</style>
