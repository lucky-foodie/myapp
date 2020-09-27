<template>
  <div class="mian">
    <h2 class="xx">消息</h2>
    <div class="message-list">
      <div>
        <span class="iconfont icon-xiaoxi"></span>
      </div>
      <div>
        <div>
          <p>工作通知</p>
          <p>5分钟前</p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="message-list hy">
      <div>
        <span class="iconfont icon-huiyi"></span>
      </div>
      <div>
        <div>
          <p>会议提醒</p>
          <p>5分钟前</p>
        </div>
        <div>
          <p>我校领导会见参加庆祝中华人民共和国成立7...</p>
          <p>2</p>
        </div>
      </div>
    </div>
    <div class="message-list db">
      <div>        <span class="iconfont  icon-renwu1"></span></div>
      <div> 
        <div>
          <p>工作通知</p>
          <p>5分钟前</p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "@/data/database";
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      glist: data
    };
  },
  mounted() {},
  methods: {
    ...mapActions({
      tille2: "tille"
    }),
    tz(url, name) {
      this.tille2(name);
      this.$troute.query(url);
    }
  },
  computed: {
    ...mapMutations({
      tille: "tille"
    })
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/Mannerism.scss";
$main-15: 15px;
.main{
  width: 100%;
}
.message-list {
  padding: 15px;
  width: 100%;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid rgba(189, 189, 189, 0.3);
  > div:nth-child(1) {
    width: 46px;
    height: 46px;
    background: linear-gradient(6deg, rgba(255, 68, 3, 1), rgba(255, 97, 2, 1));
    box-shadow: 0px 4px 5px 0px rgba(255, 92, 2, 0.26);
    border-radius: 50%;
    text-align: center;
    padding-top: 5px;
    span {
      color: #fff;
      font-size: 24px;
    }
  }
  > div:nth-child(2) {
    width: calc(100% - 46px);
    > div:nth-child(2) {
      display: flex;
      padding-left: 10px;
      justify-content: space-between;
      > p:nth-child(1) {
        font-size: 11px;
        margin-top: 5px;
        color: rgba(153, 153, 153, 1);
      }
      > p:nth-child(2) {
        width: 20px;
        height: 20px;
        font-size: 6px;
        color: #fff;
        text-align: center;
        background: rgba(230, 0, 18, 1);
        border-radius: 50%;
      }
    }
    > div:nth-child(1) {
      display: flex;
      padding-left: 10px;
      justify-content: space-between;
      > p:nth-child(1) {
        font-size: 15px;

        color: rgba(51, 51, 51, 1);
        font-weight: bold;
      }
      > p:nth-child(2) {
        font-size: 11px;

        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
.hy {
  > div:nth-child(1) {
    background: linear-gradient(
      6deg,
      rgba(255, 186, 0, 1),
      rgba(255, 133, 2, 1)
    );
    box-shadow: 0px 4px 5px 0px rgba(255, 153, 1, 0.26);
  }
}
.db {
  > div:nth-child(1) {
background:linear-gradient(1deg,rgba(0,208,133,1),rgba(22,190,140,1));
box-shadow:0px 4px 5px 0px rgba(12,198,137,0.26)
  }
}
.xx {
  font-size: 18px;

  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 27px;

  padding: 10px;
  padding-left: 15px;
  background-color: #fff;
}
</style>
