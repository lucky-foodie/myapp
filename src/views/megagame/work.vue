<template>
  <div class="megagame">
    <div class="m-header">
      <div>
        <div><img src="@/image/bm.png" alt="" /></div>
        <div>
          <p @click="tz('')">首页</p>
          <p>|</p>
          <p @click="tz('mwork')">获奖作品展示</p>
          <p @click="tz('mapply')">报名参赛</p>
        </div>
      </div>
    </div>
    <div class="m-bg"></div>
    <div class="m-main">
      <div class="apply">
        <h2>获奖作品展示</h2>
        <div>
          <img src="../../image/works.png" alt="">
          <p>敬请期待…</p>
        </div>
      </div>
    </div>
    <foots></foots>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import foots from '@/components/basics/footer.vue';

import { Uploader } from 'vant';

export default {
  data() {
    return {};
  },
  methods: {
    tz(url) {
      this.$troute.query(url);
    },
  },
  components: {
    foots,
    Uploader
  },
  computed: {
    ...mapMutations({
      mtab: 'tab',
    }),
    ...mapState({
      tille: 'tille',
    }),
  },
};
</script>

<style lang="scss" scoped>
.megagame {
  background-color: #88eaf4;
}
.m-main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: -100px;
}
.m-header {
  height: 52px;
  background: #333333;
  > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    > div:nth-child(2) {
      display: flex;
      > p {
        color: #fff;
        padding: 15px 20px;
      }
      > p:nth-child(4) {
        width: 202px;
        height: 67px;
        padding-top: 10px;
        background: #e04343;
        border-radius: 0px 0px 10px 10px;
        font-size: 28px;
        text-align: center;
        color: #fff;
        font-family: slideyouran;
        font-weight: 400;
      }
    }
  }
}
.m-bg {
  background: url(../../image/tpbm.png);
  height: 853px;
}
.apply{
  width: 1000px;
  min-height: 550px;
  margin: -300px auto 50px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  >h2{
    height: 65px;
    line-height: 65px;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: #085BC2;
  }
  div{
    margin-top: 30px;
    text-align: center;
    p{
      margin-top: 20px;
      color: #666;
      font-size: 30px;
    }
  }
  
}
</style>
