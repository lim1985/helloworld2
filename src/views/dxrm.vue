<template>
  <div v-if="isRealUrl" class="hello">
 <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->


<div class="dengji_panel">
 <van-row v-if="ischeck" style="margin-bottom:10px">
  <van-col span="24">
 <img alt="Vue logo" width="100%" src="../assets/isperson_top.png">
</van-col>
</van-row>

<van-panel  class="Isperson_panel" v-if="wasSubmit" :title="`本单位共登记安装 ${ DepCount } 人`">
  <div class="my_panel">
    <!-- <van-row gutter="10">
  <van-col offset="14" span="10">
    <div @click="showPM()">
       <span style="margin-left:35px">查看排名</span> 
      <div class="myIcon"> <van-icon :name="'arrow-'+arrow" /></div>
     </div>
    </van-col>
</van-row> -->
  <van-row gutter="0">
 <van-col span="24">
   <h3>您好，您已经成功登记</h3>
 </van-col>
    </van-row>
  <van-row gutter="0">
 <van-col span="24">
   <h1>感谢您的参与！</h1>
 </van-col>
    </van-row>
  <!-- <van-row gutter="10">
  <van-col span="8" >
   <div>
      
      <span>姓名：</span>
   </div>

   
    </van-col>
  <van-col span="8">{{ form.UserName }}</van-col>
  <van-col span="8"></van-col> 
</van-row>
<van-row gutter="10">
  <van-col span="8">手机号：</van-col>
  <van-col span="8">{{ form.Tel }}</van-col>
  <van-col span="8"></van-col> 
</van-row>
<van-row gutter="10">
  <van-col span="8">部门名称：</van-col>
  <van-col span="16">{{ form.DepName }}</van-col>
  
</van-row> -->
<van-row class="bottom_button" gutter="10">
  <van-col class="text_result" span="24">温馨提示：如有疑问，请致电<a href="tel:07395396272"> 0739-5396272 </a></van-col>
  <!-- <van-col v-if="status==0" span="24">大祥融媒温馨提示：您已经参与了我们的活动，感谢您的参与！</van-col>
  <van-col v-if="status==1" span="24">
     <van-button round block type="info" native-type="submit">
      提交资料
    </van-button>
  </van-col> -->
</van-row>
</div>
</van-panel>

 <van-row    v-if="isPerson" gutter="10" style="text-align: right;margin: 6px 20px;">
  <van-col  span="24">
    <div @click="showintroduce()">
       <span style="margin-left:35px">本次活动简介</span> 
      <div class="myIcon"> <van-icon :name="'arrow-'+arrow" /></div>
     </div>
    </van-col>
</van-row>
<van-panel  v-if="isPerson" class="Isperson_panel" title="登记信息">
  <van-dialog v-model="showdialog" title="活动简介" show-cancel-button>
    <div class="dialogDiv">
      
      <img alt="Vue logo" width="50%" src="../assets/DXRMLOGO.jpg">
       <div class="text_dialog"> 
         大祥区融媒体中心已于2019年6月21日挂牌成立，作为区融媒体中心的核心平台，“大祥融媒”客户端立足大祥，辐射全国，是集“新闻+政务+服务”功能于一体，覆盖区、街、社区多级新闻服务，聚合多样化服务的多功能移动客户端，旨在打造全区最重要、最核心的权威信息发布平台和综合服务平台，更好地引导群众、服务群众。
       </div>
       </div>
 
</van-dialog>
  <van-form  @submit="onSubmit" validate-first @failed="onFailed">
  <!-- 通过 pattern 进行正则校验 -->

  <!-- 通过 validator 进行函数校验 -->
  <van-field
    label='姓名'
     required
     class="myinput"
     :value="form.UserName"
    v-model="form.UserName"   
    name="username"
    placeholder="请输入姓名"
    :rules="[{ validator:checkUserNamevalidator , message: '请输入正确中文姓名，不超过4个字符' }]"
  />
   <van-field
    label='手机号'
    required
    class="myinput"
    :value="form.Tel"
    v-model="form.Tel"   
    name="tel"
    placeholder="请输入手机号"
    :rules="[{ validator:phoneValidator , message: '请输入正确手机号' }]"
  />
  <!-- 通过 validator 进行异步函数校验 -->
  <van-field
     label='单位名称'
     blur    
     :value="form.DepName"
     v-model="form.DepName"  
     class="myinput"
     required
     @input="asyncGetdeplist"   
    name="DepName"
    placeholder="输入您所在单位,如：区政府办"
    :rules="[{ validator: checkUserNamevalidator, message: '单位名称或者单位首字母' }]"
  />
  <van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="Deplist"
    @confirm="onConfirm"
    @cancel="showPicker = false"
  />
