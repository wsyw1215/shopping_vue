<template>
  <div>
      <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row">
          <Slidebar></Slidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Slidebar from './Slidebar.vue'
import Navbar from './Navbar.vue'
export default {
  components: {
    Slidebar,
    Navbar
  }
}
</script>
