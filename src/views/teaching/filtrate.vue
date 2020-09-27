<template>
  <div class="teachin-main">
    <div>
      <div>
        <p>全部分类</p>
        <div class="teachin-left-xz">
          <p>
            切换分类
            <Icon type="ios-arrow-down" />
          </p>
          <div class="tree">
            <div>
              <p
                :class="xdid == item.id ? 'xz' : ''"
                v-for="(item, index) of leftlx"
                :key="index"
                @click="(leftlx2 = item.treeListList), (xdid = item.id)"
              >
                {{ item.label }}
              </p>
            </div>
            <div class="teachin-left-km">
              <div>科目：</div>
              <div>
                <div
                  :class="kmid == item.id ? 'xz' : ''"
                  v-for="(item, index) of leftlx2"
                  :key="index"
                  @click="(leftlx3 = item.treeListList), (kmid = item.id)"
                >
                  {{ item.label }}
                </div>
              </div>
            </div>
            <div class="teachin-left-km">
              <div>学科：</div>
              <div>
                <div
                  :class="xkid == item.id ? 'xz' : ''"
                  v-for="(item, index) of leftlx3"
                  :key="index"
                  @click="xkid = item.id"
                >
                  {{ item.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="teachin-select">
        <Select v-model="model1" placeholder="请选择册别">
          <Option v-for="item in xzList" :value="item.value" :key="item.value">
            {{ item.label }}
          </Option>
        </Select>
      </div>
      <div class="teachin-select">
        <Select v-model="model1" placeholder="请选择教材版本">
          <Option v-for="item in xzList" :value="item.value" :key="item.value">
            {{ item.label }}
          </Option>
        </Select>
      </div>
    </div>
    <div>
      <div class="teachin-right-sx">
        <div>
          <div>类型：</div>
          <div :class="show_xz ? 'shown' : 'showd'">
            <p
              :class="show1_cl == item.resourceTypeId ? 'xz' : 'showd'"
              @click="show1_cl = item.resourceTypeId"
              v-for="(item, index) of fllist"
              :key="index"
            >
              {{ item.resourceTypeName }}
            </p>
          </div>
          <div @click="xz_dow"><Icon :type="show_xz ? 'ios-arrow-down' : 'ios-arrow-up'" /></div>
        </div>
        <div>
          <div>等级：</div>
          <div>
            <p
              :class="show1_cl2 == item.id ? 'xz' : 'showd'"
              @click="(show1_cl2 = item.id), L_list()"
              v-for="(item, index) of flx2"
              :key="index"
            >
              {{ item.name }}
            </p>
          </div>
          <!-- <div @click="xz_dow"><Icon :type="show_xz ? 'ios-arrow-down' : 'ios-arrow-up'" /></div> -->
        </div>
      </div>
      <div class="teachin-right-main">
        <div>
          <div class="teachin-xz">
            <div @click="sxshow = 1">
              <p :class="sxshow == 1 ? 'sxshow' : ''">最新</p>
            </div>
            <div @click="sxshow = 2">
              <p :class="sxshow == 2 ? 'sxshow' : ''">最热</p>
            </div>
            <div @click="sxshow = 3">
              <p :class="sxshow == 3 ? 'sxshow' : ''">下载量</p>
            </div>
            <Select v-model="model1" style="width:200px">
              <Option
                v-for="item in lxlist"
                :value="item.resourceFormatId"
                :key="item.resourceFormatId"
              >
                {{ item.resourceFormatName }}
              </Option>
            </Select>
          </div>
          <div class="teachin-ss">
            <div class="teachin-input">
              <input v-model="aa" placeholder="请输入资源名字" type="text" name="" id="" />
              <div>
                <Icon type="md-search" />
              </div>
            </div>
            <div>
              共
              <span>{{ lblist.length }}</span>
              个结果
            </div>
          </div>
        </div>

        <div class="teachin-list" v-for="(item, index) of lblist" :key="index">
          <div @click="tz('tdetails')">
            <div class="ml">
              <pdimg :lx="item.resourceTypeIdFk"></pdimg>
            </div>
            <div>
              <div class="list-wz1">
                <div>{{ item.resourceInfoName }}</div>
                <div>普通</div>
                <div>教学设计</div>
              </div>
              <div class="list-wz2">
                {{ item.resourceInfoDescription }}
              </div>
              <div class="list-wz3">
                <div>
                  <Icon type="md-star" />
                  4.3分
                </div>
                <div>{{ item.openButton }} 阅读</div>
                <div>{{ item.resourceDownload }} 下载</div>
                <div>{{ item.uploadTime }} 上传</div>
                <!-- <div>
                  30KB
                </div> -->
                <div>作者：{{ item.resourceAuthorName }}</div>
              </div>
            </div>
          </div>
          <div class="list-bt">
            <div @click="xz">
              <Icon type="md-cloud-download" />
              点击下载
            </div>
            <div>
              <Icon type="md-heart" />
              加入收藏
            </div>
          </div>
        </div>
        <Page :total="tol * 10"  @on-change="fy" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import pdimg from '@/components/list/pdf.vue';
import '@/font/iconfont.js';
import data from '@/data/database';
import '@/style/animation.css';
import api from '@/data/api';
export default {
  data() {
    return {
      show_xz: true,
      model1: '',
      show1_cl: 1,
      show1_cl2: 1,
      aa: '',
      xdid: 1,
      kmid: 1,
      xkid: 1,
      sxshow: 0,
      list: [],
      flx2: data.flx2,
      lblist: [],
      lxlist: [],
      fllist: [],
      leftlx: [],
      leftlx2: [],
      leftlx3: [],
      tol: '',
      page: 1,
      xzList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
    };
  },
  components: {
    pdimg,
  },
  mounted() {
    this.P_post();
    this.L_list();
    AOS.init();
    console.log(this.flx2);
  },
  methods: {
    fy(page) {
      this.page = page;
      this.L_list();
      console.log(page);
    },
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
    L_list() {
      var data = {
        uploadType: this.show1_cl2,
        // pageSize: 2,
        pageIndex: this.page,
      };
      api.pdlist(data).then(res => {
        console.log(res);
        this.lblist = res.data.records;
        this.tol = res.data.pages;
      });
    },
    P_post() {
      // api.tlist().then(res => {
      //   console.log(res);
      //   this.list = res;
      // });
      var data = {
        tokenKey: 1,
        username: '唐海洋',
        password: 'MTIzNDU2',
      };
      api.login(data).then(res => {
        console.log(res.data)
      });
      // api.finBaseTree().then(res => {
      //   console.log(res);
      //   this.leftlx = res.data;
      // });

      api.pdzi().then(res => {
        console.log(res);
        this.lxlist = res.data;
      });
      api.findTypeAll().then(res => {
        this.fllist = res.data;
      });
    },
    tz(url) {
      this.$troute.query(url);
    },
    xz() {
      this.$Notice.success({
        title: '正在下载中',
        desc: '' ? '' : '',
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
.teachin-bg {
  background: url('../../image/teachin.png');
  width: 100%;
  height: 487px;
  position: absolute;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.teachin-left-xz:hover > div {
  display: block;
  animation: fadeIn 1s;
}
.teachin-select {
  text-align: center;
  margin: 20px 0px;
  .ivu-select {
    width: 262px;
    margin: 0 auto;
    background: #ffffff;
    .ivu-select-single {
      height: 50px;
      position: relative;
    }
    .ivu-select-selection {
      height: 50px;
      position: relative;
    }
  }
  .ivu-select-selection {
    height: 50px;
    position: relative;
  }
}
.teachin-left-xz {
  padding-top: 3px;
  position: relative;
  > p:nth-child(1) {
    padding-top: 3px;
    width: 95px;
    height: 32px;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }

  .teachin-left-km {
    display: flex;
    margin-top: 15px;
    margin-left: 10px;
    > div:nth-child(1) {
      color: rgba(51, 51, 51, 1);
      font-size: 16px;
      font-weight: 700;
      padding-top: 5px;
    }
    > div:nth-child(2) {
      flex-wrap: wrap;
      display: flex;
      width: 90%;
      > div {
        color: rgba(51, 51, 51, 1);
        font-size: 16px;
        padding: 0px 14px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
  > div {
    min-width: 531px;
    display: none;

    position: absolute;
    z-index: 1000;
    margin-left: -180px;
    transition: 0.4s;
    padding: 15px;
    background: #ffffff;
    box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.05);
    > div > p {
      padding: 10;
    }
    > div:nth-child(1) {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid rgba(239, 234, 234, 1);
      > p {
        color: rgba(11, 88, 160, 1);
        padding: 2px 14px;
        position: relative;
        cursor: pointer;
        min-width: 60px;
        transition: 0.6s;
      }
      > p:hover {
        background-color: rgba(11, 88, 160, 1);
        border-radius: 4px;
        color: #fff;
      }
      > p::before {
        transition: 0.6s;
        position: absolute;
        content: '';
        top: 24px;
        left: 18px;
        border-top: 9px solid transparent;

        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
      }
      > p:hover::before {
        border-top: 9px solid rgba(11, 88, 160, 1);
      }
    }
  }
}
.teachin-main {
  display: flex;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  justify-content: space-between;
  > div:nth-child(1) {
    width: 300px;
    background-color: #fff;
    > div:nth-child(1) {
      height: 68px;
      background: #0a76da;
      display: flex;
      padding: 16px;
      justify-content: space-between;
      > p:nth-child(1) {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #f7fdff;
      }
    }
  }
  > div:nth-child(2) {
    width: 889px;
  }
}
.xz {
  background: #0a76da;
  color: #fff !important;
  border-radius: 6px;
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
      padding-top: 3px;
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
        padding: 3px 20px;
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }
}
.teachin-right-main {
  margin-top: 10px;
  padding: 15px 25px;
  background-color: #fff;
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
    margin-bottom: 30px;
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
}
.sxshow {
  border-bottom: 4px solid #0a76da !important;
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
    cursor: pointer;
  }
  > div {
    /deep/ .pdf {
      > div {
        bottom: 16px;
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
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #c5c8ce;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c5c8ce;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #c5c8ce;
}
.teachin {
  background-color: RGBA(246, 252, 255, 1);
  min-height: 99 5vh;
}
</style>
