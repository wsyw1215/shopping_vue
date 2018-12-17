<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-link text-danger" data-toggle="modal" data-target="#CancelModal"><i class="fas fa-times"></i></button>
    </div>
    <div class="mt-4">
      <h5>新增商品圖片</h5>
      <div class="imgbox mt-4 d-flex flex-column justify-content-center">
          <div class="align-self-center"><i class="fas fa-plus fa-4x"></i></div>
          <div class="align-self-center pt-2">點擊新增圖片</div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="CancelModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body h4 text-center">捨棄更變?</div>
          <div class="modal-footer border-top-0">
            <button type="button" class="btn btn-light w-50 text-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-light w-50 text-danger" data-dismiss="modal" @click="cancelnewProduct">放棄</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    cancelnewProduct () {
      this.$router.push('/admin/products')
    }
  }
}
</script>

<style lang="scss" scoped>
    $imgbox-color : #bdbdbd;
    .imgbox{
        width: 200px;
        height: 200px;
        border: 1px dashed $imgbox-color;
        color: $imgbox-color;
    }
</style>
