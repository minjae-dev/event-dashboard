import { defineComponent, ref, mergeProps, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as apiHelper, b as apiClient } from './apiHelper-Ct_n-KQ4.mjs';
import { R as RESERVATION_STATUS } from './Constants-Nrh9QIzP.mjs';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import 'axios';

function createEnumMapper(mapping) {
  return (key) => mapping[key] || "\uC54C \uC218 \uC5C6\uC74C";
}
const reservationStatusMapper = createEnumMapper({
  1: "\uC608\uC57D\uB428",
  2: "\uCDE8\uC18C\uB428",
  3: "\uB300\uAE30\uC790"
});
async function getReservationsByEventId(eventId) {
  return await apiHelper(() => apiClient.get(`/reservations?event_id=${eventId}`));
}
const useReservationStore = defineStore("reservationStore", () => {
  const reservations = ref([]);
  const loadReservations = async (eventId) => {
    const response = await getReservationsByEventId(eventId);
    reservations.value = response ? response.data.map((item) => ({
      id: item.id,
      event_id: item.event_id,
      user_id: item.user_id,
      status: reservationStatusMapper(item.status),
      reserved_at: item.reserved_at
    })) : [];
    console.log(reservations.value);
  };
  const getByEventId = (eventId) => {
    return reservations.value.filter((r) => r.event_id === eventId);
  };
  const getStatusCountByEvent = (eventId) => {
    const list = getByEventId(eventId);
    return {
      reserved: list.filter((r) => r.status === RESERVATION_STATUS.RESERVED).length,
      wait_list: list.filter((r) => r.status === RESERVATION_STATUS.WAIT_LIST).length,
      cancelled: list.filter((r) => r.status === RESERVATION_STATUS.CANCELLED).length
    };
  };
  const getRecentReservedDate = computed(
    () => reservations.value && reservations.value.length > 0 ? reservations.value[0].reserved_at : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
  );
  return {
    reservations,
    loadReservations,
    getByEventId,
    getStatusCountByEvent,
    getRecentReservedDate
  };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReservationsTable",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useReservationStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "reservation-table card h-100" }, _attrs))}><div class="card-body"><h5 class="card-title">\uC608\uC57D \uD604\uD669 \uD14C\uC774\uD2C0</h5><table class="table table-striped"><thead><tr><th>ID</th><th>\uC774\uBCA4\uD2B8 ID</th><th>\uC720\uC800 ID</th><th>\uC0C1\uD0DC</th><th>\uC608\uC57D \uC2DC\uAC01</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(store).reservations, (item) => {
        _push(`<tr><td>${ssrInterpolate(item.id)}</td><td>${ssrInterpolate(item.event_id)}</td><td>${ssrInterpolate(item.event_id)}</td><td>${ssrInterpolate(item.status)}</td><td>${ssrInterpolate(item.reserved_at)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/ReservationsTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReservationsView",
  __ssrInlineRender: true,
  emits: ["update:selectedDate"],
  setup(__props, { emit: __emit }) {
    useRoute();
    useReservationStore();
    ref([]);
    const selectedDate = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "reservation-view" }, _attrs))}><input type="date" class="form-control w-100 w-sm-auto"${ssrRenderAttr("value", selectedDate.value)}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/ReservationsView.vue");
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reservations/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C1Qjfmze.mjs.map
