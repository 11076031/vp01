(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{347:function(t,e,n){"use strict";function o(t,e,n,o,s,i,r,a){var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),o&&(h.functional=!0),i&&(h._scopeId="data-v-"+i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},h._ssrRegister=c):s&&(c=a?function(){s.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(h.functional){h._injectStyles=c;var u=h.render;h.render=function(t,e){return c.call(e),u(t,e)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:h}}n.d(e,"a",(function(){return o}))},403:function(t,e,n){"use strict";n.r(e);var o=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],s={methods:{getMsg:function(){return o[Math.floor(Math.random()*o.length)]}}},i=n(347),r=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-container"},[e("div",{staticClass:"theme-default-content"},[e("h1",[this._v("404")]),this._v(" "),e("blockquote",[this._v(this._s(this.getMsg()))]),this._v(" "),e("RouterLink",{attrs:{to:"/"}},[this._v("\n      Take me home.\n    ")])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);