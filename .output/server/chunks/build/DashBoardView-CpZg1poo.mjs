import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashBoardView",
  __ssrInlineRender: true,
  setup(__props) {
    const users = ref([]);
    const searchKeyword = ref("");
    const roleFilter = ref("all");
    const loading = ref(false);
    const syncingUserId = ref(null);
    const roleLabel = (role) => {
      if (role === "2") return "\uAD00\uB9AC\uC790";
      if (role === "1") return "\uC77C\uBC18 \uD68C\uC6D0";
      return "\uB9E4\uB2C8\uC800";
    };
    const roleBadgeClass = (role) => {
      if (role === "2") return "text-bg-danger";
      if (role === "1") return "text-bg-secondary";
      return "text-bg-success";
    };
    const filteredUsers = computed(() => {
      const keyword = searchKeyword.value.toLowerCase();
      return users.value.filter((user) => {
        var _a;
        const matchesKeyword = user.name.toLowerCase().includes(keyword) || ((_a = user.email) == null ? void 0 : _a.toLowerCase().includes(keyword));
        const matchesRole = roleFilter.value === "all" || user.role === roleFilter.value;
        return matchesKeyword && matchesRole;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "dash-board-view" }, _attrs))}><header class="mb-4"><h2>Admin Dashboard \uB370\uBAA8</h2><p class="text-muted mb-0">\uD68C\uC6D0 \uAC80\uC0C9, \uC5ED\uD560 \uBCC0\uACBD, \uAC00\uC785\uC77C \uD655\uC778\uC73C\uB85C \uC6B4\uC601 \uAD00\uB9AC\uB97C \uC810\uAC80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></header><div class="member-controls row g-2 mb-3"><div class="col-12 col-md-7"><input${ssrRenderAttr("value", searchKeyword.value)} type="text" class="form-control" placeholder="\uC774\uB984 \uB610\uB294 \uC774\uBA54\uC77C \uAC80\uC0C9"></div><div class="col-12 col-md-5"><select class="form-select"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "all") : ssrLooseEqual(roleFilter.value, "all")) ? " selected" : ""}>\uC804\uCCB4 \uAD8C\uD55C</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "0") : ssrLooseEqual(roleFilter.value, "0")) ? " selected" : ""}>\uB9E4\uB2C8\uC800</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "1") : ssrLooseEqual(roleFilter.value, "1")) ? " selected" : ""}>\uC77C\uBC18 \uD68C\uC6D0</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "2") : ssrLooseEqual(roleFilter.value, "2")) ? " selected" : ""}>\uAD00\uB9AC\uC790</option></select></div></div><div class="table-responsive border rounded bg-white"><table class="table table-hover align-middle mb-0"><thead class="table-light"><tr><th>\uC774\uB984</th><th>\uC774\uBA54\uC77C</th><th>\uD604\uC7AC \uAD8C\uD55C</th><th>\uAC00\uC785\uC77C</th><th class="text-end">\uAD8C\uD55C \uBCC0\uACBD</th></tr></thead>`);
      if (!loading.value) {
        _push(`<tbody><!--[-->`);
        ssrRenderList(filteredUsers.value, (user) => {
          _push(`<tr><td>${ssrInterpolate(user.name)}</td><td>${ssrInterpolate(user.email)}</td><td><span class="${ssrRenderClass([roleBadgeClass(String(user.role)), "badge"])}">${ssrInterpolate(roleLabel(String(user.role)))}</span></td><td>${ssrInterpolate(user.created_at.slice(0, 10))}</td><td class="text-end"><select class="form-select form-select-sm d-inline-block member-role-select"${ssrIncludeBooleanAttr(syncingUserId.value === String(user.id)) ? " disabled" : ""}${ssrRenderAttr("value", String(user.role))}><option value="0">\uB9E4\uB2C8\uC800</option><option value="1">\uC77C\uBC18 \uD68C\uC6D0</option><option value="2">\uAD00\uB9AC\uC790</option></select></td></tr>`);
        });
        _push(`<!--]-->`);
        if (filteredUsers.value.length === 0) {
          _push(`<tr><td colspan="5" class="text-center py-4 text-muted"> \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD68C\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. </td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody>`);
      } else {
        _push(`<tbody><tr><td colspan="5" class="text-center py-4"> \uD68C\uC6D0 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4... </td></tr></tbody>`);
      }
      _push(`</table></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/admin/DashBoardView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DashBoardView-CpZg1poo.mjs.map
