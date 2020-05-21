<template>
<!-- home组件 轮播图下导航栏 -->
  <div class="nav">
    <div v-for="(i,index) in recommend" :key="index" class="nav-div">
      <a :href="i.link">
        <img :src="i.image" alt />
        <div>{{i.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
 
};
</script>

<style  scoped>
.nav{
  display: flex;
  text-align: center;
  padding: .625rem 0 1.875rem;
  border-bottom: .625rem solid #eee;
  font-size: .75rem;
}
.nav-div{
  flex: 1;
  
}
 .nav-div img{
    height: 4.375rem;
    width: 4.375rem;
    margin-bottom: .5rem;
  }

</style>
