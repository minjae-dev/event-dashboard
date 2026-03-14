import { U as USER_ROLE } from './Constants-Nrh9QIzP.mjs';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useAuthStore = defineStore("authStore", () => {
  const user = ref({
    id: null,
    role: null,
    // '1' or '2'
    email: null
  });
  const token = ref("");
  const role = ref("");
  const isAdmin = computed(() => role.value === USER_ROLE.ADMIN);
  const isUser = computed(() => role.value === USER_ROLE.USER);
  const isManager = computed(() => role.value === USER_ROLE.MANAGER);
  const setUserRole = (role2) => {
    if (role2 === USER_ROLE.ADMIN || role2 === USER_ROLE.USER || role2 === USER_ROLE.MANAGER) {
      user.value.role = role2;
    }
  };
  function getUserRole() {
    var _a;
    return (_a = user.value) == null ? void 0 : _a.role;
  }
  function login(newToken, newRole) {
    token.value = newToken;
    role.value = newRole;
  }
  function logout() {
    token.value = "";
    role.value = "";
  }
  const isLogin = computed(() => {
    const accessToken = null;
    return !!(token.value && token.value.length > 0 || accessToken);
  });
  return {
    user,
    token,
    role,
    isLogin,
    isAdmin,
    isUser,
    isManager,
    getUserRole,
    setUserRole,
    login,
    logout
  };
});

export { useAuthStore as u };
//# sourceMappingURL=authStore-CkvYpLP1.mjs.map
