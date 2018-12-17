<template>
  <div class="py-5 outline">
      <div class="text-center">
        <img src="@/assets/coins.png" alt="" width="72" height="72">
      </div>
    <form class="form-signin" @submit.prevent="signin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      </div>
      <div class="form-label-group">
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
          v-model="user.username"
        >
      </div>
      <div class="form-label-group">
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
          v-model="user.password"
        >
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me">記得我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
      <div class="my-3 text-danger" v-if="failed">登入失敗，請確認帳號或密碼</div>
      <p class="mt-5 mb-3 text-muted text-center">&copy; 2018/12 Miko</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      failed: false
    }
  },
  methods: {
    signin () {
      const api = `${process.env.APIPATH}/admin/signin`
      const vm = this
      console.log(api)
      this.$http.post(api, vm.user).then(response => {
        vm.failed = !response.data.success
        // console.log(response.data.success + ',' + vm.failed)
        if (response.data.success) {
          vm.$router.push('/admin/products')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
  --input-padding-x: 0.75rem;
  --input-padding-y: 0.75rem;
}
html,
body {
  height: 100%;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.outline {
    margin-top: 80px;
}
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}
</style>
