<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
     pullUpLoad:{
       type:Boolean,
       default(){
         return false
       }
     }
  },
  data() {
    return {
      scroll: null,
     
    };
  },
  //当我们把模板template挂载到Dom上之后，会回调下面这个生命周期函数
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //2.监听滚动位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
     this.$emit('scroll', position)
      
    })
    //3.监听上拉加载更多
  this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
    this.$refs.scroll.finishPullUp()
  })
  },
  methods: {
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    }
  }
};
</script>

<style  scoped>
</style>
