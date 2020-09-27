<template>
  <div class="footer">
    <div class="container op">
      <div class="unit">
        <a
          href="http://bszs.conac.cn/sitename?method=show&id=12183E5825960870E053022819ACE03D"
          target="_blank"
        >
          <img src="../../../src/image/unit.png" alt />
        </a>
      </div>
      <div class="copyright">
        <p>
          <a href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank">
            湘公网安备 43011102000486号 湘教QSl-200504 湘ICP备12010102号-1
          </a>
          <br />
          本网站由湖南省教育厅信息中心承办。
          <br />
          Copyright 2000-2020 hnedu.cn,All Rights Reserved
          <br />
          本网违法与不良信息举报 电话:0731-82207750
        </p>
      </div>
      <div class="qrCode">
        <img class="imgl" src="../../../src/image/qrcode-1.png" alt />
        <img class="imgl" src="../../../src/image/qrcode-2.png" alt />
      </div>
      <ul>
        <li>
          <a href="http://pypt.rednet.cn/" target="_blank">
            <img src="../../../src/image/link-01.png" alt />
          </a>
        </li>
        <li>
          <a href="http://wfblxx.rednet.cn/" target="_blank">
            <img src="../../../src/image/link-02.png" alt />
          </a>
        </li>
        <li>
          <a href="http://gat.hunan.gov.cn/" target="_blank">
            <img src="../../../src/image/link-03.png" alt />
          </a>
        </li>
        <li>
          <a href="http://www.12377.cn/" target="_blank">
            <img src="../../../src/image/link-04.png" alt />
          </a>
        </li>
        <li>
          <a href="http://wfblxx.rednet.cn/Column.aspx?ColId=8" target="_blank">
            <img src="../../../src/image/link-05.png" alt />
          </a>
        </li>
      </ul>
    </div>

    <div class="container opq">
      <div>
        <img class="imgl2" src="../../../src/image/unit.png" alt />
      </div>
      <div class="copyright">
        <p>
          <a href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action" target="_blank">
            湘公网安备 43011102000486号 湘教QSl-200504 湘ICP备12010102号-1
          </a>
          <br />
          本网站由湖南省教育厅信息中心承办。
          <br />
          Copyright 2000-2020 hnedu.cn,All Rights Reserved
          <br />
          本网违法与不良信息举报 电话:0731-82207750
        </p>
      </div>
      <div class="qrCode">
        <img class="imgl" src="../../../src/image/qrcode-1.png" alt />
        <img class="imgl" src="../../../src/image/qrcode-2.png" alt />
      </div>
      <div class="cl">&nbsp;</div>
      <div class="dis-a dis-f">
        <li class="imgp">
          <a href="http://pypt.rednet.cn/" target="_blank">
            <img src="../../../src/image/link-01.png" alt />
          </a>
        </li>
        <li class="imgp">
          <a href="http://wfblxx.rednet.cn/" target="_blank">
            <img src="../../../src/image/link-02.png" alt />
          </a>
        </li>
        <li class="imgp">
          <a href="http://gat.hunan.gov.cn/" target="_blank">
            <img src="../../../src/image/link-03.png" alt />
          </a>
        </li>
        <li class="imgp">
          <a href="http://www.12377.cn/" target="_blank">
            <img src="../../../src/image/link-04.png" alt />
          </a>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.cl {
  clear: both;
}
.opq {
  display: none;
}

a {
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #c91312;
  transition: 0.3s;
}
input,
button {
  outline: 0;
}
img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  transition: 0.3s;
}

/*ͨ����ʽ*/
.lf {
  float: left;
}
.rt {
  float: right;
}
.active {
  display: block;
}
.container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.container:before,
.container:after {
  content: '';
  display: table;
  clear: both;
}
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.footer {
  height: 228px;
  margin-top: 40px;
  padding: 20px 0;
  background: #121d3b;
  box-sizing: border-box;
}
.footer .unit {
  float: left;
}
.footer .copyright {
  float: left;

  line-height: 25px;
  margin-left: 60px;
  padding-left: 30px;
  font-size: 14px;
  text-align: left;
  color: #828689;
  background: url(../../../src/image/icp.png) no-repeat left 5px;
}
.footer .copyright a {
  color: #828689;
}
.footer .qrCode {
  float: right;
  margin: 30px 0;
}
.footer .qrCode img {
  margin-left: 10px;
}
.footer ul {
  clear: both;
  overflow: hidden;
}
.footer ul li {
  float: left;
  width: 225px;
  height: 52px;
  margin-right: 18.75px;
}
.footer ul li:last-child {
  margin-right: 0;
}
.imgl {
  width: 75px;
  height: 75px;
}
@media screen and (max-width: 500px) {
  .op {
    display: none;
  }
  .imgl2 {
    width: 76px;
    height: 96px;
  }
  .opq {
    display: block;
  }
  .footer {
    background-color: white;
  }
  .container {
    width: 100%;
  }
  .copyright {
    margin-left: 0px !important;
    text-align: center !important;
  }
  .qrCode {
    text-align: center !important;
    float: none !important;
  }
  .dis-f {
    flex-wrap: wrap;
  }
  .imgp {
    width: 48%;
    margin-top: 10px;
  }
}
</style>
