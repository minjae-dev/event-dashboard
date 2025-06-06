<script setup lang="ts">
// imports
import { loginUser } from '@/apis/auth/authApi';
import { useAuthStore } from '@/stores/authStore';
import { ErrorMessage, useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
// route, router
const router = useRouter();
// toast
const authStore = useAuthStore()
// userForm
const { handleSubmit } = useForm({
  validationSchema: {
    email(value: string) {
      if (!value) {
        return '이메일을 입력해주세요.';
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return '유효한 이메일 형식이 아닙니다.';
      }
      return true;
    },
    password(value: string) {
      if (!value) {
        return '비밀번호를 입력해주세요.';
      }
      if (value.length < 6) {
        return '비밀번호는 최소 6자 이상이어야 합니다.';
      }
      return true;
    },
  },
});
// useFields
const email = useField('email')
const password = useField('password')

// handles
const onSubmit = handleSubmit(async ({ email, password }) => {
  const result = await loginUser({ email, password })
  if (!result) return;
  else {
    const { user, access_token } = result;
    if (user.role) {
      authStore.setUserRole(user.role);
      authStore.login(access_token, user.role)
    }
    router.push('/')
  }
})

</script>
<template>
  <div class="login-view">
    <h1>로그인 페이지</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label
          for="email"
          class="form-label"
        >이메일</label>
        <input
          id="email"
          class="form-control"
          :class="{ 'is-invalid': email.meta.touched && !email.meta.valid }"
          v-model="email.value.value"
          placeholder="이메일을 입력하세요"
          autocomplete="email"
        />
        <ErrorMessage
          name="email"
          class="invalid-feedback"
        />

      </div>
      <div class="mb-3">
        <label
          for="password"
          class="form-label"
        >비밀번호</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{ 'is-invalid': password.meta.touched && !password.meta.valid }"
          v-model="password.value.value"
          placeholder="비밀번호를 입력하세요"
          autocomplete="current-password"
        />
        <ErrorMessage
          name="password"
          class="invalid-feedback"
        />
      </div>
      <button
        type="submit"
        class="btn btn-"
      >Login</button>
    </form>

  </div>
</template>
