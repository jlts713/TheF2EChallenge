<template>
  <div id="app">
    <div id="title-block">
       <div id="brand">CCCLOTHES</div>
       <div id="title">MEN'S TOPS</div>
    </div>

    <div id="border-decorate1" class="block-green-border"></div>
    <div id="border-decorate2" class="block-green-border"></div>
    <div id="border-decorate3" class="block-green-border"></div>
    <div id="border-decorate4" class="block-green-border"></div>
    <div id="border-decorate5" class="block-green-border"></div>
    <div id="border-decorate6" class="block-green-border"></div>
    <div id="border-decorate7" class="block-green-border"></div>
    <div id="fill-decorate2" class="block-green-fill"></div>
    <div id="fill-decorate3" class="block-green-fill"></div>
    <div id="fill-decorate6" class="block-green-fill"></div>
    <div id="fill-decorate7" class="block-green-fill"></div>
    <div id="image-block1" class="image"></div>
    <div id="image-block2" class="image"></div>
    <div id="image-block3" class="image"></div>
    <div id="image-block4" class="image"></div>
    <div id="image-block5" class="image"></div>
    <div id="image-block6" class="image"></div>
    <div id="image-block7" class="image"></div>
    <div id="title1" class="product-name" data-title="LINEN BLAZER">LINEN BLAZER</div>
    <div id="title2" class="product-name" data-title="FREELIFT">FREELIFT</div>
    <div id="title3" class="product-name" data-title="SUPER SKINNY">SUPER SKINNY</div>
    <div id="title4" class="product-name" data-title="DENIM">DENIM</div>
    <div id="title5" class="product-name" data-title="SWEATSHIRTS">SWEATSHIRTS</div>
    <div id="title6" class="product-name" data-title="VINTAGE DENIM">VINTAGE DENIM</div>
    <div id="title7" class="product-name" data-title="EDITION">EDITION</div>

  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.google.com/specimen/Roboto');
@import "assets/variables";
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 960px;
  height: 2000px;
  margin: 32px auto;

  display: grid;
  grid-template-columns: repeat(8, 120px);
  grid-template-rows: repeat(20, 100px);
}

#app {
  .block-green-border {
    order: 1;
    z-index: 1;
    box-sizing: border-box;
    border: 20px solid $color-green;
  }

  .block-green-fill {
    order: 2;
    background-color: $color-green;
  }

  .image {
    order: 3;
    z-index: 3;
    background-repeat: no-repeat;
  }

  .product-name {
    order: 5;
    z-index: 5;
    @include font-semi-title();
    position: relative;
    display: flex;
    &::before {
      content: attr(data-title);
      color: $color-grey;
      height: 20px;
      overflow: hidden;
      position: absolute;
      top: -13px;
    }
    &::after {
      content: attr(data-title);
      color: $color-light-grey;
      overflow: hidden;
      position: absolute;
      height: 14px;
      top: -22px;
    }
  }

  #title-block {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    #brand {
      @include font-logo();
      background-color: $color-black;
      color: $color-white;
      padding: 2px 10px;
    }
    #title {
      @include font-title();
    }
  }

  #image-block1 {
    grid-column: 1 / 5;
    grid-row: 3 / 7;
    background-image: url('./assets/img/image1.jpg');
    background-size: 100%, 400px;
    background-position-y: -150px;
  }

   #image-block2 {
    grid-column: 6 / 8;
    grid-row: 4 / 6;
    background-image: url('./assets/img/image2.jpg');
    background-size: 100%, 100%;
    background-position-y: -100px;
  }

  #image-block3 {
    grid-column: 1 / 5;
    grid-row: 9 / span 2;
    background-image: url('./assets/img/image3.jpg');
    background-size: 100%, 100%;
    background-position-y: -60px;
  }

  #image-block4 {
    grid-column: span 2 / -1;
    grid-row: 9 / span 4;
    background-image: url('./assets/img/image4.jpg');
    background-size: cover;
    background-position-x: -30px;
  }

  #image-block5 {
    grid-column: 3 / span 2;
    grid-row: span 2 / -7;
    background-image: url('./assets/img/image5.jpg');
    background-size: cover;
    background-position-x: -30px;
    transform: rotateY(180deg);
  }

  #image-block6 {
    grid-column: span 4 / -1;
    grid-row: span 4 / -3;
    background-image: url('./assets/img/image6.jpg');
    background-size: cover;
    background-position-y: -160px;
  }

  #image-block7 {
    grid-column: 1 / span 2;
    grid-row: span 4 / -1;
    background-image: url('./assets/img/image7.jpg');
    background-size: cover;
  }

  #border-decorate1 {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
    transform: translate(60px, 50px);
  }
  #border-decorate2 {
    grid-column: span 2 / -1;
    grid-row: 3 / span 2;
  }
  #border-decorate3 {
    grid-column: 3 / span 2;
    grid-row: 9 / span 2;
    transform: translate(60px, 50px);
  }
  #border-decorate4 {
    grid-column: span 2 / -1;
    grid-row: 8 / span 2;
    transform: translate(-60px, 0);
  }
  #border-decorate5 {
    grid-column: 2 / span 2;
    grid-row: -8 / span 1;
    transform: translate(0, 50px);
  }
  #border-decorate6 {
    grid-column: span 4 / -1;
    grid-row: span 1 / -2;
    transform: translate(0, -50px);
  }
  #border-decorate7 {
    grid-column: 1 / span 2;
    grid-row: span 4 / -1;
    transform: translate(60px, -50px);
  }

  #fill-decorate2 {
    grid-column: span 2 / -1;
    grid-row: 3 / span 2;
    transform: translate(-60px, 50px);
  }
  #fill-decorate3 {
    grid-column: 1 / span 2;
    grid-row: 9 / span 1;
    transform: translate(0, -50px);
  }
  #fill-decorate6 {
    grid-column: 4 / 5;
    grid-row: span 2 / -3;
    transform: translate(60px, 0);
  }
  #fill-decorate7 {
    grid-column: 3 / span 1;
    grid-row: span 2 / -1;
  }

  #title1 {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    transform: translate(0, -15px);
  }
  #title2 {
    grid-column: span 2 / -1;
    grid-row: 6 / span 1;
    transform: translate(0, 15px);
  }
  #title3 {
    grid-column: 2 / span 4;
    grid-row: 9 / span 1;
    transform: translate(0, -50px);
  }
  #title4 {
    grid-column: span 2 / -3;
    grid-row: 9 / span 2;
    transform: rotate(90deg) translate(20px, 0);
  }
  #title5 {
    grid-column: 1 / span 3;
    grid-row: span 1 / -7;
    transform: translate(0, -40px);
  }
  #title6 {
    grid-column: span 4 / -1;
    grid-row: span 1 / -6;
    transform: translate(0, -40px);
    display: flex;
    justify-content: flex-end;
  }
   #title7 {
    grid-column: 1 / span 2;
    grid-row: span 2 / -3;
    transform: rotate(90deg) translate(20px, -70px);
  }
}

</style>
