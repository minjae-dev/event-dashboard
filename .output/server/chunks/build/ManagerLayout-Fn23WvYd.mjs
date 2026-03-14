import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { RouterView } from 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManagerLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}><h1>\uB9E4\uB2C8\uC800 \uB808\uC774\uC544\uC6C3</h1>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/ManagerLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ManagerLayout-Fn23WvYd.mjs.map
