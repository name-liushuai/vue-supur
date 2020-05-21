<template>
  <!-- home组件轮播图 -->
  <div>
    <swiper>
      <swiper-item v-for="(i,index) in banner" :key="index">
        <a :href="i.link">
          <img :src="i.image" @load="swiperimgload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isbool: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperimgload() {
      if (!this.isbool) {
        this.$emit("swiperimgload");
        this.isbool = true;
      }
    }
  }
};
</script>

<style  scoped>
</style>
