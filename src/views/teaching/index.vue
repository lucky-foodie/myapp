<template>
  <div class="teachin">
    <heads></heads>
    <div class="teachin-bg"></div>
    <div class="teachinm">
      <router-view></router-view>
    </div>
    <foots></foots>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import heads from '@/components/basics/header.vue';
import foots from '@/components/basics/footer.vue';
import '@/font/iconfont.js';
import '@/style/animation.css';
export default {
  data() {
    return {
      show_xz: true,
      model1: '',
      show1_cl: 1,
    };
  },
  components: {
    heads,
    foots,
  },
  methods: {
    xz_dow() {
      if (this.show_xz) {
        this.show_xz = false;
      } else {
        this.show_xz = true;
      }
    },
    xz(name) {
      console.log(name);
    },
    xz() {
      this.$Notice.success({
        title: '正在下载中',
        desc: ''
          ? ''
          : 'Here is the notification description. Here is the notification description. ',
      });
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

<style lang="scss">
.teachinm {
  display: flex;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  justify-content: space-between;
  > div {
    width: 100%;
  }
}
.teachin-list {
  height: 132px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 1px 3px 2px 1px rgba(0, 0, 0, 0.05);
  margin: 15px 0px;
  > div:nth-child(1) {
    display: flex;
    width: 85%;
    > div:nth-child(1) {
      width: 92px;
      height: 108px;
      position: relative;
    }
  }
  .list-wz3 {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    > div {
      margin-top: 6px;
      padding: 0px 10px;
      border-right: 1px solid rgba(51, 51, 51, 0.23);
    }
    i {
      color: RGBA(255, 67, 66, 1);
      font-size: 22px;
    }
  }
  .list-wz2 {
    font-size: 14px;
    margin-top: 6px;
    color: #666666;
  }
  .list-wz1 {
    font-size: 20px;
    width: 100%;
    margin-top: 10px;
    display: flex;
    font-weight: 400;
    color: #343434;
    > div:nth-child(2) {
      padding: 1px 14px;
      border: 1px solid #009a44;
      border-radius: 13px;
      height: 26px;
      color: #009a44;
      font-size: 14px;
      margin: 0px 10px;
    }
    > div:nth-child(3) {
      padding: 1px 14px;
      height: 26px;
      color: rgba(250, 104, 15, 1);
      font-size: 14px;
      border: 1px solid rgba(250, 104, 15, 1);
      border-radius: 13px;
    }
  }
  .icon {
    width: 92px;
    height: 108px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
  }
  .list-bt {
    margin-top: 0px;
    margin-right: 20px;
    > div:nth-child(1) {
      width: 111px;
      height: 33px;
      background: #ffffff;
      border: 1px solid #0a76da;
      border-radius: 17px;
      color: #0a76da;
      font-size: 14px;
      padding-top: 5px;
      margin: 20px 0px;
      text-align: center;
    }
    > div:nth-child(2) {
      width: 111px;
      height: 33px;
      background: #ffffff;
      border: 1px solid rgba(255, 68, 66, 1);
      border-radius: 17px;
      color: rgba(255, 68, 66, 1);
      font-size: 14px;
      padding-top: 5px;
      margin: 5px 0px;
      text-align: center;
    }
  }
}
.teachin-right-sx {
  padding: 15px 25px;
  background-color: #fff;
  .xz {
    background: #0a76da;
    color: #fff;
    border-radius: 6px;
  }
  .shown {
    max-height: 34px;
  }
  .showd {
    max-height: 100px;
  }
  > div {
    display: flex;
    margin: 10px 0px;

    > div:nth-child(1) {
      font-size: 16px;
      font-weight: 400;
      color: #666666;
      width: 50px;
      padding-top: 5px;
    }
    > div:nth-child(2) {
      font-size: 16px;
      width: 86%;
      transition: 0.7s;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(52, 52, 52, 1);
      > p {
        padding: 5px 20px;
      }
    }
  }
}
.teachin {
  background-color: RGBA(246, 252, 255, 1);
  min-height: 99.6vh;
}
</style>
