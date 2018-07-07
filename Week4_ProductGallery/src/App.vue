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

    <div id="subtitle1" class="product-type">Men's Outfit</div>
    <div id="subtitle2" class="product-type">Men's Basic</div>
    <div id="subtitle3" class="product-type">Men's Pattern Shirt</div>
    <div id="subtitle4" class="product-type">Men's Cadual</div>
    <div id="subtitle5" class="product-type">Men's Jacket</div>
    <div id="subtitle6" class="product-type">Men's Classic</div>
    <div id="subtitle7" class="product-type">Men's Shirt</div>

    <div id="number1" class="product-number">01</div>
    <div id="number2" class="product-number">02</div>
    <div id="number3" class="product-number">03</div>
    <div id="number4" class="product-number">04</div>
    <div id="number5" class="product-number">05</div>
    <div id="number6" class="product-number">06</div>
    <div id="number7" class="product-number">07</div>

    <div id="stripe1" class="stripes"></div>
    <div id="stripe4" class="stripes"></div>
    <div id="stripe5" class="stripes"></div>
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
  .product-number {
    order: 4;
    z-index: 4;
    @include font-semi-title();
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

  .product-type {
    order: 6;
    z-index: 6;
    @include font-italic-subtitle();
    font-weight: 600;
  }

  .stripes {
    order: 7;
    z-index: 7;
    background-image: repeating-linear-gradient(-45deg,
      transparent,
      transparent 20px,
      $color-green 20px,
      $color-green 40px);
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
    background-image: url('../img/image1.jpg');
    background-size: 100%, 400px;
    background-position-y: -150px;
  }

   #image-block2 {
    grid-column: 6 / 8;
    grid-row: 4 / 6;
    background-image: url('../img/image2.jpg');
    background-size: 100%, 100%;
    background-position-y: -100px;
  }

  #image-block3 {
    grid-column: 1 / 5;
    grid-row: 9 / span 2;
    background-image: url('../img/image3.jpg');
    background-size: 100%, 100%;
    background-position-y: -60px;
  }

  #image-block4 {
    grid-column: span 2 / -1;
    grid-row: 9 / span 4;
    background-image: url('../img/image4.jpg');
    background-size: cover;
    background-position-x: -30px;
  }

  #image-block5 {
    grid-column: 3 / span 2;
    grid-row: span 2 / -7;
    background-image: url('../img/image5.jpg');
    background-size: cover;
    background-position-x: -30px;
    transform: rotateY(180deg);
  }

  #image-block6 {
    grid-column: span 4 / -1;
    grid-row: span 4 / -3;
    background-image: url('../img/image6.jpg');
    background-size: cover;
    background-position-y: -160px;
  }

  #image-block7 {
    grid-column: 1 / span 2;
    grid-row: span 4 / -1;
    background-image: url('../img/image7.jpg');
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
    grid-column: span 2 / -2;
    grid-row: 9 / span 2;
    transform: rotate(-90deg) translate(60px, 50px);
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

  #subtitle1 {
    grid-column: 4 / span 2;
    grid-row: 6 / span 2;
    transform: rotate(90deg) translate(0, 80px);
  }
  #subtitle2 {
    grid-column: 5 / span 2;
    grid-row: 3 / span 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  #subtitle3 {
    grid-column: 1 / span 2;
    grid-row: 11 / span 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  #subtitle4 {
    grid-column: span 2 / -1;
    grid-row: 7 / span 2;
    transform: rotate(90deg) translate(-20px, 20px);
    display: flex;
    justify-content: flex-end;
  }
  #subtitle5 {
    grid-column: 5 / span 2;
    grid-row: span 1 / -8;
  }
  #subtitle6 {
    grid-column: span 2 / -2;
    grid-row: span 1 / -2;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  #subtitle7 {
    grid-column: 1 / span 2;
    grid-row: span 1 / -5;
    display: flex;
    align-items: flex-end;
  }

  #number1 {
    grid-column: 1 / span 1;
    grid-row: 7 / span 1;
  }
  #number2 {
    grid-column: span 1 / -1;
    grid-row: 3 / span 1;
    display: flex;
    justify-content: flex-end;
  }
  #number3 {
    grid-column: 5 / span 1;
    grid-row: 11 / span 1;
  }
  #number4 {
    grid-column: span 1 / -3;
    grid-row: 12 / span 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  #number5 {
    grid-column: 2 / span 1;
    grid-row: span 1 / -7;
    display: flex;
    align-items: flex-end;
  }
  #number6 {
    grid-column: 4 / span 1;
    grid-row: span 1 / -5;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  #number7 {
    grid-column: 3 / span 1;
    grid-row: span 1 / -1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  #stripe1 {
    grid-column: 1 / span 2;
    grid-row: 6 / 7;
    transform: translate(60px, 50px);
  }
  #stripe4 {
    grid-column: span 2 / -1;
    grid-row: span 1 / -8;
    transform: translate(0px, -50px);
  }
  #stripe5 {
    grid-column: 1 / span 2;
    grid-row: span 1 / -8;
    transform: translate(0px, -50px);
  }
}

</style>
