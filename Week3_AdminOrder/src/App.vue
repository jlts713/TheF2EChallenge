<template>
  <div id="app">
    <div id="navbar">
      <div id="logo">SHOPTIME</div>
      <div id="menu">
        <router-link to="/" class="menu-item">
          Home
        </router-link>
        <router-link to="/order" class="menu-item">
          Orders
        </router-link>
        <router-link to="/product" class="menu-item">
          Products
        </router-link>
      </div>
      <div id="login">ADMIN</div>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activePage: 'home',
    }
  },
  methods: {
    setActive(page){
      this.activePage = page;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

#app {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  #navbar {
    height: 70px;
    background: black;
    padding: 0px 42px;
    display: flex;
    align-items: center;
    #logo, #login {
      @include font-title-sm();
      flex: 0;
      color: $color-white;
    }
    #menu {
      @include font-16px();
      flex: 1;
      margin: 0 65px;
      
      display: flex;
      height: 100%;
      align-items: flex-start;
      .menu-item{
        text-decoration: none;
        color: $color-gray-4;
        height: calc(100% - 4px);
        padding: 0 15px;
        display: flex;
        align-items: center;
        &.router-link-exact-active {
          color: $color-white;
          border-bottom: 4px solid $color-white;
        }
      }
    }
  }

  #content {
    padding: 30px 42px;
  }
}
</style>
