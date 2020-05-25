<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
 <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->



<div>
  <div class="header">
   <van-row>
  <van-col style="text-align: left;line-height: 40px;padding-left: 10px;" span="20">
    <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
  <span >发稿单位：{{Userinfo.Abbreviation}}- {{Userinfo.UserName}}你好</span>
  </van-col> 
   <van-col  style="margin: 10px 15px 0px 0px;float: right;">
    <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
  <span ><van-icon name="setting-o" /> </span>
  </van-col> 
</van-row>
  </div>
 <div style="padding:5px 5px 5px 5px" v-show="listPanl">

   <div>
<van-row>
  <van-col  span="6">
    <van-button  size="small" @click="ToAdd" type="primary">在线上稿</van-button>
</van-col>
</van-row>
</div>
 <div class="list_bg">
<van-row>
  <van-col  span="8">
   <div class="title"><h1>稿件列表</h1></div>
</van-col>
</van-row>
<van-row>
  <van-col  span="24">
   <van-tabs v-model="active">
  <van-tab title="待审核">待审核</van-tab>
  <van-tab title="已审核">已审核</van-tab>
  <!-- <van-tab title="退稿">退稿</van-tab> -->
</van-tabs>
</van-col>

</van-row>

</div>

<!-- <div v-if="showimglist" class="list_bg"> -->
  <!-- <van-row>
  <van-col span="24">  
     <van-row>
  <van-col span="8" v-for="(item, nn) in fileList"
        :key="nn">
  <div
        class="posting-uploader-item"
       
      >
        <img width="100%" :src="item.content" alt="图片" class="imgPreview" />
      
      </div>
       </van-col>
  </van-row>
  </van-col>
  </van-row> -->

<!-- <van-row>
  <van-col span="24">   
  <van-uploader :after-read="afterread" />
  </van-col>
</van-row> -->

<!-- </div> -->

<!-- <van-dialog v-model="showimgview" title="标题" show-cancel-button>
  <img width="100%" :src="imgurl" />
</van-dialog> -->
 


</div>
</div>
 



   
  <!-- </div> -->
</template>


