<template>
  <div class="form-block">
    <div class="form-row">
      <div class="label">Account</div>
      <input type="text" placeholder="example@email.com" v-model="account">
    </div>
    <div class="form-row">
      <div class="label">Password</div>
      <input type="password" placeholder="" v-model="password">
    </div>
    <div class="form-row">
      <div class="label">Comfirm Password</div>
      <input type="password" placeholder="" v-model="passwordConfirm">
    </div>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      account: '',
      password: '',
      passwordConfirm: '',
      minPasswordLength: 8,
    };
  },
  computed: {
    accountEmpty() {
      return this.account.length === 0;
    },
    passwordTooShort() {
      return this.password.length < this.minPasswordLength;
    },
    passwordNotMatch() {
      return this.password !== this.passwordConfirm;
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  width: 100%;
}
</style>
