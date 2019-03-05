<template>
  <div id="footer-tab"> 
    <div v-for="(items,index) in list" :key="index">
        <router-link :to="items.link" exact-active-class="active">
            <i :class="items.icon" aria-hidden="true"></i>
            <span>{{items.name}}</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterTab",
  data() {
    return {
      list: [
        { link: "/", name: "首页", icon: "fa fa-universit" },
        { link: "/share", name: "分享", icon: "fa fa-heart-o" },
        { link: "/user", name: "我的", icon: "fa fa-user" }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "../../style/main.less";
#footer-tab {
  display: flex;
  flex-flow: column;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  .bottom(0);
  .left(0);
  .right(0);
  .h(50);
  box-sizing: border-box;
  border-top: 1px solid #e7e7e7;
  div {
    flex: 1;
    align-self: center;
    .h(50);
    color: #929292;
    .pd-top(5);
    i {
      display: block;
      .fs(20px);
      text-align: center;
      .mg(0, 0, 3, 0);
    }
    span {
      display: block;
      .fs(13px);
      text-align: center;
    }
  }
  .active {
    color: #fd3412 !important;
  }
}

</style>
