import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { a as apiHelper, b as apiClient } from './apiHelper-Ct_n-KQ4.mjs';
import { useToast } from 'vue-toastification';
import { u as useAuthStore } from './authStore-CkvYpLP1.mjs';
import { useForm, useField, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router';
import 'axios';
import './Constants-Nrh9QIzP.mjs';
import 'pinia';

async function getUsers(email) {
  return await apiHelper(() => apiClient.get(`/users?email=${email}`));
}
const toast = useToast();
async function loginUser(payload) {
  const users = await getUsers(payload.email);
  if (!users) {
    toast.error("\uC11C\uBC84 \uC624\uB958");
    return null;
  }
  if ((users == null ? void 0 : users.data.length) === 0) {
    toast.error("\uC0AC\uC6A9\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
    return null;
  }
  const user = users.data[0];
  if (user.password !== payload.password) {
    toast.error("\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
    return null;
  }
  toast.success("\uB85C\uADF8\uC778 \uC131\uACF5");
  return {
    access_token: "example_access_token",
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginView",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const authStore = useAuthStore();
    const { handleSubmit } = useForm({
      validationSchema: {
        email(value) {
          if (!value) {
            return "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.";
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return "\uC720\uD6A8\uD55C \uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4.";
          }
          return true;
        },
        password(value) {
          if (!value) {
            return "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
          }
          if (value.length < 6) {
            return "\uBE44\uBC00\uBC88\uD638\uB294 \uCD5C\uC18C 6\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
          }
          return true;
        }
      }
    });
    const email = useField("email");
    const password = useField("password");
    handleSubmit(async ({ email: email2, password: password2 }) => {
      const result = await loginUser({ email: email2, password: password2 });
      if (!result) return;
      else {
        const { user, access_token } = result;
        if (user.role) {
          authStore.setUserRole(user.role);
          authStore.login(access_token, user.role);
        }
        router.push("/");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-view" }, _attrs))}><h1>\uB85C\uADF8\uC778 \uD398\uC774\uC9C0</h1><form><div class="mb-3"><label for="email" class="form-label">\uC774\uBA54\uC77C</label><input id="email" class="${ssrRenderClass([{ "is-invalid": unref(email).meta.touched && !unref(email).meta.valid }, "form-control"])}"${ssrRenderAttr("value", unref(email).value.value)} placeholder="\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694" autocomplete="email">`);
      _push(ssrRenderComponent(unref(ErrorMessage), {
        name: "email",
        class: "invalid-feedback"
      }, null, _parent));
      _push(`</div><div class="mb-3"><label for="password" class="form-label">\uBE44\uBC00\uBC88\uD638</label><input type="password" id="password" class="${ssrRenderClass([{ "is-invalid": unref(password).meta.touched && !unref(password).meta.valid }, "form-control"])}"${ssrRenderAttr("value", unref(password).value.value)} placeholder="\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694" autocomplete="current-password">`);
      _push(ssrRenderComponent(unref(ErrorMessage), {
        name: "password",
        class: "invalid-feedback"
      }, null, _parent));
      _push(`</div><button type="submit" class="btn btn-">Login</button></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/LoginView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DwX7eUiN.mjs.map
