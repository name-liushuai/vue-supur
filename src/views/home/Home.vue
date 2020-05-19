<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NvaBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";

import { getDatas } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    getDatas().then(res => {
      // console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  }
};
</script>

<style  scoped>
.home-nav {
  background: var(--color-tint);
  color: aliceblue;
}
</style>
