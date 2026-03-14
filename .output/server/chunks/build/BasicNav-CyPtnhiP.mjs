import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BpY_uAqf.mjs';
import { u as useAuthStore } from './authStore-CkvYpLP1.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "basic-footer text-center text-lg-start py-3" }, _attrs))}><div class="container"><p class="text-muted mb-0">\xA9 Minjae Company. All rights reserved.</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/BasicFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BasicFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BasicNav",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const logout = () => {
      authStore.logout();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "basic-header" }, _attrs))} data-v-310383d7><nav class="navbar navbar-expand-lg" data-v-310383d7><div class="container-fluid" data-v-310383d7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "navbar-brand",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="collapse navbar-collapse" id="navbarNavDropdown" data-v-310383d7><ul class="navbar-nav" data-v-310383d7><li class="nav-item" data-v-310383d7>`);
      if (unref(authStore).isLogin) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "nav-link active",
          onClick: logout
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "nav-link active"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Login`);
            } else {
              return [
                createTextVNode("Login")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</li></ul></div></div></nav></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/BasicNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BasicHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-310383d7"]]);

export { BasicHeader as B, BasicFooter as a };
//# sourceMappingURL=BasicNav-CyPtnhiP.mjs.map