</van-popup>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交资料
    </van-button>
  </div>
</van-form>
</van-panel>
 <van-row v-if="isPerson" style="text-align: left;margin: 0px 20px;">
    <van-col class="text_result" span="24">温馨提示：如有疑问，请致电<a href="tel:07395396272"> 0739-5396272 </a></van-col>
</van-row>
<van-row v-if="ischeck" >
      <van-col span="24">
        <div class="footer">      
          <img alt="Vue logo" width="100%" src="../assets/isperson_down.png">
        </div>
      </van-col>
    </van-row>
</div>

 <div v-show="loginPanl">
<van-row>
  <van-col style="padding:5px 5px 0px 5px;border-radius:5px;" span="24">
 <img alt="Vue logo" width="100%" src="../assets/login_bg_top.png">
</van-col>
</van-row>
  <div :style="setBackground">     
    <van-panel   title="请输入手机号验证身份">
      
        <div class="van-hairline--top">
          <van-field
            class="login_input"
            required
            right-icon="question-o"
            @click-right-icon="$toast('必须输入手机号')"
            v-model="Report.tel"
            @input="checkTels"            
            label="您的手机号："
            placeholder="请正确输入手机号"
            :rules="phoneRules"
          />
         </div>
        <van-field        
          class="login_input"
          v-model="sms"
          center
          @input="check"
          clearable
          label="短信验证码："
          placeholder="请输入短信验证码"
        >
          <!-- <van-button loading type="info" loading-text="加载中..." />  -->
          <van-button
            slot="button"
            :disabled="smsdisabled"
            @click="getSms"
            size="small"
            :loading="buttonloading"
            :loading-text="smsloading"
            :type="buttonType"
            >{{ smsaction }}</van-button
          >
        </van-field>     
    </van-panel>
     </div>
</div>

 



   
  </div>
</template>


<script>
import Vue from 'vue'

