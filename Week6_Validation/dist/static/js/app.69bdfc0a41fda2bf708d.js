webpackJsonp([0],{"+ZE0":function(t,s){},"Hz/v":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form-block"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"label"},[t._v("Account")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"example@email.com"},domProps:{value:t.account},on:{input:function(s){s.target.composing||(t.account=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"label"},[t._v("Comfirm Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"password",placeholder:""},domProps:{value:t.passwordConfirm},on:{input:function(s){s.target.composing||(t.passwordConfirm=s.target.value)}}})])])},staticRenderFns:[]};var i=e("VU/8")({data:function(){return{account:"",password:"",passwordConfirm:"",minPasswordLength:8}},computed:{accountEmpty:function(){return 0===this.account.length},passwordTooShort:function(){return this.password.length<this.minPasswordLength},passwordNotMatch:function(){return this.password!==this.passwordConfirm}}},n,!1,function(t){e("yT6r")},"data-v-990de71c",null).exports,o={name:"Validation",components:{FormStep1:i},data:function(){return{currentStep:{},currentStepId:0,lastStepId:3,step:[{view:i,title:"Create Account",subtitle:"Glad to see you here!"}],isValid:!1}},computed:{buttonText:function(){return this.currentStepId<this.lastStepId?"SUBMIT & NEXT":"DONE"}},mounted:function(){this.currentStep=this.step[this.currentStepId]}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("div",{staticClass:"title-block"},[e("div",{staticClass:"title"},[t._v(t._s(t.currentStep.title))]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v(t._s(t.currentStep.subtitle))])]),t._v(" "),e(t.currentStep.view,{tag:"component"}),t._v(" "),e("div",{staticClass:"text-button",class:{disabled:!t.isValid}},[t._v("\n    "+t._s(t.buttonText)+"\n  ")])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"dot done"},[this._v("✔")]),this._v(" "),s("div",{staticClass:"line done"}),this._v(" "),s("div",{staticClass:"dot active"}),this._v(" "),s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"dot"}),this._v(" "),s("div",{staticClass:"line"}),this._v(" "),s("div",{staticClass:"dot"})])}]};var c={name:"App",components:{Validation:e("VU/8")(o,r,!1,function(t){e("+ZE0")},"data-v-8262e9c2",null).exports}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Validation")],1)},staticRenderFns:[]};var l=e("VU/8")(c,d,!1,function(t){e("Hz/v")},"data-v-ec7b1d76",null).exports;a.a.config.productionTip=!1,e("NcP2"),e("erTq"),new a.a({el:"#app",components:{App:l},template:"<App/>"})},NcP2:function(t,s){},erTq:function(t,s){},yT6r:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.69bdfc0a41fda2bf708d.js.map