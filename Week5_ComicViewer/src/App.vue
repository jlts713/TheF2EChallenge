<template>
  <div id="app">
    <!-- <router-view/> -->
    <header>Comicomic</header>

    <div class="content">
      <div id="comic-info">
        <div id="left-block">

        </div>
        <div id="right-block">
          <div class="comic-name">MY HEXSCHOOL</div>
          <div class="comic-detail">
            <div class="comic-detail-row">
              <div class="comic-detail-title">Genres</div>
              <div class="comic-detail-content">Fusce/vehicula/dolor</div>
            </div>
            <div class="comic-detail-row">
              <div class="comic-detail-title">Author</div>
              <div class="comic-detail-content">Namae Shiranai</div>
            </div>
            <div class="comic-detail-row">
              <div class="comic-detail-title">Status</div>
              <div class="comic-detail-content">Ongoing</div>
            </div>
            <div class="comic-detail-row">
              <div class="comic-detail-title">Rate</div>
              <div class="comic-detail-content"></div>
            </div>
          </div>
          <div class="comic-summary">
            <div class="comic-summary-title">Summary</div>
            <div class="comic-summary-content">If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.</div>
            <div class="comic-summary-content">Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.</div>
          </div>
        </div>
      </div>
      <div id="comic-chapters">
        <div class="comic-chapters-title">All Chapters</div>
        <div class="comic-chapters-content">
          <div class="comic-chapters-row">Chapter 1: The F2E Challenge Start!</div>
          <div class="comic-chapters-row">Chapter 2: Todo List is Going Crazy!</div>
        </div>
      </div>
    </div>
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
}

header {
  height: 74px;
  width: 100%;
  background-color: $color-black;
  color: $color-green;
  @include font-title-36();
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
}

.content {
  width: 650px;
  margin: 0 auto;
  margin-top: 24px;
  box-sizing: border-box;
  #comic-info {
    display: flex;
    #left-block {
      flex: 0 0 50%;
      border: 4px solid $color-black;
      box-sizing: border-box;
    }
    #right-block {
      flex: 0 0 50%;
      box-sizing: border-box;
    }
  }
}

#right-block {
  .comic-name {
    background-color: $color-black;
    color: $color-white;
    @include font-title-36();
    padding: 8px 0;
    text-align: center;
  }
  .comic-detail {
    padding: 8px 20px;
    .comic-detail-row {
      margin: 8px 0px;
      display: flex;
      align-items: center;
      .comic-detail-title {
        @include font-paragraph();
        font-weight: bold;
        flex: 0 0 55px;
        margin-right: 20px;
      }
      .comic-content {
        @include font-paragraph();
      }
    }
  }
  .comic-summary {
    padding: 8px 20px;
    .comic-summary-title {
      @include font-paragraph();
      font-weight: bold;
    }
    .comic-summary-content {
      @include font-paragraph();
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}

#comic-chapters {
  margin-top: 20px;
  .comic-chapters-title {
    @include font-title-24();
    background-color: $color-black;
    color: $color-white;
    padding: 8px 24px;
    display: inline-block;
  }
  .comic-chapters-content {
    box-sizing: border-box;
    border: 4px solid $color-black;
    padding: 10px 0;
    background-color: $color-white;
    .comic-chapters-row {
      background-color: $color-white;
      color: $color-black;
      padding: 8px 24px;
      @include font-paragraph();
      font-weight: bold;
      &:hover {
        background-color: $color-black;
        color: $color-white;
        cursor: pointer;
      }
    }
  }
}
</style>