import {fromUrl, Tel ,ReportId,IsAdmin ,Version,AdminInfo,} from "@/store/mutation-types"//MD5Tel AdminInfo
// import eruda from 'eruda'
import {
  seletDepCount,
  isDXRM,
  adddxrm,
  finduserByTel,
  getdeplist,
  checkAdmin,//检测管理员
  getUserInfo,
  GetVerificatCodeAdSmssecret,
  checkCaptchatoken,
 
  // CheckTel
} from "@/api/index";
import placesMap from "@/tools/map";
import xzsqoptions from "@/tools/xzsq";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
    components: {    
   
    },
  watch:{
    // $route(to,from)
    // {
    //   console.log(to)
    //   console.log(from)
      
    // },
     $route: {
    handler: function(from, to){
      console.log(to);
      console.log(from)
    },
    // 深度观察监听
   immediate: true, deep: true
  },

  //    '$route' (to, from) {
  //   const toDepth = to.path.split('/').length
  //   const fromDepth = from.path.split('/').length
  //   console.log(toDepth)
  //   console.log(fromDepth)
  //   // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  // },
    //  "$route.path":function(newval){
    //       if(newval === '/home'){
    //        console.log(false)
    //       }else{
    //         console.log(true)
    //       }
    //     },
    
    //  $route: function(newRouter,oldRouter) {
    //   console.log(newRouter)
    //   console.log(oldRouter)
    //   //{fullPath:"/goods/goodslist"，
    //   //hash:{}，
    //   //meta:{}，
    //   //name:"goodslist"，
    //   //params:{}，
    //   //path:"/goods/goodslist"，
    //   //query:{}
    //   //}
    //   this.activeIndex = newRouter.path//侧边栏选中
    //   },
  //    '$route'(to, from) {
  //   const toDepth = to.path.split('/').length
  //   console.log(toDepth)
  //   const fromDepth = from.path.split('/').length
  //   console.log(fromDepth)
  //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  // },
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
   },
  mounted() {    
    
    this.isFormUrl()
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
    this.auth();  
  },

  data() 
  {    
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
   
    this.phoneRules = [
      { required: true, message: "请输入手机号" },
      // { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
      { validator: this.phoneValidator, message: "手机号格式错误" }
    ];
    this.userNameRules = [
      { required: true, message: "请输入姓名" },
      { validator: this.userNameValidator, message: "姓名只能输入中文" }
    ]; 

    return {
      isRealUrl:false,
      // :style="{backgroundImage:`url(${img})`}"
      showdialog:false,
          setBackground: {
          'min-height':"310px",
          backgroundImage: "url(" + require("./../assets/login_bg_down.png") + ")",
          backgroundRepeat: "round"
       },

      // login_bg:require('../assets/login_bg.jpg'),
      form:{
        UserName:'',
        DepName:'',
        Tel:'',
        status:0
      },
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
      DepCount:0
   
      // personTitle:''
    };
  },
  methods: {
     isFormUrl(){
       let _fromUrl=Vue.ls.get(fromUrl)
       console.log(_fromUrl)
       if(_fromUrl==null)
       {
        window.location.href='https://daxiang-wap.rednet.cn/app/index.html?contentId=6966421&contentType=1'
       }
       else
       {
         this.isRealUrl=true
       }
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
 checkUserNamevalidator(val) {
   console.log(val)
   if(!val)
   {
     return false
   }
   console.log(/^[\u0391-\uFFE5]{0,20}$/.test(val))
      return /^[\u0391-\uFFE5]{0,20}$/.test(val);
      // return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
       this.$toast.loading('验证中...');

        setTimeout(() => {
           this.$toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
 
    onFailed(errorInfo){
    
        this.$toast.fail(errorInfo.errors[0].message)
    },
   
  async getUser(tel)//判断是不是系统里的人
  {
     let userinfomation=await finduserByTel({cellphone:tel})  
     
    console.log(userinfomation)
    if(userinfomation.data.code==1)
    {
      this.form.UserName=userinfomation.data.userinfo.UserName
      this.form.Tel=tel
      this.form.DepName=userinfomation.data.userinfo.DepartmentName
      this.form.DepID= userinfomation.data.userinfo.DepartmentId
      this.form.status=1
    }  
    else
    {
       this.form.Tel=tel
       this.form.DepName='其他'
       this.form.DepID= 163
       this.form.status=1
    } 
 
    
  },
  async auth(){

    //  let version=Vue.ls.get(Version)
     let tel=Vue.ls.get(Tel)

     this.cellphone=tel
     if(tel)
     {
       this.form.Tel=tel
       this.loginPanl=false
       this.isPerson=true
       this.ischeck=true
     }
    
     this.getUser(tel)
     let result=await isDXRM({cellphone:tel})
     console.log(result)
     if(!result.data.isok)
     {      
       console.log(`到这里了`)
       this.wasSubmit=true;
       this.isPerson=false;
       this.form.UserName=result.data.userinfo.UserName
       this.form.DepName=result.data.userinfo.DepartmentName
       this.form.DepID=result.data.userinfo.DepID
       
     }       
   let count =await seletDepCount({DepID: this.form.DepID})
   console.log(count)
   this.DepCount=count.data.count
    },
    IdCardValidator(val) {
      return /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(val);
    },
    userNameValidator(val) {
      return /^[\u0391-\uFFE5]{0,4}$/.test(val);
    },
    phoneValidator(val) {
      return /^1\d{10}$/.test(val);
    },
    checkTels: _.debounce(function(val) {
      //  console.log(val)
      // CheckTel({ tel: val }).then(res => {       
        if(this.Report.tel=='')
        {
           this.smsdisabled =true;    
          this.$toast("手机号不能为空");
          return false
        }
        if(!this.phoneValidator(val))
        {
            this.smsdisabled =true;    
           this.$toast("请输入正确的手机号");
           return false
        }
        else
        {        
           this.smsdisabled =false;    
           return true       
        }       
      // });
    }, 1000),
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
 
    // D类人员
  
    //    @confirm="lkhbconfirm"
    // @cancel="lkhbcancel"
  
  
   
  
  
    onChangeFJaddress(val) {
      console.log(val);
    },
    init_palceMap() {
      this.columns = placesMap;
      this.xzsqoptions=xzsqoptions;
     
    },

  //     GetVerificatCodeAdSmssecret,
  // checkCaptchatoken,
    check: _.debounce(function(val) {
      if(/^1\d{10}$/.test(this.Report.tel) && /^\d{4}$/.test(val))
      {
          checkCaptchatoken({ cc_token:this.smschecktokens.cc_token, mobile: this.Report.tel, captcha: val }).then(async res => {
        console.log(res);
        if (res.data.code == -1) {
          this.$toast.fail("验证码无效");
          return;
        }
        if (res.data.result.code == 1000)
      {//短信验证成功/手机号输入正确
         
          let _admininfo =await checkAdmin({cellphone:this.Report.tel})//检查是不是管理员
          this.getUser(this.Report.tel)
          Vue.ls.set(IsAdmin, _admininfo.data.Isadmin, 15 * 24 * 60 * 60 * 1000);  //设置本地缓存 
          Vue.ls.set(Version, _admininfo.data.version, 15 * 24 * 60 * 60 * 1000);  //设置本地版本
          this.myVersion= _admininfo.data.version
          if(_admininfo.data.Isadmin==true)
          {              
            this.adminInfo=_admininfo.data.html
            Vue.ls.set(AdminInfo,this.adminInfo, 15 * 24 * 60 * 60 * 1000);  //设置本地缓存              
        
            this.isAdmin=true;//如果是管理员，显示管理员栏目
          }      
            this.form.Tel= this.Report.tel        
            Vue.ls.set(Tel, this.Report.tel);  
            this.buttondisabled = false;//禁用按钮
            this.loginPanl = false;//禁用登陆框
            let result=await isDXRM({cellphone:this.Report.tel})
            console.log(result)
            if(!result.data.isok)
            {      
              console.log(`好的`)
              this.wasSubmit=true;
              this.isPerson=false;
              this.form.UserName=result.data.userinfo.UserName
              this.form.DepName=result.data.userinfo.DepartmentName
              this.form.DepID=result.data.userinfo.DepID
              let count =await seletDepCount({DepID: this.form.DepID})
              console.log(count)
              this.DepCount=count.data.count
              this.ischeck=true   
              return 
            } 
            this.isPerson=true
            this.ischeck=true              
            this.$toast.success("验证成功");   
        }
      
      });   
      }
      else
      {
         this.$toast.fail("验证码或手机输出错误");
      }
      // console.log(this.smschecktokens)
    
    }, 2000),
 

    async getSms() {
      console.log("获取短信");

      this.buttonloading = true;
      this.smsloading = "短信发送中...";
      setTimeout(() => {
        GetVerificatCodeAdSmssecret({contents:'输入验证码后请注明本人姓名及所在单位，系统会自动统计各单位关于大祥融媒APP安装数量，感谢您的支持！', mobile: this.Report.tel }).then(res => {
          console.log(res.data._result);
          this.smschecktokens=res.data._result;        
          let data = res.data._result;
          this.smsdisabled = true;
          if (data.rspcod == "success" && data.success == true)
          {        
            // this.$refs.nav.go(this.Report.tel);         
            this.$toast.success("短信发送成功请等待!");
            this.buttonloading = false;
            this.buttonType = "primary";
            this.Report.RealTel
            this.smsaction = "短信发送成功";
          } 
           else
          {
            this.$toast.fail("手机号不正确请重新输入");
            this.buttonloading = false;
            this.smsloading = "";
          }
        });
      }, 2000);

      
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
      margin: 0px 25px;
}
.login_panel
{
 background-image: url(../assets/login_bg.jpg);
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
  font-size: 18px; 
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

/* .van-cell__value >>> .van-field__body{
      font-size:999px;
} */
.van-cell__value
{
  background-color: #42b983 !important;
}
.van-icon
{
  font-size: 40px !important;
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
    background-color: #ffffff;
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
