<template>
  <div class="tsudio">
    <div class="tsudio-sx">
      <h1>名师工作室</h1>
      <div class="teachin-right-sx">
        <div>
          <div>级别：</div>
          <div>
            <p
              v-for="(item, index) of jblist"
              :key="index"
              :class="jbid == item.id ? 'xz' : 'showd'"
              @click="(jbid = item.id), P_post()"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
        <div>
          <div>年级：</div>
          <div>
            <p
              v-for="(item, index) of njlist"
              :key="index"
              :class="njid == item.id ? 'xz' : 'showd'"
              @click="(njid = item.id), P_post()"
            >
              {{ item.catalogName }}
            </p>
          </div>
        </div>
        <div>
          <div>类型：</div>
          <div>
            <p
              v-for="(item, index) of kmlist"
              :key="index"
              :class="kmid == item.subjectId ? 'xz' : 'showd'"
              @click="(kmid = item.subjectId), P_post()"
            >
              {{ item.subjectName }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tsudio-main">
      <!-- <div>
        <div class="teachin-xz">
          <div>
            <p>最新</p>
          </div>
          <div>
            <p>最热</p>
          </div>
        </div>
        <div class="teachin-ss">
          <div class="teachin-input">
            <input type="text" name="" id="" />
            <div>
              <Icon type="md-search" />
            </div>
          </div>
          <div>
            共
            <span>3089</span>
            个结果
          </div>
        </div>
      </div> -->
      <div></div>
      <div class="dis-w dis ">
        <div class="tsudio-list" v-for="(item, index) of list" :key="index">
          <div><img :src="item.workspaceAvatar" alt="" /></div>
          <div>
            <div v-if="item.workSpaceFloor == 1">县级</div>
            <div v-if="item.workSpaceFloor == 2">市级</div>
            <div v-if="item.workSpaceFloor == 3">省级</div>
            <div>{{ item.workspaceName }}</div>
            <div>{{ item.workspaceIntroduce }}</div>
            <div>创建人：{{ item.workspaceCreator }}</div>
            <div>进入工作室</div>
          </div>
          <div>
            <img src="../../image/ewm.png" alt="" />
            <div class="tree">
              <p>请使用钉钉扫码二维码申请加入</p>
              <p></p>
            </div>
          </div>
          <div class="" v-if="index == 0">
            <img src="../../image/top.png" alt="" />
          </div>
          <div class="" v-if="index == 1">
            <img src="../../image/er.png" alt="" />
          </div>
          <div class="" v-if="index == 2">
            <img src="../../image/san.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import api from '@/data/api';
import data from '@/data/database';
export default {
  data() {
    return {
      show1_cl: 1,
      njlist: [],
      kmlist: [],
      jblist: data.jbdata,
      njid: null,
      kmid: null,
      jbid: null,
      list: [],
    };
  },
  mounted() {
    this.P_post();
    this.l_get();
    this.jblist = data.jbdata;
    console.log();
  },
  methods: {
    tz(url) {
      this.troute.query(url);
    },
    l_get() {
      api.workspace().then(res => {
        console.log(res);
        this.njlist = res.data;
      });
      api.workspace_2().then(res => {
        console.log(res);
        this.kmlist = res.data;
      });
    },
    P_post() {
      var data = {
        // workspaceType: 1,
      };
      if (this.jbid) {
        data.workSpaceFloor = this.jbid;
      }
      if (this.njid) {
        data.workSpaceGrade = this.njid;
      }
      if (this.kmid) {
        data.subjectId = this.kmid;
      }
      console.log(data);
      api.findWorkSpace(data).then(res => {
        console.log(res);
        this.list = res.data.records;
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
<style lang="scss" scoped>
.tsudio-sx {
  background-color: #fff;
  padding: 20px;
  width: 100%;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
  }
}
.tsudio {
  width: 100%;
}
.teachin-right-sx {
  background-color: #fff;
  padding: 0px;
  > div > div:nth-child(2) > p {
    padding: 2px 20px;
    margin-top: 3px;
    cursor: pointer;
    transition: 0.4s;
  }
}

.teachin-xz {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #343434;
  .ivu-dropdown {
    border: 1px solid #333;
    border-radius: 5px;
    padding: 5px 7px;
    padding-top: 3px;
    height: 30px;
    font-size: 14px;
  }
  > div {
    padding-right: 40px;
    > p {
      padding-bottom: 15px;
      transition: 0.4s;
      cursor: pointer;
      border-bottom: 4px solid transparent;
    }
  }
  > div:hover p {
    border-bottom: 4px solid rgba(10, 118, 218, 1);
  }
}
.tsudio-main {
  margin-top: 10px;
  padding: 15px 25px;
  background-color: #fff;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  overflow: hidden;
  .teachin-input {
    background: #ffffff;
    width: 260px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: space-between;
    padding: 0px 6px;
    > div {
      padding-top: 4px;
      i {
        font-size: 28px;
        color: rgba(154, 154, 154, 1);
      }
    }
  }
  > div:nth-child(1) {
    border-bottom: 1px solid rgba(52, 52, 52, 0.26);
    justify-content: space-between;
    margin-bottom: 40px;
    display: flex;
    > div:nth-child(1) {
      display: flex;
    }
  }
  .teachin-ss {
    display: flex;
    > div:nth-child(2) {
      padding-top: 10px;
      padding-left: 20px;
      color: rgba(154, 154, 154, 1);
      > span {
        color: rgba(163, 5, 5, 1);
      }
    }
  }
  .teachin-xz {
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #343434;
    .ivu-dropdown {
      border: 1px solid #333;
      border-radius: 5px;
      padding: 5px 7px;
      padding-top: 3px;
      height: 30px;
      font-size: 14px;
    }
    > div {
      padding-right: 60px;
      > p {
        padding-bottom: 15px;
        transition: 0.4s;
        cursor: pointer;
        border-bottom: 4px solid transparent;
      }
    }
    > div:hover p {
      border-bottom: 4px solid rgba(10, 118, 218, 1);
    }
  }
}
.tsudio-list {
  width: 31%;
  height: 284px;
  padding: 15px;
  margin: 12px;
  background: #ffffff;
  border: 1px solid #fff;
  border-width: 5px 5px 5px 5px;
  box-shadow: 1px 1px 5px #d2d2d2;
  -webkit-box-shadow: 1px 1px 5px #d2d2d2;
  -moz-box-shadow: 1px 1px 5px #d2d2d2;
  display: flex;
  position: relative;

  justify-content: space-between;
  > div:nth-child(3):hover div {
    display: block;
    animation: fadeInRight 0.3s;
  }
  > div:nth-child(4) {
    position: absolute;
    top: -54px;
  }
  > div:nth-child(3) {
    position: absolute;
    width: 38px;
    height: 37px;
    right: 0;
    top: 0;
    > img {
      width: 100%;
      height: 100%;
    }
    > div {
      background-color: rgba(110, 208, 246, 1);
      width: 345px;
      display: none;
      transition: 0.4s;
      margin-left: -313px;
      position: absolute;
      left: 0px;
      top: 0;
      color: #fff;
      text-align: center;
      height: 270px;
    }
  }
  > div:nth-child(1) {
    width: 150px;
    height: 244px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  > div:nth-child(2) {
    width: calc(100% - 167px);
    > div:nth-child(1) {
      display: inline-block;
      border: 1px solid #00a0e9;
      border-radius: 20px;
      color: #00a0e9;
      padding: 2px 20px;
    }
    > div:nth-child(2) {
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #333333;
      margin-top: 10px;
    }
    > div:nth-child(3) {
      font-size: 14px;
      margin-top: 10px;
      font-weight: 400;
      color: #999999;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      height: 64px;
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    > div:nth-child(4) {
      font-size: 14px;
      margin-top: 40px;

      font-weight: 400;
      color: #999999;
    }
    > div:nth-child(5) {
      background: #0a76d9;
      text-align: center;
      margin-top: 20px;
      color: #fff;
      padding: 5px 10px;
      border-radius: 16px;
    }
  }
}
</style>
