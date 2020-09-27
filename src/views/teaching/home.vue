<template>
  <div class="">
    <heads></heads>
    <div class="thome-lbt">
      <!-- <img src="@/image/jyzx.png" alt="" @click="tz('mapply')"/> -->
      <Carousel autoplay loop @on-click="tz('mindex')">
        <CarouselItem>
            <div class="demo-carousel">
              <img src="@/image/jyzx.png" alt="" width="1200px"/>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <img src="@/image/szjy.jpg" alt="" width="1200px"/>
            </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="thome_12">
      <div>
        <div class="thome_tille-bt">
          <div><img src="@/image/h1.jpg" alt="" /></div>
          <div>芙蓉名师</div>
          <div><img src="@/image/fgx.png" alt="" /></div>
        </div>
        <div class="thome_frms">
          <div class="thome_list">
            <div><img src="@/image/adm.jpg" alt="" /></div>
            <div>高级教师 | 名校毕业 | 从教五年</div>
            <div>陈印</div>
            <div>
              <div>
                <p>课件</p>
                <p>145</p>
              </div>
              <div>
                <p>视频</p>
                <p>67</p>
              </div>
              <div>
                <p>活跃度</p>
                <p>450</p>
              </div>
            </div>
          </div>
          <div class="thome_list">
            <div><img src="@/image/adm2.jpg" alt="" /></div>
            <div>高级教师 | 名校毕业 | 从教四年</div>
            <div>翁美玲</div>
            <div>
              <div>
                <p>课件</p>
                <p>140</p>
              </div>
              <div>
                <p>视频</p>
                <p>167</p>
              </div>
              <div>
                <p>活跃度</p>
                <p>350</p>
              </div>
            </div>
          </div>
          <div class="thome_list">
            <div><img src="@/image/adm3.jpg" alt="" /></div>
            <div>高级教师 | 名校毕业 | 从教六年</div>
            <div>吴刚</div>
            <div>
              <div>
                <p>课件</p>
                <p>245</p>
              </div>
              <div>
                <p>视频</p>
                <p>86</p>
              </div>
              <div>
                <p>活跃度</p>
                <p>650</p>
              </div>
            </div>
          </div>
          <div class="thome_list">
            <div><img src="@/image/adm4.jpg" alt="" /></div>
            <div>高级教师 | 名校毕业 | 从教八年</div>
            <div>于曼丽</div>
            <div>
              <div>
                <p>课件</p>
                <p>175</p>
              </div>
              <div>
                <p>视频</p>
                <p>167</p>
              </div>
              <div>
                <p>活跃度</p>
                <p>750</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="thome_tille-bt mb50">
          <div><img src="@/image/h2.jpg" alt="" /></div>
          <div>名师工作室</div>
          <div><img src="@/image/fgx.png" alt="" /></div>
          <div @click="tz('tstudio')">更多</div>
        </div>
        <div class="thome_frms" data-aos="fade-up">
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

      <div>
        <div class="thome_tille-bt">
          <div><img src="@/image/h1.jpg" alt="" /></div>
          <div>教学资源</div>
          <div><img src="@/image/fgx.png" alt="" /></div>
          <div @click="tz('tfiltrate')">更多</div>
        </div>
        <div class="thome_frms" data-aos="fade-up">
          <div class="thome_jxzy">
            <div>
              <div>备课</div>
              <div>视频</div>
            </div>
            <div
              class="thome_jxzy_list"
              @click="tz('tdetails')"
              v-for="(item, index) of lblist"
              :key="index"
            >
              <pdimg :lx="item.resourceTypeIdFk"></pdimg>
              <div>
                <div>{{ item.resourceInfoName }}</div>
                <div>
                  {{ item.resourceInfoDescription }}
                </div>

                <div>
                  <div>2019</div>
                </div>
              </div>
              <Icon type="ios-download-outline" />
            </div>
          </div>
          <div class="thome_jxzy">
            <div>
              <div>备课</div>
              <div>课件</div>
            </div>
            <div class="thome_jxzy_list" v-for="i of 5" :key="i">
              <pdimg :lx="1"></pdimg>
              <div>
                <div>人教部编版道德与法治五年级下册：3.3 我们的国粹 课件</div>
                <div>人教A版（2019）/必修/ 第一章 集合与常用逻辑用词</div>
                <div>
                  <div>2019</div>
                </div>
              </div>

              <Icon type="ios-download-outline" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="thome_tille-bt">
          <div><img src="@/image/h4.jpg" alt="" /></div>
          <div>教学联盟</div>
          <div><img src="@/image/fgx.png" alt="" /></div>
          <div>更多</div>
        </div>
        <div class="thome_frms dis-w" data-aos="fade-up">
          <div class="thome_jxlm">
            <div>
              <p>省级教育联盟活动</p>
              <p>征集小学数学学科工作室</p>
              <p>发起人：李老师 发起时间：2020.08.09至2020.09.09</p>
            </div>
            <div><img src="@/image/js.png" alt="" /></div>
          </div>
          <div class="thome_jxlm">
            <div>
              <p>省级教育联盟活动</p>
              <p>征集初中语文学科工作室</p>
              <p>发起人：陈老师 发起时间：2020.09.09至2020.10.09</p>
            </div>
            <div><img src="@/image/js.png" alt="" /></div>
          </div>
          <div class="thome_jxlm">
            <div>
              <p>省级教育联盟活动</p>
              <p>征集高中英语学科工作室</p>
              <p>发起人：王老师 发起时间：2020.08.20至2020.11.20</p>
            </div>
            <div><img src="@/image/js.png" alt="" /></div>
          </div>
          <div class="thome_jxlm">
            <div>
              <p>省级教育联盟活动</p>
              <p>征集高中物理学科工作室</p>
              <p>发起人：刘老师 发起时间：2020.08.09至2020.08.09</p>
            </div>
            <div><img src="@/image/js.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <foots></foots>
  </div>
