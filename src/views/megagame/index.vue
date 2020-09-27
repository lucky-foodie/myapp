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
      <div>
        <img src="@/image/bmxx.png" alt="" />
      </div>
      <div>
        <div class="m-right-list">
          <div>活动流程</div>
          <div>
            <div class="m-right-bd">
              <div>01</div>
              <div>
                <p>组建工作室</p>
                <p>2020.09.08开始</p>
              </div>
            </div>
            <div class="m-right-bd">
              <div>02</div>
              <div>
                <p>作品征集</p>
                <p>2020.09.08—2020.09.08</p>
              </div>
            </div>
            <div class="m-right-bd">
              <div>03</div>
              <div>
                <p>作品评选</p>
                <p>2020.09.08—2020.09.08</p>
              </div>
            </div>
            <div class="m-right-bd">
              <div>04</div>
              <div>
                <p>现场直播名师课堂评选</p>
                <p>2020.09.08—2020.09.08</p>
              </div>
            </div>
            <div class="m-right-bd">
              <div>05</div>
              <div>
                <p>获奖公布</p>
                <p>2020.09.08</p>
              </div>
            </div>
          </div>
        </div>
        <img src="@/image/bmgz.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    tz(url) {
      this.$troute.query(url);
    },
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
  > div {
  }
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
.m-right-list {
  margin-left: 14px;
  margin-bottom: 30px;
  > div:nth-child(1) {
    width: 269px;
    height: 79px;
    font-size: 27px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    padding-top: 20px;
    padding-left: 40px;
    color: #fff;
    background: #0072ff;
    border-radius: 10px 60px 0px 0px;
  }
  > div {
    width: 464px;
    height: 460px;
    padding: 40px 10px 20px 10px;
    background: #2469bc;
  }
  .m-right-bd {
    border-left: 3px solid rgba(142, 237, 247, 1);
    margin-left: 60px;
    min-height: 80px;
    display: flex;
    > div:nth-child(1) {
      width: 47px;
      height: 47px;
      color: #2469bc;
      text-align: center;
      font-family: YouSheBiaoTiHei;
      padding-top: 7px;
      font-size: 24px;
      background: #8eedf7;
      border-radius: 50%;
      margin-left: -23.5px;
    }
    > div:nth-child(2) {
      color: #fff;
      padding-top: 5px;
      margin-left: 20px;
      > p:nth-child(1) {
        font-size: 22px;
      }
    }
  }
}
</style>
