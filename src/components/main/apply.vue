<template>
  <div class="manage">
    <div class="main-cybg">
      <div class="main-cybg-wz">
        <p>常用办公</p>
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
    <div class="main-cybg mt10">
      <div class="main-cybg-wz">
        <p>全部应用</p>
      </div>
      <div class="main-jgg pb50">
        <div v-for="(items,index2) of glist" :key="'1'+index2" @click="tz(items.path,items.name)">
          <div>
            <span class="iconfont" :class="items.iocn"></span>
          </div>
          <p>{{items.name}}</p>
        </div>
        <div v-for="(items,index3) of glist2" :key="'2'+index3" @click="tz(items.path,items.name)">
          <div>
            <span class="iconfont" :class="items.iocn"></span>
          </div>
          <p>{{items.name}}</p>
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
      glist: data.glist,
      glist2: data.glist2
    };
  },
  mounted() {
    this.activeName = this.stab;
  },
  components: {},
  methods: {
    ...mapActions({
      tille2: "tille"
    }),
    tz(url, name) {
      this.tille2(name);
      this.$troute.query(url);
    },
    handleClick(a) {
      this.$router.push("/" + a.name);
      this.$store.commit("tab", a.name);
    }
  },
  computed: {
    ...mapMutations({
      mtab: "tab"
    })
  }
};
</script>
<style lang="scss"  scoped>
@import "@/style/Mannerism.scss";

$main-15: 15px;
.pb50{
  padding-bottom: 60px!important;
}
.main-jgg>div>div{

  background-color: red;
}
.main-jgg {
  display: flex;
  padding: $main-15;
  padding-top: 0px;
  padding-bottom: 5px;
  flex-wrap: wrap;

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
      padding-top: 5px;
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
        font-size: 24px;
      }
      padding-top: 5px;
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
.main-cybg {
  background: #fff;
  border-radius: 2px;
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
}
</style>