</template>
<script>
import pdimg from '@/components/list/pdf.vue';
import heads from '@/components/basics/header.vue';
import foots from '@/components/basics/footer.vue';
import api from '@/data/api';
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      list: [],
      lblist: [],
    };
  },
  mounted() {
    AOS.init();
    this.P_post();
  },

  methods: {
    P_post() {
      var data = {
        pageSize: 5,
      };
      api.pdlist(data).then(res => {
        console.log(res);
        this.lblist = res.data.records;
      });
      var data = {
        pageSize: 3,
      };
      api.findWorkSpace(data).then(res => {
        console.log(res);
        this.list = res.data.records;
      });
    },
    tz(url) {
      this.$troute.query(url);
    },
  },
  components: {
    heads,
    foots,
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
.thome_frms {
  display: flex;
  justify-content: space-between;
}
.thome_list {
  width: 279px;
  height: 392px;
  background: #ffffff;
  text-align: center;
  border: 1px solid #fff;
  border-width: 5px 5px 5px 5px;
  box-shadow: 1px 1px 5px #d2d2d2;
  -webkit-box-shadow: 1px 1px 5px #d2d2d2;
  -moz-box-shadow: 1px 1px 5px #d2d2d2;
  img {
    width: 100%;
  }
  > div:nth-child(2) {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    margin: 20px 0px;
    text-align: center;
    color: #0b76d9;
  }
  > div:nth-child(3) {
    font-size: 22px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    margin-bottom: 25px;
    color: #343434;
  }
  > div:nth-child(4) {
    display: flex;
    > div {
      width: 33%;
      > p:nth-child(2) {
        font-size: 30px;
        font-family: Helvetica;
        font-weight: bold;
        color: #0b76d9;
      }
    }
  }
}
.thome-lbt {
  height: 559px;
  width: 1200px;
  margin: 0 auto;
  background: url(../../image/jxzx_bg.jpg) no-repeat;
  text-align: center;
  padding-top: 30px;
  overflow: hidden;
}
.thome_tille-bt {
  display: flex;
  margin: 30px 0px;
  > div:nth-child(1) {
    width: 56px;
    height: 56px;
    min-width: 56px;
    background: #0a76da;
    text-align: center;
    padding-top: 10px;
    border-radius: 50%;
  }
  > div:nth-child(2) {
    font-size: 24px;
    margin: 10px 10px 0px 15px;
    min-width: 120px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #343434;
  }
  > div:nth-child(3) {
    width: auto;
    padding-top: 15px;
    overflow: hidden;
  }
  > div:nth-child(4) {
    min-width: 60px;
    padding-left: 14px;
    cursor: pointer;
    transition: 0.4s;
    padding-top: 15px;
  }
  > div:nth-child(4):hover {
    color: #00a0e9;
  }
}
.thome_12 {
  width: 1200px;
  margin: 0 auto;
}
.tsudio-list {
  width: 32%;
  height: 284px;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #fff;
  border-width: 5px 5px 5px 5px;
  box-shadow: 1px 1px 5px #d2d2d2;
  -webkit-box-shadow: 1px 1px 5px #d2d2d2;
  -moz-box-shadow: 1px 1px 5px #d2d2d2;
  display: flex;
  position: relative;

  justify-content: space-between;
  img {
    width: 100%;
    height: 100%;
  }
  > div:nth-child(3):hover div {
    display: block;
    animation: fadeIn 0.3s;
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
      width: 365px;
      display: none;
      transition: 0.4s;
      margin-left: -333px;
      position: absolute;
      left: 0px;
      top: 2px;
      color: #fff;
      text-align: center;
      height: 270px;
    }
  }
  > div:nth-child(1) {
    width: 150px;
    height: 244px;
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
      color: #333333;
      margin-top: 10px;
    }
    > div:nth-child(3) {
      font-size: 14px;
      margin-top: 10px;
      font-weight: 400;
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
.mb50 {
  margin-bottom: 50px;
}
.thome_jxzy {
  width: 48%;
  height: 609px;
  background: #ffffff;
  border: 1px solid #fff;
  border-width: 5px 5px 5px 5px;
  box-shadow: 1px 1px 5px #d2d2d2;
  -webkit-box-shadow: 1px 1px 5px #d2d2d2;
  -moz-box-shadow: 1px 1px 5px #d2d2d2;
  padding: 15px;

  > div:nth-child(1) {
    display: flex;
    font-size: 22px;
    color: rgba(52, 52, 52, 1);
    > div:nth-child(1) {
      padding-bottom: 10px;
      border-bottom: 3px solid rgba(10, 118, 217, 1);
    }
  }
}
.thome_jxzy_list {
  display: flex;
  > div {
    /deep/ .pdf {
      width: 80px;
      > div {
        bottom: 18px;
      }
    }
  }
  i {
    margin-top: 60px;
    font-size: 30px;
  }
  > div:nth-child(2) {
    padding-top: 13px;
    width: 100%;
    > div:nth-child(1) {
      font-size: 16px;
      font-weight: 400;
      color: #343434;
    }
    > div:nth-child(1) {
      font-size: 16px;
      font-weight: 400;
      color: #343434;
    }
    > div:nth-child(2) {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      margin: 5px 0px;
    }
    > div:nth-child(3) {
      display: flex;
      > div {
        border: 1px solid #00a1e9;
        border-radius: 13px 12px 13px 13px;
        color: #00a1e9;
        padding: 1px 10px;
      }
    }
  }
}
.thome_jxlm {
  height: 165px;
  margin-top: 20px;
  background: #ffffff;
  padding: 20px;
  border: 1px solid #fff;
  border-width: 5px 5px 5px 5px;
  box-shadow: 1px 1px 5px #d2d2d2;
  -webkit-box-shadow: 1px 1px 5px #d2d2d2;
  -moz-box-shadow: 1px 1px 5px #d2d2d2;
  width: 49%;
  justify-content: space-between;
  display: flex;
  > div:nth-child(1) {
    > p:nth-child(1) {
      border: 1px solid #00a1e9;
      border-radius: 18px;
      color: #00a1e9;
      padding: 2px 10px;
      text-align: center;
      display: inline-block;
    }
    > p:nth-child(2) {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      margin: 20px 0px;
    }
    > p:nth-child(3) {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
