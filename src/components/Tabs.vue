<template>
  <div id="footer-tab"> 
    <div v-for="(items,index) in list" :key="index">
        <router-link :to="items.link" tag="div" class="nav" exact-active-class="active">
            <i :class="items.icon" aria-hidden="true"></i>
            <span>{{items.name}}</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      list: [
        { link: "/", name: "首页", icon: "fa fa-home" },
        { link: "/share", name: "分享", icon: "fa fa-heart" },
        { link: "/news",name: "消息", icon: "fa fa-commenting"},
        { link: "/user", name: "我的", icon: "fa fa-user" }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "../style/main.less";
#footer-tab {
  display: flex;
  flex-flow:row nowrap;
  justify-content: space-between;
  background: #c20c0c;
  color:#fff;
  position: fixed;
  .bottom(0);
  .left(0);
  .right(0);
  .h(50);
  box-sizing: border-box;
  div {
    flex: 1;
    align-self: center;
    .h(50);
    .nav{
      display: flex;
      flex-flow:column nowrap;
      justify-content: space-around;
      i{
        .fs(18px);
        text-align: center;
      }
      span {
        .fs(16px);
        text-align: center;
      }
    }
  }
  .active {
    opacity: 0.5;
  }
}

</style>
