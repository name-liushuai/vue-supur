<template>
  <!-- home页面展示 -->
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购 物 街</div>
    </nav-bar>
    <tab-constrol
      :title="['流 行','新 款','精 选']"
      class="tab-constrol"
      ref="tabconstrol1"
      @itemclick="itemclick"
      v-show="istabshow"
    ></tab-constrol>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="isshowclick"
      @pullingUp="loadmore"
    >
      <home-swiper :banner="banner" @swiperimgload="swiperimgload"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature-view></feature-view>
      <tab-constrol :title="['流 行','新 款','精 选']" ref="tabconstrol2" @itemclick="itemclick"></tab-constrol>
      <goods-list :goods="goods[aa].list"></goods-list>
    </scroll>
    <back-top @click.native="topclick" v-show="isshowtop"></back-top>
  </div>
</template> 

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NvaBar";
import TabConstrol from "components/conten/tabconstrol/TabConstrol";
import GoodsList from "components/conten/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/conten/backtop/BackTop";

import { getDatas, getGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    NavBar,
    TabConstrol,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      aa: "pop",
      isshowtop: false,
      tabConstrolTop: 0,
      istabshow: false
    };
  },
  created() {
    this.getDatas();

    //请求商品数据
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  mounted() {
    //监听item图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("imgload", () => {
      refresh();
    });
  },
  methods: {
    //防抖函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    /**
     * 事件监听相关的方法
     */
    itemclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.aa = "pop";
          break;
        case 1:
          this.aa = "new";
          break;
        case 2:
          this.aa = "sell";
      }
      this.$refs.tabconstrol1.aaa = index;
      this.$refs.tabconstrol2.aaa = index;
    },
    topclick() {
      this.$refs.scroll.scrollTo(0, 0, 600);
    },
    isshowclick(position) {
      //小top显示隐藏
      this.isshowtop = -position.y > 900;
      //tab-constorl显示隐藏
      this.istabshow = -position.y > this.tabConstrolTop;
    },
    loadmore() {
      this.getGoods(this.aa);
      this.$refs.scroll.scroll.refresh();
    },
    swiperimgload() {
      this.tabConstrolTop = this.$refs.tabconstrol2.$el.offsetTop;
    },

    /**
     * 网络请求相关的方法
     */
    getDatas() {
      getDatas().then(res => {
        // console.log(res);
        // 轮播图数据请求
        this.banner = res.data.banner.list;
        //轮播图下导航数据
        this.recommend = res.data.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style  scoped>
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background: var(--color-tint);
  color: aliceblue;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10; */
}
.tab-constrol {
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>
