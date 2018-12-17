<template>
  <div>
      <div class="text-right mt-4">
          <button class="btn btn-primary" @click.prevent="newProducts"><i class="mr-2 fas fa-plus"></i>新增產品</button>
      </div>
      <table class="table mt-4">
          <thead class="thead-light">
              <tr>
                  <th width="120">分類</th>
                  <th>產品名稱</th>
                  <th class="text-right" width="120">原價</th>
                  <th class="text-right" width="120">售價</th>
                  <th class="text-center" width="100">啟用狀態</th>
                  <th class="text-center" width="100">編輯</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(items) in products" :key="items.id">
                  <td>{{items.category}}</td>
                  <td>{{items.title}}</td>
                  <td class="text-right">{{items.origin_price}}</td>
                  <td class="text-right">{{items.price}}</td>
                  <td class="text-center">
                      <span v-if="items.is_enabled" class="text-success">啟用</span>
                      <span v-else class="text-secondary">未啟用</span>
                  </td>
                  <td>
                      <a class="btn btn-link  far fa-edit py-0"></a>
                      <a class="btn btn-link far fa-trash-alt py-0 text-danger pl-0"></a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.APIPATH}/api/${
        process.env.COSTOMPATH
      }/products?`
      const vm = this
      console.log(api)
      this.$http.get(api).then(response => {
        vm.products = response.data.products
        console.log(vm.products)
      })
    },
    newProducts () {
      this.$router.push('/admin/new')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
