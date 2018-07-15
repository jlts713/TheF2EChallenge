<template>
  <div class="page">
    <div class="progress-bar">
      <div class="dot done">&#10004;</div>
      <div class="line done"></div>
      <div class="dot active"></div>
      <div class="line"></div>
      <div class="dot"></div>
      <div class="line"></div>
      <div class="dot"></div>
    </div>
    <div class="title-block">
      <div class="title">{{currentStep.title}}</div>
      <div class="subtitle">{{currentStep.subtitle}}</div>
    </div>
    <component :is="currentStep.view"></component>
    <div class="text-button" :class="{'disabled': !isValid}">
      {{buttonText}}
    </div>
  </div>
</template>

<script>
import FormStep1 from './formStep1.vue';

export default {
  name: 'Validation',
  components: {
    FormStep1,
  },
  data() {
    return {
      currentStep: {},
      currentStepId: 0,
      lastStepId: 3,
      step: [
        {
          view: FormStep1,
          title: 'Create Account',
          subtitle: 'Glad to see you here!',
        },
      ],
      isValid: false,
    };
  },
  computed: {
    buttonText() {
      return (this.currentStepId < this.lastStepId) ? 'SUBMIT & NEXT' : 'DONE';
    },
  },
  mounted() {
    this.currentStep = this.step[this.currentStepId];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/variables';
.page {
  border-top: 3px solid $color-blue;
  display: flex;
  flex-direction: column;

  .progress-bar {
    margin: 0 auto;
    margin-top: 55px;
    display: flex;
    align-items: center;

    .dot {
      box-sizing: border-box;
      height: 14px;
      width: 14px;
      border-radius: 100%;
      // border: 2px solid $color-lightblue;
      box-shadow: 0px 0px 0px 2px $color-lightblue;
      z-index: 2;
      &.active {
        box-shadow: 0px 0px 0px 2px $color-blue;
        border: 2px solid white;
        background-color: $color-blue;
      }
      &.done {
        box-shadow: 0px 0px 0px 2px $color-blue;
        background-color: $color-blue;
        color: white;
      }
    }
    .line {
      width: 75px;
      height: 2px;
      background-color: $color-lightblue;
      &.done {
        background-color: $color-blue;
      }
    }
  }

  .title-block {
    margin-top: 40px;
    text-align: center;
    .title {
      font-size: 48px;
      line-height: 57px;
      font-weight: 100;
    }
    .subtitle {
      @include font-24px();
    }
  }


  .text-button {
    color: white;
    background-color: $color-blue;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include font-20px();
    &:hover {
      background-color: #036bc7;
      cursor: pointer;
    }
    &.disabled {
      background-color: $color-lightblue;
      cursor: default;
      &:hover {
        background-color: $color-lightblue;
      }
    }
    
  }
}
</style>
