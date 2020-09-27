<template>
  <div class="">
    <div class="tdetail-top">
      <div class="teachin-list">
        <div>
          <pdimg :lx="1"></pdimg>
          <div>
            <div class="list-wz1">
              <div></div>
              <div>普通</div>
              <div>教学设计</div>
            </div>
            <div class="list-wz2">
              人教版（2019）/ 必修（第一册）/第一章 集合与常用逻辑/1.1 集合概念
            </div>
            <div class="list-wz3">
              <div>
                <Icon type="md-star" />
                4.3分
              </div>
              <div>
                15阅读
              </div>
              <div>
                1下载
              </div>
              <div>
                2020-01-08上传
              </div>
              <div>
                30KB
              </div>
              <div>
                作者：林娜娜
              </div>
            </div>
          </div>
        </div>
        <div class="list-bt">
          <div>
            <Icon type="md-cloud-download" />
            点击下载
          </div>
          <div>
            <Icon type="md-heart" />
            加入收藏
          </div>
        </div>
      </div>
    </div>
    <div class="tdetail-main">
      <div>123</div>
      <div>
        <div class="tdetail-right-top">
          <div>
            <Rate v-model="value" />
            <p>126 人评价</p>
            <div>李江华工作室</div>
          </div>
          <div>5.0</div>
        </div>
        <div class="tdetail-right-list">
          <div>
            <div>推荐</div>
            <div>资源</div>
          </div>
          <div class="deleted-list">
            <div><pdimg :lx="1"></pdimg></div>
            <div>
              人教部编版道德与法治五年级下 册：3.3 我们的国粹 课件(共47张PPT)
              <div>4.3分 | 12 阅读 | 1下载</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import pdimg from '@/components/list/pdf.vue';
export default {
  data() {
    return {};
  },
  methods: {
    tz(url) {
      this.troute.query(url);
    },
  },
  components: {
    pdimg,
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
.tdetail-top {
  width: 1207px;
  height: 162px;
  background: #ffffff;
  box-shadow: 0px 6px 2px 0px rgba(7, 73, 99, 0.06);
  padding: 15px;
  .list-bt {
    display: flex;
    > div:nth-child(1) {
      background: #0a76da;
      color: #fff;
    }
    > div:nth-child(2) {
      background: rgba(255, 67, 66, 1);
      color: #fff;
      margin: 20px 0px;
      margin-left: 20px;
    }
  }
  .teachin-list {
    box-shadow: inherit;
  }
  .list-wz2 {
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-left: 10px;
  }
}

.tdetail-main {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  > div:nth-child(1) {
    width: 840px;
    height: 865px;
    background: #ffffff;
    box-shadow: 0px 6px 2px 0px rgba(7, 73, 99, 0.06);
  }
  > div:nth-child(2) {
    width: 351px;
    > div:nth-child(1) {
      width: 351px;
      height: 156px;
      background: #ffffff;
      padding: 20px;
      box-shadow: 0px 6px 2px 0px rgba(7, 73, 99, 0.06);
    }
  }
}
.tdetail-right-top {
  display: flex;
  justify-content: space-between;
  .ivu-rate {
    font-size: 32px;
  }
  > div:nth-child(2) {
    font-size: 36px;
    font-family: Helvetica;
    font-weight: bold;
    color: #ff4342;
  }
  > div:nth-child(1) {
    > div:nth-child(3) {
      width: auto;
      display: inline-block;
      padding: 5px 20px;
      margin-top: 10px;
      border: 1px solid #00a0e9;
      border-radius: 15px;
      text-align: center;
      padding-top: 2px;
      font-size: 14px;
      color: #00a0e9;
    }
  }
}
.tdetail-right-list {
  background-color: #fff;
  margin-top: 15px;
  padding: 15px;
  > div:nth-child(1) {
    display: flex;
    font-size: 20px;
    > div:nth-child(1) {
      padding-bottom: 10px;
      border-bottom: 3px solid rgba(10, 118, 217, 1);
    }
  }
}
.deleted-list {
  display: flex;
  > div:nth-child(2) {
    padding-top: 10px;
    font-size: 15px;
    > div {
      color: rgba(102, 102, 102, 1);
    }
  }
}
</style>
