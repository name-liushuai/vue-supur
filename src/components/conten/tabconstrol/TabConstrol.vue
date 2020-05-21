<template>
<!-- 流行，新款，精选导航栏组件 -->
  <div class="tab-item">
    <div
      v-for="(i,index) in title"
      :key="index"
      class="tab-item-i"
      :class="{active:index===aaa}"
      @click="itemclick(index)"
    >
      <span>{{i}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabConstrol",
  props: {
    title: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  data() {
    return {
      aaa: 0
    };
  },
  methods: {
    itemclick(index) {
      this.aaa = index;
      this.$emit('itemclick',index)
    }
  }
};
</script>

<style  scoped>
.tab-item {
  display: flex;
  text-align: center;
  background: #fff;
}
.tab-item-i {
  flex: 1;
  height: 2.5rem;
  line-height: 2.5rem;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 0.1875rem solid var(--color-tint);
}
</style>
