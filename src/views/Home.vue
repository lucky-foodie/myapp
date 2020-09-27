<template>
  <div class="main">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <van-tabbar v-model="active" active-color="#E60012">
      <van-tabbar-item icon="wap-home-o"  name="mhome" @click="tz('mhome')">首页</van-tabbar-item>
      <!-- <van-tabbar-item icon="chat-o" name="mmessage" @click="tz('mmessage')">消息</van-tabbar-item> -->
      <van-tabbar-item icon="apps-o" name="mapply" @click="tz('mapply')">应用</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 'mhome'
    };
  },
  mounted() {
    this.active=this.tab
    this.$troute.query(this.tab);
  },
  methods: {
    ...mapMutations({
      mtab: "tab"
    }),
    tz(url) {
      this.mtab(url);
      this.$troute.query(url);
    }
  },
  computed: {
    ...mapState({
      tab: "tab"
    })
  }
};
</script>
<style lang="scss" scoped>
.main{
  padding-bottom: 50px;
  display: inline-block;
}
</style>