<script>
import Vue from 'vue'
import { mapState} from 'vuex'
import { Tel ,ReportId,UserInfo,NodeID} from "@/store/mutation-types"//MD5Tel AdminInfo
// import eruda from 'eruda' IsAdmin ,Version,AdminInfo,
import {
  seletDepCount, 
  adddxrm,
  // finduserByTel,
  getdeplist,
  // checkAdmin,//检测管理员
  getUserInfo,
 
 
 
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
     computed:{    
      ...mapState({       
        Userinfo:state=>state.user.userinfo        
      })    
    },
  watch:{
 
    DepCount(val)
    {
      setTimeout(() => {
        this.DepCount=val
      }, 500);
    }
  },
  props: {
    msg: String
  },
   created()
   {
     console.log(window.document.referrer)
     console.log(this.$route)
     console.log(`created`)
      // this.auth();  
   },
  mounted() {    
    
    // this.isFormUrl()
    // let a=this.check_useragent()
    // console.log(a)
    // eruda.init()
    // let ismobile=this.isMobile()
    // if(!ismobile)
    // {
    //   alert(`来自红网APP`)      
    // }
    // else
    // {
    //   alert(`来自网页客户端`)
    // }
    // console.log(ismobile)
  
  },

  data() 
  {    
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
   
 

    return {
  
       
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      
  
      active: 0,
      isRealUrl:false,
      // :style="{backgroundImage:`url(${img})`}"
      showdialog:false,
      

      // login_bg:require('../assets/login_bg.jpg'),
     
      arrow:'down',
      wasSubmit:false,
      cellphone:'',
      ischeck:false,
      DepName:'',    
      Deplist:[],
      pattern: /\d{6}/,    
      isAdmin:false,
      buttonType: "info",
      buttonloading: false,
      smsloading: "",
     
      smsdisabled: true,
      buttondisabled: true,
    listPanl:true,
      showPicker: false,
      columns: [],
      isPerson: false,
      loginPanl: true,
      text: "",
      sms: "",
      smsaction: "发送短信验证码",
      status:1,
      Report: {        
        name: "",
        // tel	nvarchar(14),
        tel: "",      
        RealTel:"",
        // sex bit,      
        isOK: "0",         
      },     
      isok:true,
      adminInfo:{},
      smschecktokens:{},
      myVersion:'',
      DepCount:0,
      imgfile:{},
   
      // personTitle:''
    };
  },
  methods: {
    
    
  
    
    ToAdd()
    {
      let vm=this
      vm.$router.push({name:'UfAdd'})
    },
   
  
    isMobile(){
        //获取到userAgent 使用正则表达式解析 若是移动端返回的flag将不为null，反之为null
            console.log(navigator)
              if (window.document.referrer === '') {// 当没有上一级url链接的时候，返回上一级按钮的链接改成项目首页url链接地址，这也是很符合项目逻辑的
          
            console.log(`没有上一级`)
        }
        else
        {
          console.log(this.$route)
          console.log(window.document.referrer)
          console.log(`有上一级`)
        }
            console.log(window.history.length)
            let flag = navigator.userAgent.match(
              /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            return flag != null;
  },
    showintroduce()
    {
       console.log(this.arrow)
   
      this.arrow = this.arrow == 'down' ? 'up' : 'down';
      this.showdialog=true
    },
    showPM(){
      console.log(this.arrow)
   
      this.arrow = this.arrow == 'down' ? 'up' : 'down';
      this.$toast('排行榜即将开放')
      // this.arrow=this.arrow=='down'?'up'
    },
      onConfirm(val)
     {
       console.log(val)
       this.form.DepName=val.text    
       this.form.DepID=val.code
       console.log(this.form)   
       this.showPicker=false   
    },
   asyncGetdeplist:_.debounce(async function(val)
    {
   
       console.log(val)
       if(val=='')
       {        
         this.Deplist=[]
         this.showpicker=false
         return 
       }
        const result=await getdeplist({DepName:val})
        console.log(result)
           if(result.status==200 && result.data.code!=-1)
          {
            this.Deplist=result.data.Deplist.map(item=>{
              return {text:item.DepartmentName,code:item.DepartmentId}
            }) 
           console.log(val)
           this.showPicker=true
          }
          else
          {
            this.$toast(``)
             return false
          }      
    },800),
    //  500),
     async onSubmit(values) {
      console.log('submit', values);
      console.log(this.form)
      let vm=this      
      const toast = vm.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '倒计时 2 秒,数据提交中...'
      });
    let second = 2;
    const timer = setInterval(async() => {
      second--;
      if (second) {
        toast.message = `倒计时 ${second} 秒,数据提交中...`;
      } else {
        clearInterval(timer);
         let res=await adddxrm(this.form)
         console.log(res)
      if(res.data.isok)
      {
         let count =await seletDepCount({DepID: this.form.DepID})
         console.log(count)
         this.DepCount=count.data.count
         this.isPerson=false
         this.wasSubmit=true
         vm.$toast.success('提交成功')    
      }
       else
       {
        this.isPerson=false
        this.wasSubmit=true
       }
        // 手动清除 Toast
        toast.clear();
      }
    }, 1000);
   
    },

    // 异步校验函数返回 Promise

 
    onFailed(errorInfo){
    
        this.$toast.fail(errorInfo.errors[0].message)
    },
   
 
   auth(){
    let userinfo=Vue.ls.get(UserInfo)
    let node=Vue.ls.get(NodeID)
   
      if(!userinfo || !node)
      {   
         this.$router.push({name:'Uflogin'})  

          // window.location.href='/#/Uniformlogin'
      }
  
    },
 
  
 
  getUserInfo()
    {
        let id
        let tel
    
         id =  Vue.ls.get(ReportId) 
         tel = Vue.ls.get(Tel)
         
      setTimeout(() => {
        getUserInfo({ ReportId: id ,tel:tel}).then(res => {
        // {code: -1, msg: "查无记录"}
         let data=res.data.html
         console.log(data)
          if(data.code!=-1)
          {                     
          
            this.Report.tel= data.tel
                  
          }
          this.personInfo=this.Report;
      });
      }, 500);      
    }, 
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },


  //     GetVerificatCodeAdSmssecret,
  // checkCaptchatoken,
   
 

    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-uploader
{
  float:left;
  padding: 0 8px;
}
.posting-uploader-item
{

}
.title h1
{
  font-size: 18px;
    font-family: fantasy;
    color: #606266;
}
.list_bg
{
  background-color: #F2F6FC;
  margin: 6px;
}
.text_dialog{
    font-size: 16px;
    padding-bottom: 10px;
    text-indent: 2em;
    margin: 15px;
    text-align: left;
    line-height: 26px;
}
.dialogDiv img
{
 width: 33%;
}
.Isperson_panel{
  margin: 0px !important;
}
.footer {
    padding:0px !important;
    margin: 0px !important;
    position: fixed;
    width: 100%;
    background-color: #fff !important;
    bottom: -2px;
}
.van-panel
{
      margin: 0px 4px;
}
.van-panel >>>.van-panel__footer
{
  float:right;
}
.login_panel
{
 background-image: url(../../assets/login_bg.jpg);
}
.myIcon{
  float:right;
  margin-top: 4px;
}
.myIcon >>> .van-icon{
  float: left;
  font-size:16px !important
}
.text_result
{  
    font-size: 14px;
    padding-bottom: 10px;
}
.bottom_button{
 padding-top: 10px !important;
 border-bottom: 0px !important;
}
.van-button--normal >>> .van-button__text
{
  font-size: 16px; 
}
.van-cell__title
{
  text-align: left;
    padding-left: 20px;
    line-height: 40px;
}
.my_panel
{
    font-size: 16px;
    text-align: left;
    padding: 20px;
}
.my_panel >>> .van-row
{
  padding: 8px;
  border-bottom: 1px solid #42b983;
}
.myinput >>> .van-cell__value {
    border:#42b983 1px solid;
    border-radius:15px;
  }
