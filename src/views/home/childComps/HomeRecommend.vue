<template>
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
  padding: 10px 0 30px;
  border-bottom: 10px solid #eee;
  font-size: 12px;
}
.nav-div{
  flex: 1;
  
}
 .nav-div img{
    height: 70px;
    width: 70px;
    margin-bottom: 8px;
  }

</style>
