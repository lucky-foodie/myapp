<template>
  <div class="megagame">
    <div class="m-header">
      <div>
        <div><img src="@/image/bm.png" alt="" /></div>
        <div>
          <p @click="tz('')">首页</p>
          <p>|</p>
          <p @click="tz('mwork')">获奖作品展示</p>
          <p @click="tz('mapply')">报名参赛</p>
        </div>
      </div>
    </div>
    <div class="m-bg"></div>
    <div class="m-main">
      <div class="apply">
        <h2>参赛报名</h2>
        <ul>
          <li class="current">报名信息</li>
          <li>上传作品</li>
          <li>完成</li>
        </ul>
        <div class="box">
          <div class="info" v-show="info">
            <p>
              <label>工作室</label><input type="text" v-model="workspaceName">
            </p>
            <p>
              <label>申请人姓名：</label><input type="text" v-model="username">
            </p>
            <!-- <p class="address">
              <label>所在地</label> <span>湖南省</span><input type="text"><input type="text">
            </p> -->
            
            <h3>参赛成员信息</h3>
            <p>
              <label>参赛教师：</label>
              <font>
                <font>
                  <input type="text" placeholder="请输入姓名"><input type="text" placeholder="请输入单位名称">
                </font>
              </font>
            </p>
            <p>
              <label>教研成员：</label>
              <font>
                <font>
                  <input type="text" placeholder="请输入姓名"><input type="text" placeholder="请输入单位名称">
                </font>
                <font v-for="i in jycyInput" :key="i">
                  <input type="text" placeholder="请输入姓名"><input type="text" placeholder="请输入单位名称"><span @click="del"></span>
                </font>
                <button class="add" @click="add">+</button>
              </font>
            </p>
            <div class="btn">
              <button class="next" @click="next">下一步</button>
            </div>
          </div>
          <div class="upload" v-show="upload">
            <p>
              <label>作品名称：</label><input type="text">
            </p>
            <p style="width: 700px;">
              <label>作品分类：</label>
              <select @change="selectXd">
                <option value="">请选择学段</option>
                <option v-for="item in xueduan" :key="item.id" :value="item.label">{{ item.label }}</option>
              </select>
              <select @change="selectXk">
                <option value="">请选择学科</option>
                <option v-for="item in xueke" :key="item.id" :value="item.label">{{ item.label }}</option>
              </select>
              <select @change="selectJcbb">
                <option value="">请选择教材版本</option>
                <option v-for="item in jcbbList" :key="item.id" :value="item.label">{{ item.label }}</option>
              </select>
              <select @change="selectZjzsd">
                <option value="">请选择章节知识点</option>
                <option v-for="item in zjzsdList" :key="item.id" :value="item.label">{{ item.label }}</option>
              </select>
            </p>
            <p>
              <label>教学视频：</label>
              <van-uploader>
                <van-button icon="upgrade" type="info" >点击上传</van-button>
              </van-uploader>
            </p>
            <p>
              <label>教学设计：</label>
              <van-uploader>
                <van-button icon="upgrade" type="info" >点击上传</van-button>
              </van-uploader>
            </p>
            <p>
              <label>教学反思：</label>
              <van-uploader>
                <van-button icon="upgrade" type="info" >点击上传</van-button>
              </van-uploader>
            </p>
            <p>
              <label>教学资源包：</label>
              <van-uploader>
                <van-button icon="upgrade" type="info" >点击上传</van-button>
              </van-uploader>
            </p>
            <p>
              <label>作品简介：</label><textarea cols="30" rows="3"></textarea>
            </p>
            <div class="btn">
              <button class="prev" @click="prev">上一步</button>
              <button class="submit" @click="submit">提交</button>
            </div>
          </div>
          <div class="success" v-show="success">
            <img src="../../image/success.png" alt="">
            <div>报名成功</div>
            <button @click="tz('mindex')">返回首页</button>
          </div>
        </div>
      </div>
    </div>
    <foots></foots>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import foots from '@/components/basics/footer.vue';

