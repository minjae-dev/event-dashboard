import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { u as useAuthStore } from './authStore-CkvYpLP1.mjs';
import { u as useModalStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import './Constants-Nrh9QIzP.mjs';
import 'pinia';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    card: {}
  },
  emits: ["detailClick"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-body"><h5 class="card-title">${ssrInterpolate(__props.card.title)}</h5><ul class="list-group list-group-flush mb-3"><li class="list-group-item"><strong>\uC774\uBCA4\uD2B8 ID:</strong> ${ssrInterpolate(__props.card.id)}</li><li class="list-group-item"><strong>\uCE74\uD14C\uACE0\uB9AC:</strong> ${ssrInterpolate(__props.card.category)}</li><li class="list-group-item"><strong>\uC0C1\uD0DC:</strong><span class="${ssrRenderClass({
        "badge bg-success": __props.card.status === "\uC608\uC57D \uAC00\uB2A5",
        "badge bg-secondary": __props.card.status !== "\uC608\uC57D \uAC00\uB2A5"
      })}">${ssrInterpolate(__props.card.status)}</span></li><li class="list-group-item"><strong>\uB0A0\uC9DC:</strong> ${ssrInterpolate(__props.card.startDate)} ~ ${ssrInterpolate(__props.card.endDate)}</li><li class="list-group-item"><strong>\uC7A5\uC18C:</strong> ${ssrInterpolate(__props.card.location)}</li><li class="list-group-item"><strong>\uAC74\uBB3C:</strong> ${ssrInterpolate(__props.card.building)}</li><li class="list-group-item"><strong>\uC815\uC6D0:</strong> \uC774\uBCA4\uD2B8 \uC2E0\uCCAD\uC778\uC6D0 / ${ssrInterpolate(__props.card.capacity)}</li><li class="list-group-item"><strong>\uC124\uBA85:</strong> ${ssrInterpolate(__props.card.description)}</li><li class="list-group-item mb-3"><a id="detail" target="_blank" class="btn btn-primary btn-sm"> \uC774\uBCA4\uD2B8 \uC0C1\uC138\uBCF4\uAE30 </a></li></ul></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/EventCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardList",
  __ssrInlineRender: true,
  props: {
    cards: {},
    cardListLabel: {},
    component: {}
  },
  setup(__props) {
    useModalStore();
    const toast = useToast();
    const router = useRouter();
    const { isLogin } = useAuthStore();
    function clickCardHandler(eventId, eventTarget) {
      const target = eventTarget;
      if (!isLogin) {
        toast.error("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uAC00\uB2A5");
        router.push({ path: `/login` });
      } else {
        router.push({ path: target.id === "detail" ? `/eventDetail/${eventId}` : `/reservations/${eventId}` });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h5><label name="label">${ssrInterpolate(__props.cardListLabel)}</label></h5>`);
      if (__props.cards && __props.cards.length > 0) {
        _push(`<div class="card-list"><!--[-->`);
        ssrRenderList(__props.cards, (card, index) => {
          _push(`<div class="card-wrapper">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.component), {
            onDetailClick: ($event) => clickCardHandler(card.id, $event),
            card
          }, null), _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lists/CardList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    const eventCards = ref([]);
    const cardListLabel = ref("\uC774\uBCA4\uD2B8 \uBAA9\uB85D");
    ref([
      {
        name: "Event Dashboard (\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8)",
        url: "/login",
        status: "\uB370\uBAA8",
        memberSystem: "\uC774\uBA54\uC77C \uB85C\uADF8\uC778 / \uC5ED\uD560 \uAE30\uBC18 \uC811\uADFC \uC81C\uC5B4(\uAD00\uB9AC\uC790\xB7\uB9E4\uB2C8\uC800\xB7\uC77C\uBC18 \uD68C\uC6D0)",
        description: "\uD68C\uC6D0 \uC778\uC99D \uD6C4 \uAD8C\uD55C\uBCC4 \uB300\uC2DC\uBCF4\uB4DC\uB85C \uBD84\uAE30\uB418\uB294 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uB370\uBAA8\uC785\uB2C8\uB2E4."
      },
      {
        name: "Admin Dashboard Member Demo",
        url: "/admin/dashboard",
        status: "\uB370\uBAA8",
        memberSystem: "\uD68C\uC6D0 \uAC80\uC0C9, \uAD8C\uD55C \uBCC0\uACBD, \uAC00\uC785\uC77C \uBAA8\uB2C8\uD130\uB9C1",
        description: "\uAD00\uB9AC\uC790\uAC00 \uD68C\uC6D0\uC744 \uC9C1\uC811 \uC870\uD68C/\uAD00\uB9AC\uD558\uB294 \uACFC\uC815\uC744 \uC989\uC2DC \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-view" }, _attrs))}><section class="portfolio-section mb-4"><h2 class="mb-3">\uD3EC\uD2B8\uD3F4\uB9AC\uC624 &amp; \uAD00\uB9AC\uC790 \uB370\uBAA8</h2><p class="text-muted mb-3"> \uD68C\uC6D0 \uC2DC\uC2A4\uD15C\uC774 \uD3EC\uD568\uB41C \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uC640 \uAD00\uB9AC\uC790 \uD68C\uC6D0 \uAD00\uB9AC \uB370\uBAA8\uB97C \uBC14\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. </p><div class="alert alert-info mb-3"><strong>\uCCB4\uD5D8 \uACC4\uC815</strong><br> \uAD00\uB9AC\uC790: <code>admin@gmail.com / 123456</code><br> \uC77C\uBC18 \uD68C\uC6D0: <code>viewer@gmail.com / 123456</code></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        cards: eventCards.value,
        "card-list-label": cardListLabel.value,
        component: _sfc_main$3
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<label class="card-label"${_scopeId}>${ssrInterpolate(cardListLabel.value)}</label>`);
          } else {
            return [
              createVNode("label", { class: "card-label" }, toDisplayString(cardListLabel.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/HomeView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B1YGAYBG.mjs.map
