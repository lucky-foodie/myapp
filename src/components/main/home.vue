<template>
  <div class="mian">
    <div class="main-top">
      <van-notice-bar left-icon="volume-o" mode="link" text="协同办公系统" />
    </div>
    <div class="main-cybg">
      <div class="main-cybg-wz">
        <p>常用办公</p>
        <p @click="tz('mapply','全部应用')">更多应用</p>
      </div>
      <div class="main-jgg">
        <div v-for="(items,index) of glist" :key="index" @click="tz(items.path,items.name)">
          <div>
            <span class="iconfont" :class="items.iocn"></span>
          </div>
          <p>{{items.name}}</p>
        </div>
      </div>
    </div>
    <div class="main-dbl">
      <div class="main-dbl-wz">
        <div :class="id==''?'dbl-avtie':''   " @click="qh('')">
          <p>待办</p>
          <!-- <p>18</p> -->
        </div>
        <div :class="id=='huxxgw-xwsw'?'dbl-avtie':''   " @click="qh('huxxgw-xwsw')">
          <p>待阅</p>
          <!-- <p>123</p> -->
        </div>
      </div>
      <van-cell
        is-link
        v-for="(items,index) of  m_list"
        :key="index"
        @click="tz2('mdetails',items.taskId,items.id,items.editable,items.groupId)"
      >
        <template #title>
          <div class="main-dbl-list">{{items.title}}</div>
        </template>
        <template #label>
          <div class="main-dbl-list2">{{items.approveUserName}}&nbsp;{{items.sendStatus}}</div>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