import { Uploader } from 'vant';
import api from '@/data/api';
export default {
  data() {
    return {
      info: true,
      upload: false,
      success: false,
      jycyInput: [],
      xueduan: [], //学段列表
      xd: '', //选中的学段
      xueke: [], //学科列表
      xk: '', //选中的学科
      jcbbList: [],
      jcbb: '',
      zjzsdList: [],
      zjzsd: ''
    };
  },
  mounted(){
    // var data = {
    //     tokenKey: 1,
    //     username: '唐海洋',
    //     password: '123456',
    //   };
    // api.login(data).then(res => {
    //   console.log(res.data)
    // });
    this.getXdxk();
  },
  methods: {
    selectXd(e){
      //console.log(e.target.value);
      this.xd=e.target.value;
      for(var i=0;i<this.xueduan.length;i++){
        if(this.xueduan[i].label==this.xd){
          this.xueke=this.xueduan[i].children;
          break;
        }
      }
      console.log(this.xd);
    },
    selectXk(e){
      this.xk=e.target.value;
      console.log(this.xk);
      api.findBySubjectName(this.xd,this.xk).then(res=>{
        console.log(res);
        this.jcbbList=res.data;
      });
    },
    selectJcbb(e){
      this.jcbb=e.target.value;
      console.log(this.jcbb);
      var jcbbId="";
      for(var i=0;i<this.jcbbList.length;i++){
        if(this.jcbbList[i].label==this.jcbb){
          jcbbId=this.jcbbList[i].id;
          break;
        }
      }
      api.finBySIdFkList(jcbbId).then(res=>{
        console.log(res);
        this.zjzsdList=res.data;
      });
    },
    selectZjzsd(e){
      this.zjzsd=e.target.value;
      console.log(this.zjzsd);
    },
    getXdxk(){
      api.finBaseTree().then(res=>{
        //console.log(res);
        this.xueduan=res.data;
      });
    },
    tz(url) {
      this.$troute.query(url);
    },
    add(){
      this.jycyInput.push(1);
    },
    del(){
      this.jycyInput.pop(1);
    },
    next(){
      this.info=false;
      this.upload=true;
    },
    prev(){
      this.info=true;
      this.upload=false;
    },
    submit(){
      this.upload=false;
      this.success=true;
    }
  },
  components: {
    foots,
    Uploader
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
.megagame {
  background-color: #88eaf4;
}
.m-main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: -100px;
}
.m-header {
  height: 52px;
  background: #333333;
  > div {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    > div:nth-child(2) {
      display: flex;
      > p {
        color: #fff;
        padding: 15px 20px;
      }
      > p:nth-child(4) {
        width: 202px;
        height: 67px;
        padding-top: 10px;
        background: #e04343;
        border-radius: 0px 0px 10px 10px;
        font-size: 28px;
        text-align: center;
        color: #fff;
        font-family: slideyouran;
        font-weight: 400;
      }
    }
  }
}
.m-bg {
  background: url(../../image/tpbm.png);
  height: 853px;
}
.apply{
  width: 1000px;
  min-height: 500px;
  margin: -300px auto 50px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  >h2{
    height: 65px;
    line-height: 65px;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: #085BC2;
  }
  >ul{
    display: flex;
    width:70%;
    position: relative;
    margin: 40px auto 90px;
    li{
      position: relative;
      width: 33.33%;
      color: #999;
      font-size: 24px;
    }
    li:nth-child(2){
      text-align: center;
    }
    li:last-child{
      text-align: right;
    }
    li::after{
      content: '';
      position: absolute;
      left: 50%;
      bottom: -28px;
      width: 18px;
      height: 18px;
      margin-left: -9px;
      border: 3px solid #EAEAEA;
      box-sizing: border-box;
      border-radius: 50%;
      z-index: 2;
    }
    li:first-child::after{
      left: 33px;
    }
    li:last-child::after{
      left: 95%;
    }
    li:nth-child(2)::before{
      content: '';
      position: absolute;
      left: 50%;
      bottom: -35px;
      width: 30px;
      height: 30px;
      margin-left: -15px;
      background-color: #fff;
      z-index: 1;
    }
    li.current{
      color: #0A76D9;
      font-weight: bold;
    }
    li.current::after{
      border: 5px solid #0A76D9;
    }
  }
  >ul::after{
    content: '';
    position: absolute;
    left: 48px;
    right: 24px;
    bottom: -20px;
    height: 1px;
    background-color: #EAEAEA;
  }
}
.box{
  width: 70%;
  margin: 0 auto;
  padding: 0 25px 60px;
  font-size: 16px;
  >div>p{
    line-height: 36px;
    margin-bottom: 25px;
    display: flex;
    >font{
      display: inline-flex;
      flex-grow: 1;
      flex-direction: column;
      font{
        display: inline-flex;
        vertical-align: middle;
        margin-bottom: 10px;
        input{
          flex-grow: 0;
        }
      }
      input:first-of-type{
        width: 120px;
        margin-right: 10px;
      }
      input:last-of-type{
        width: 330px;
      }
      span{
        display: inline-block;
        width: 36px;
        height: 36px;
        cursor: pointer;
        background: url(../../image/del.png) no-repeat center center;
      }
      .add{
        height: 36px;
        line-height: 36px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        background-color: #0A76D9;
        overflow: hidden;
      }
    }
  }
  label{
    display: inline-block;
    width: 150px;
    height: 36px;
  }
  input,select{
    height: 34px;
    line-height: 34px;
    color: #2c3e50;
    padding: 0 10px;
    border: 1px solid #EAEAEA;
    flex-grow: 1;
  }
  .ivu-select{
    width: auto;
    min-width: 107px;
    height: 34px;
    line-height: 34px;
    margin-right: 10px;
    color: #2c3e50;
    flex-grow: 1;
  }
  select{
    margin-right: 10px;
  }
  .address input:first-of-type{
    width: 100px;
    margin: 0 15px;
    flex-grow: 0;
  }
  textarea{
    padding: 0 10px;
    border: 1px solid #EAEAEA;
    flex-grow: 1;
    resize: none;
  }
  h3{
    height: 36px;
    line-height: 36px;
    font-size: 18px;
    font-weight: bold;
    padding-left: 15px;
    margin: 50px 0 25px;
    background-color: #E1F1FF;
  }
  .btn{
    margin: 50px 0  0 150px;
    button{
      width: 160px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      margin-right: 20px;
      border: 1px solid #EAEAEA;
      border-radius: 5px;
      overflow: hidden;
    }
    .next,.submit{
      color: #fff;
      border: none;
      background-color: #0A76D9;
    }
  }
}
// .info, .upload{
//   display: none;
// }
.van-button--normal{
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  border-radius: 3px;
}
.success{
  margin-top: 50px;
  text-align: center;
  div{
    margin: 30px 0;
    font-size: 30px;
  }
  button{
    padding: 10px 35px;
    color: #fff;
    background-color: #0A76D9;
    border-radius: 3px;
  }
}
</style>
