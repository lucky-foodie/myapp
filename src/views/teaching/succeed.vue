<template>
  <div>
    <div class="succeed-main">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <Icon type="md-home" />
          首页
        </BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">
          教研中心
        </BreadcrumbItem>
        <BreadcrumbItem>
          教学资源
        </BreadcrumbItem>
      </Breadcrumb>
      <div class="succeed-main-sc">
        <div><Icon type="md-checkmark" /></div>
        <div>文件下载完成 ！</div>
        <div>
          如果文件未成功下载，请
          <span>点击重试</span>
        </div>
        <div @click="modal1 = true">
          评分
        </div>
      </div>
      <div class="succeed-list">
        <p>下载该资源的其他老师，还在下</p>
        <div class="teachin-list" v-for="item of 4" :key="item">
          <div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-opzu1349"></use>
              </svg>
              <div>asd</div>
            </div>
            <div class="ml15">
              <div class="list-wz1">
                <p>普通</p>
                人教部编版道德与法治五年级下册：3.3 我们的国粹 课件(共47张PPT)
              </div>

              <div class="list-wz3">
                <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal v-model="modal1" title="评分" @on-ok="ok" @on-cancel="cancel">
      <div>
        <p>您对资源满意吗</p>
        <Rate v-model="value" />
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import heads from '@/components/basics/header.vue';
import foots from '@/components/basics/footer.vue';
export default {
  data() {
    return {
      modal1: false,
      value: 0,
    };
  },
  components: {
    heads,
    foots,
  },
  methods: {
    tz(url) {
      this.troute.query(url);
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
.succeed-main {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  margin-top: 40px;
  position: relative;
}
.succeed {
  background-color: RGBA(246, 252, 255, 1);
  min-height: 99 5vh;
}
.succeed-main-sc {
  text-align: center;
  margin-top: 100px;
  > div > span {
    color: rgba(11, 88, 160, 1);
  }
  > div:nth-child(4) {
    width: 205px;
    height: 49px;
    background: #0a76d9;
    border-radius: 24px;
    color: #fff;
    padding-top: 12px;
    margin: 0 auto;
    margin-top: 40px;
  }
  > div:nth-child(2) {
    font-size: 19px;
    margin: 15px 0px;
    font-weight: 400;
    color: #333333;
  }
  > div:nth-child(1) {
    width: 67px;
    height: 67px;
    background-color: rgba(64, 189, 47, 1);
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
    padding-top: 15px;
    i {
      font-size: 40px;
      color: #fff;
    }
  }
}
.succeed-list {
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;

  > p {
    margin-top: 40px;
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid rgba(238, 238, 238, 1);
  }
  .teachin-list {
    height: 112px;
    width: 48%;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    padding-bottom: 10px;
    margin: 15px 0px;
    > div:nth-child(1) {
      display: flex;
      > div:nth-child(1) {
        width: 92px;
        height: 108px;
        position: relative;
        > div {
          position: absolute;
          bottom: 14px;
          left: 35px;
          color: #fff;
        }
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
      font-size: 16px;
      margin-left: 10px;
      width: 100%;
      margin-top: 10px;
      height: 60px;
      line-height: 27px;
      font-weight: 400;
      color: #343434;
      > p:nth-child(1) {
        border: 1px solid #009a44;
        border-radius: 13px;
        height: 26px;
        font-size: 12px;
        width: 70px;
        text-align: center;
        color: #009a44;
        font-size: 12px;
        margin: 0px 10px;
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
}
</style>