import data from "@/data/database";
import api from "@/data/api";
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
      glist: data.glist,
      glist2: [],
      m_list: [],
    };
  },
  mounted() {
    this.mlist();
  },
  methods: {
    ...mapActions({
      tille2: "tille",
    }),
    ...mapMutations({
      mtab: "tab",
      data_josn: "data_josn",
      qx_data: "qx_data",
      user_data: "user_data",
    }),
    qh(id) {
      this.id = id;
      this.mlist();
    },
    mlist() {
      var data = {
        page: 1,
        limit: 5,
        catalog: this.id,
      };
      api.text(data).then((res) => {
        console.log(res);
        this.m_list = res.list;
      }); 
      api.home_user().then((res) => {
        console.log(res);
        this.user_data(res.users)
      });
      api.home_qx().then((res2) => {
        this.qx_data(res2);
        for (let i in res2) {
          for (let i2 in this.glist) {
            if (res2[i].nodename == this.glist[i2].name) {
              if (res2[i].state == true) {
                this.glist2.push(this.glist[i2]);
              }
            }
          }
        }
        console.log(this.glist2);
      });
    },
    tz(url, name) {
      this.tille2(name);
      var data = {
        re: false,
      };
      this.$troute.query(url, data);
    },
    tz2(url, taskid, id, editable, groupId) {
      if(this.id!="huxxgw-xwsw"){
        var a='forapprove'
      }
      else{
        var a=""
      }
      var Data = {
        taskid: taskid,
        id: id,
        editable,
        groupId,
        st: a,
      };
      this.data_josn(Data);
      var data = {
        re: false,
      };
      this.$troute.query(url, data);
    },
  },
  computed: {
    ...mapMutations({
      tille: "tille",
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/Mannerism.scss";
$main-15: 15px;
.main-top {
  height: 135px;
  padding-top: 20px;
  background: rgba(230, 0, 18, 1);
  .van-notice-bar {
    color: #fff;
    background-color: transparent;
  }
}
.main-cybg {
  background: #fff;
  margin: $main-15;
  border-radius: 2px;
  margin-top: -70px;
  box-shadow: 0px 2px 3px 0px rgba(218, 215, 211, 0.47);
}
.main-cybg-wz {
  display: flex;
  @include db;
  padding: $main-15;
  > p:nth-child(1) {
    font-size: 18px;

    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  > p:nth-child(2) {
    font-size: 14px;
    font-weight: 500;
    margin-top: 4px;
    color: rgba(51, 51, 51, 0.8);
  }
}
.main-jgg {
  display: flex;
  padding: $main-15;
  padding-top: 0px;
  padding-bottom: 5px;
  flex-wrap: wrap;
  div {
    line-height: 46px;
  }

  span {
    font-size: 30px;
    color: #fff;
  }
  text-align: center;
  > div:nth-child(2) {
    > div:nth-child(1) {
      background: linear-gradient(
        1deg,
        rgba(255, 186, 0, 1),
        rgba(255, 133, 2, 1)
      );
      box-shadow: 0px 4px 5px 0px rgba(255, 145, 2, 0.26);
    }
  }
  > div:nth-child(3) {
    > div:nth-child(1) {
      span {
        font-size: 24px;
      }

      background: linear-gradient(
        1deg,
        rgba(63, 143, 255, 1),
        rgba(6, 89, 205, 1)
      );
      box-shadow: 0px 4px 5px 0px rgba(44, 125, 238, 0.26);
    }
  }
  > div:nth-child(4) {
    > div:nth-child(1) {
      background: linear-gradient(
        1deg,
        rgba(133, 42, 151, 1),
        rgba(182, 61, 206, 1)
      );
      box-shadow: 0px 4px 5px 0px rgba(144, 46, 163, 0.26);
    }
  }
  > div:nth-child(5) {
    > div:nth-child(1) {
      background: linear-gradient(
        6deg,
        rgba(63, 143, 255, 1),
        rgba(6, 89, 205, 1)
      );
      box-shadow: 0px 4px 5px 0px rgba(16, 98, 213, 0.26);
    }
  }
  > div:nth-child(6) {
    > div:nth-child(1) {
      background: linear-gradient(
        1deg,
        rgba(255, 68, 3, 1),
        rgba(255, 97, 2, 1)
      );
      box-shadow: 0px 4px 5px 0px rgba(255, 74, 3, 0.26);
    }
  }
  > div:nth-child(7) {
    > div:nth-child(1) {
      span {
      }

      background: linear-gradient(
        1deg,
        rgba(0, 208, 133, 1),
        rgba(22, 190, 140, 1)
      );
  
      box-shadow: 0px 4px 5px 0px rgba(12, 198, 137, 0.26);
    }
  }
  > div:nth-child(8) {
    > div:nth-child(1) {
      background: linear-gradient(
        1deg,
        rgba(255, 186, 0, 1),
        rgba(255, 133, 2, 1)
      );
      box-shadow: 0px 4px 5px 0px rgba(255, 144, 2, 0.26);
    }
  }
  > div {
    width: 25%;
    margin-bottom: 8px;
    > div:nth-child(1) {
      width: 46px;
      height: 46px;
      margin: 0 auto;
      background: linear-gradient(
        6deg,
        rgba(36, 194, 255, 1),
        rgba(3, 175, 246, 1)
      );
      border-radius: 50%;
    }
    > p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 35px;
    }
  }
}
.main-dbl {
  margin: $main-15;
  background-color: #fff;
  .dbl-avtie {
    border-bottom: 3px solid rgba(230, 0, 18, 1);
  }
  .main-dbl-wz {
    display: flex;
    padding: 10px 15px;
    border-bottom: 1px #999999;
    > div {
      transition: 0.3s;
      display: flex;
      margin-right: 20px;
      height: 30px;
      > p {
        font-weight: bold;
      }
      > p:nth-child(2) {
        display: inline-block;
        height: 18px;
        padding: 0px 6px;
        border-radius: 12px;
        font-size: 9px;
        background-color: #e60012;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 240, 241, 1);
      }
    }
  }
}
.main-dbl-list {
}
.main-dbl-list2 {
  color: rgba(16, 195, 138, 1);
}
</style>