.myinput >>> .van-field__body {
    padding-left: 10px;
    font-size: 14px;
  }
.van-cell >>> .van-field__label
{
    width:35px;
     font-size:14px;
     float:left;
     padding-right: 5px;
}
/* .van-cell__value >>> .van-field__body{
      font-size:999px;
} */
.van-cell__value
{
  background-color: #42b983 !important;
}
.van-icon
{
  font-size:25px !important;
}
.van-grid-item__icon{
  font-size: 38px !important;
}
.van-cell__value{
  border: #42b983 1px solid  !important;
font-size: 20px !important;
    background-color: aliceblue !important;
}

.login_input{
  font-size:14px !important;
}
.van-cell{
    color: #2b2b2b;
    font-size: 16px;
    line-height: 28px;
    padding: 5px 5px;

    background-color: #F2F6FC;
}

.van-grid-item__text
{
    color: #646566;
    font-size:18px !important;
    word-wrap: break-word;
}
.van-cell__title {
  background-color: #9BCD9B;
  color: #fff;
}
.footer {
  margin-top: 20px;
  padding: 10px;

  color: #2b2b2b;
  background-color: #d7d7d7;
}
.title_5
{
  font-size:17px;
  padding:10px;
  background-color: red;
  color: #fff;
  font-weight: 600;
  
}
.title_6
{
  font-size:17px;
  padding:10px;
  background-color: #9bcd9b;
  color: #fff;
  font-weight: 600;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
