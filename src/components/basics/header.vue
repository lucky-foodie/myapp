<template>
  <div>
    <div class="header-main">
      <div class="header-top ">
        <span>湖南教育大平台欢迎您</span>
        <div>
          <a href="http://jyt.hunan.gov.cn/" target="_blank">
            <img class="headimg" src="../../../src/image/hnjy.png" alt />
          </a>
          <a href="http://jyw.hnedu.cn/" target="_blank">
            <img class="headimg2" src="../../../src/image/hnjyw.png" alt />
          </a>
        </div>
      </div>
      <div class="header-logo">
        <div class="headimg">
          <img src="../../../src/image/logo.png" alt />
        </div>
        <div class="search">
          <form
            class="form"
            action="http://www.hnedu.cn/column/search/index.shtml"
            method="get"
            target="_blank"
          >
            <input
              type="text"
              class="input1"
              name="keyword"
              placeholder="大家都在搜 我是接班人..."
              maxlength="30"
            />
            <input class="input2" type="submit" value="搜索" />
          </form>
        </div>
      </div>
    </div>
    <div class="header-nav">
      <ul>
        <li><a href="http://www.hnedu.cn/">首页</a></li>
        <li>
          <a href="http://www.hnedu.cn/column/zwzx/index.shtml">政务中心</a>
        </li>
        <li>
          <a href="/">教研中心</a>
        </li>
        <li>
          <a href="http://course.hnedu.cn/">学习中心</a>
        </li>
        <li>
          <a href="http://mooc.hnedu.cn/course/#/umain?dao=user">个人中心</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: String,
    },
  },
  data() {
    return {
      seen: false,
      current: 0,
      login: '',
    };
  },
  mounted() {
    this.login = localStorage.getItem('login');
  },
  methods: {
    tzp() {
      window.open('http://www.class.hnedu.cn/common/search.shtml?keyword=');
    },
    open() {
      this.$confirm('此操作将退出平台', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!',
          });
          localStorage.clear();
          this.$router.push({ path: '/login' });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出',
          });
        });
    },

    tz(a, b) {
      this.$router.push({ path: '/' + a, query: { dao: a } });
    },
    mouseOverwz1(a) {
      var acps = this.$refs[`${a}`];
      acps.style = 'color:#fff; background-color: #12488e;';
    },
    mouseLeavewz1(a) {
      var acps = this.$refs[`${a}`];
      acps.style = '';
    },
  },
};
</script>
<style scoped lang="scss">
.header-main {
  background: url(../../../src/image/header-bg.jpg) no-repeat center center;
  height: 165px;
  padding-top: 1px;
  .header-top {
    width: 1200px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 13px;
    color: #fff;
    > div > a {
      margin-left: 20px;
    }
    > div > a:nth-child(2) {
      margin-top: 7px;
    }
  }
  .header-logo {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .search {
    margin: 0 15px;
    margin-right: 0px;
    margin-top: 20px;
    width: 383px;
    height: 75px;
  }
  form {
    position: relative;
    height: 40px;
    margin-bottom: 10px;
  }
  input[type='text'] {
    width: 100%;
    height: 43px;
    line-height: 40px;
    padding: 0 100px 0 15px;
    font-size: 14px;
    border: none;
    background: #fff;
    box-sizing: border-box;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #76a1b9;
  }
  input[type='submit'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 43px;
    color: #fff;
    font-size: 16px;
    padding: 0 40px 0 15px;
    border: none;
    background: #a20202 url(../../image/search-white.png) no-repeat 55px center;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;
  }
  .search span {
    margin-left: 10px;
    font-size: 12px;
  }
}

.header-nav {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: url(../../image/home-nav-bg.jpg) no-repeat center center;
  overflow: hidden;
  ul {
    display: flex;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
    li:nth-child(2) a:before {
      background-image: url(../../image/nav-4.png);
    }
    li:nth-child(3) a:before {
      background-image: url(../../image/nav-2.png);
    }
    li:nth-child(4) a:before {
      background-image: url(../../image/nav-3.png);
    }
    li:nth-child(5) a:before {
      background-image: url(../../image/nav-5.png);
    }
    li a:hover:after {
      display: block;
    }
    li {
      display: inline-block;
      margin: 0 46px;
      a:before {
        content: '';
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        height: 20px;
        background: url(../../image/nav-1.png) no-repeat left center;
        z-index: 1;
        background-size: contain;
      }
      a:after {
        content: '';
        position: absolute;
        top: -25px;
        left: 50%;
        margin-left: -120px;
        width: 230px;
        height: 124px;
        background-image: url(../../image/menu-bg.png);
        z-index: -1;
        display: none;
      }
      a {
        position: relative;
        display: inline-block;
        padding-left: 30px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        z-index: 1;
      }
    }
  }
}
</style>
