<template>
  <!--  流行，新款，精选导航栏组件下的商品列表父组件 -->
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style  scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
