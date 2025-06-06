<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
// route, router

const authStore = useAuthStore()

const logout = (): void => {
  authStore.logout();
}


</script>
<template>
  <header class="basic-header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink
          class="navbar-brand"
          to="/"
        >Home</RouterLink>
        <div
          class="collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink
                v-if="authStore.isLogin"
                to="/"
                class="nav-link active"
                @click.prevent="logout"
              >Logout</RouterLink>
              <RouterLink
                v-else
                to="/login"
                class="nav-link active"
              >Login</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
/* bootstrap 스타일 조정 */
.navbar {
  margin: 0;
}
</style>
