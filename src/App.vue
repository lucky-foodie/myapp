<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    var data = {
      transitionName: '',
    };
    return data;
  },
};
</script>
<style lang="scss">
@import '/style/Mannerism.scss'; //全局颜色变量
@import '/style/style.scss'; //全局样式
@import '/style/animation.css';
.butsc {
  position: relative;
  bottom: 0;
  margin-top: 52px;
  width: 100%;
}
.van-popup {
  max-height: 60vh !important;
  .van-button {
    position: absolute;
    bottom: 0;
  }
}
#app {
  font-family: PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color: #fff;
  color: #2c3e50;
  min-height: 99.5vh;
  font-size: 14px;
  width: 100%;
  height: 100%;
}
.thome_jxzy_list,
.list-bt > div,
.deleted-list,
.tsudio-list > div:nth-child(2) > div:nth-child(5) {
  cursor: pointer;
}
/*写项目时候，删掉下面css*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0.1;
}
.ivu-page {
  text-align: center;
}
.teachin-select {
  text-align: center;
  margin: 20px 0px;
  .ivu-select {
    width: 262px;
    margin: 0 auto;
    background: #ffffff;
    .ivu-select-single {
      height: 40px;
      padding-top: 10px;
      position: relative;
    }
    .ivu-select-selection {
      height: 40px;
      padding-top: 5px;
      position: relative;
    }
  }
}
.teachin-bg {
  background: url('@/../image/teachin.png');
  width: 100%;
  height: 487px;
  position: absolute;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>
