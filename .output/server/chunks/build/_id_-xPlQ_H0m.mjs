import { defineComponent, ref, mergeProps, unref, createSlots, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { a as apiHelper, b as apiClient } from './apiHelper-Ct_n-KQ4.mjs';
import { U as USER_ROLE, E as EVENT_STATUS, a as EVENT_CATEGORY, L as LOCATION_CATEGORY } from './Constants-Nrh9QIzP.mjs';
import { u as useAuthStore } from './authStore-CkvYpLP1.mjs';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import 'axios';
import 'pinia';

async function updateEvent(id, data) {
  return await apiHelper(() => apiClient.put(`/events/${id}`, data));
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EventDetail",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object
    },
    placeholder: {
      type: String,
      default: "Type your note here..."
    },
    label: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "event-detail container mt-4" }, _attrs))}>`);
      if (__props.label) {
        _push(`<div class="mb-1"><label class="form-label fw-bold">${ssrInterpolate(__props.label)}</label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="mb-2"><label class="form-label">\uC774\uBCA4\uD2B8 \uC81C\uBAA9</label><input type="text" class="form-control"${ssrRenderAttr("value", (_a = __props.modelValue) == null ? void 0 : _a.title)}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " readonly" : ""}></div><div class="mb-2"><label class="form-label">\uC124\uBA85</label><input type="text" class="form-control"${ssrRenderAttr("value", (_b = __props.modelValue) == null ? void 0 : _b.description)}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " readonly" : ""}></div><div class="mb-2"><label class="form-label">\uC774\uBCA4\uD2B8 \uB0A0\uC9DC</label><div class="d-flex gap-2"><input type="date" class="form-control"${ssrRenderAttr("value", (_d = (_c = __props.modelValue) == null ? void 0 : _c.startDate) != null ? _d : "")}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " readonly" : ""}><span>~</span><input type="date" class="form-control"${ssrRenderAttr("value", (_f = (_e = __props.modelValue) == null ? void 0 : _e.endDate) != null ? _f : "")}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " readonly" : ""}></div></div><div class="mb-2"><label class="form-label">\uC218\uC6A9\uC778\uC6D0</label><input type="number" class="form-control"${ssrRenderAttr("value", (_g = __props.modelValue) == null ? void 0 : _g.capacity)}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " readonly" : ""}></div><div class="mb-2"><label class="form-label">\uC774\uBCA4\uD2B8 \uC0C1\uD0DC</label><select class="form-control"${ssrRenderAttr("value", (_h = __props.modelValue) == null ? void 0 : _h.status)}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " disabled" : ""}><option value="" disabled>\uC774\uBCA4\uD2B8 \uC0C1\uD0DC \uC120\uD0DD\uD558\uC138\uC694</option><!--[-->`);
      ssrRenderList(Object.entries(unref(EVENT_STATUS)).filter(([k, v]) => typeof v === "number"), ([key, val], idx) => {
        _push(`<option${ssrRenderAttr("value", val)}>${ssrInterpolate(key)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-2"><label class="form-label">\uCE74\uD14C\uACE0\uB9AC</label><select class="form-control"${ssrRenderAttr("value", (_i = __props.modelValue) == null ? void 0 : _i.category)}${ssrIncludeBooleanAttr(!(__props.role === unref(USER_ROLE).ADMIN)) ? " disabled" : ""}><option value="" disabled>\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694</option><!--[-->`);
      ssrRenderList(Object.keys(unref(EVENT_CATEGORY)), (key) => {
        _push(`<option${ssrRenderAttr("value", key)}>${ssrInterpolate(unref(EVENT_CATEGORY)[key])}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-2"><label class="form-label">\uC7A5\uC18C</label><select class="form-control"${ssrRenderAttr("value", (_j = __props.modelValue) == null ? void 0 : _j.location)}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " disabled" : ""}><!--[-->`);
      ssrRenderList(Object.keys(unref(LOCATION_CATEGORY)), (key) => {
        _push(`<option${ssrRenderAttr("value", key)}>${ssrInterpolate(unref(LOCATION_CATEGORY)[key])}</option>`);
      });
      _push(`<!--]--></select></div><div class="mb-2"><label class="form-label">\uC218\uC6A9\uC778\uC6D0</label><input type="number" class="form-control"${ssrRenderAttr("value", (_k = __props.modelValue) == null ? void 0 : _k.capacity)}${ssrIncludeBooleanAttr(__props.role !== unref(USER_ROLE).ADMIN) ? " readonly" : ""}></div></form><div class="field is-grouped is-grouped-right"><div class="control">`);
      ssrRenderSlot(_ctx.$slots, "buttons", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/detail/EventDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DetailView",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const route = useRoute();
    const router = useRouter();
    const { getUserRole } = useAuthStore();
    const defaultData = {
      id: null,
      description: null,
      category: null,
      location: null,
      building: null,
      startDate: null,
      endDate: null,
      capacity: null,
      title: null,
      status: null
    };
    const detailData = ref(defaultData);
    const labelByRole = () => {
      switch (getUserRole()) {
        case USER_ROLE.ADMIN:
          return "\uC774\uBCA4\uD2B8 \uC218\uC815(\uAD00\uB9AC\uC790)";
        case USER_ROLE.MANAGER:
          return "\uC774\uBCA4\uD2B8 \uC218\uC815(\uB9E4\uB2C8\uC800)";
        case USER_ROLE.USER:
          return "\uC774\uBCA4\uD2B8 \uC870\uD68C(\uC0AC\uC6A9\uC790)";
        default:
          return "\uAE30\uBCF8";
      }
    };
    const handleClickSaveBtn = async () => {
      const response = await updateEvent(route.params.id, detailData.value);
      if (!response) {
        toast.error("\uC218\uC815\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.");
        return;
      }
      toast.success("\uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4");
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-view" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        readonly: unref(getUserRole)() === unref(USER_ROLE).ADMIN ? false : true,
        role: (_a = unref(getUserRole)()) != null ? _a : "",
        label: labelByRole(),
        modelValue: detailData.value,
        "onUpdate:modelValue": ($event) => detailData.value = $event
      }, createSlots({ _: 2 }, [
        unref(getUserRole)() === unref(USER_ROLE).ADMIN ? {
          name: "buttons",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="btn btn-primary btn-sm"${_scopeId}>\uC218\uC815\uD558\uAE30</button><button class="btn btn-danger btn-sm ms-2"${_scopeId}>\uCDE8\uC18C\uD558\uAE30</button>`);
            } else {
              return [
                createVNode("button", {
                  onClick: handleClickSaveBtn,
                  class: "btn btn-primary btn-sm"
                }, "\uC218\uC815\uD558\uAE30"),
                createVNode("button", {
                  onClick: ($event) => _ctx.$router.back(),
                  class: "btn btn-danger btn-sm ms-2"
                }, "\uCDE8\uC18C\uD558\uAE30", 8, ["onClick"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/DetailView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/eventDetail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-xPlQ_H0m.mjs.map
