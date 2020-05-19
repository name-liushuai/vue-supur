<template>
  <div>
    <swiper>
      <swiper-item v-for="(i,index) in banner" :key="index">
        <a :href="i.link">
          <img :src="i.image" alt />
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
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style  scoped>
</style>
