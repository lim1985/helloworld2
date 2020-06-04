<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
  <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->

  <div>
    <div class="header">
      <van-row>
        <van-col
          style="text-align: left;line-height: 40px;padding-left: 10px;"
          span="20"
        >
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
     <!-- {{fullWidth}}{{UA}}- -->
          <span
            >发稿单位：{{ Userinfo.Abbreviation }}-{{ Userinfo.UserName }},你好</span
          >
        </van-col>
        <van-col style="margin: 10px 15px 0px 0px;float: right;">
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
          <span @click="quit()" ><van-icon name="setting-o" /> </span>
        </van-col>
      </van-row>
    </div>
    <div  v-show="listPanl">
      <div>
        <van-row>
          <van-col span="8" style="text-align: left;margin-left: 6px;">
            <van-button size="normal" @click="ToAdd" type="primary"
              >在线上稿</van-button
            >
          </van-col>
        </van-row>
      </div>
      <div class="list_bg">
        <van-row>
          <van-col span="8">
            <div class="title"><h1>稿件列表</h1></div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <van-tabs v-model="active" @change="changeTabs()">
              <van-tab title="待审稿件">
            <van-list
              v-model="dsloading"
              :finished="dsfinished"
              finished-text="数据加载完毕"
              @load="dsonLoad"
            >
            <van-row class="aListClass" v-for="(item,index) in dsaList" :key="index" :title="item.title" >
              <van-row> 
               <van-col style="padding:5px 0px" span="24">
                    <van-cell style="padding-left:10px;fontsize:18px;">{{ item.title }}</van-cell>            
              </van-col>
              </van-row>
              <van-row @click="onclickimglist(index)" > 
               <van-col style="padding:5px 0px;text-align: left;" span="24">
                   <img :width="imgwidth"  :height="imgwidth" style="padding:1px 2px;" v-for="(item,imageindex) in item.ImageFiles " :key="imageindex" :src="item.localhost+item.real_file"/>     
              </van-col>
              </van-row>  
                 <van-row > 
          
                 <van-col style="padding:5px 0px;text-align: left;" span="9">
                     第一作者：{{ item.TitleIntact}}
              </van-col>
                 <van-col style="padding:5px 0px;text-align: left;" offset="1"  span="11">
                      时间：{{ item.InputTime}}
              </van-col>
                   <van-col style="padding:5px 0px;text-align: left;" offset="1"  span="2">
                     <span style="color:#409EFF">编辑</span>
              </van-col>
              </van-row>  
               <van-divider />       
            </van-row>             
            </van-list>
              </van-tab>
              <van-tab title="已审稿件">
            <van-list
              v-model="ysloading"
              :finished="ysfinished"
              finished-text="数据加载完毕"
              @load="ysonLoad"
            >
            <van-row class="aListClass" v-for="(item,index) in ysaList" :key="index" :title="item.title" >
              <van-row> 
               <van-col style="padding:5px 0px" span="24">
                    <van-cell style="padding-left:10px;fontsize:18px;">{{ item.title }}</van-cell>            
              </van-col>
              </van-row>
               <van-row> 
               <van-col style="padding:5px 0px;text-align: left;" span="24">
                   <img :width="imgwidth" :height="imgwidth" style="padding:1px 2px;" v-for="(item,imageindex) in item.ImageFiles " :key="imageindex" :src="item.localhost+item.real_file"/>     
              </van-col>
              </van-row>
          
            </van-row>
             
            </van-list>
              </van-tab>
              <!-- <van-tab title="退稿">退稿</van-tab> -->
            </van-tabs>
          </van-col>
        </van-row>
      </div>

 
    </div>
 <van-image-preview className="my-preView" v-model="showimglist" :images="imageslist" @close="onCloseImglist" @change="onclickImg">
  <template v-slot:index>共{{ imageIndex }}页</template>
 
   <template style="top:600px !important;" v-slot:cover>{{ imagescoverText }}</template>
   
</van-image-preview>
  </div>

  <!-- </div> -->
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { Tel, ReportId, UserInfo, NodeID } from "@/store/mutation-types"; //MD5Tel AdminInfo
// import eruda from 'eruda' IsAdmin ,Version,AdminInfo,
import {
  seletDepCount,
  adddxrm,
  // finduserByTel,
  getdeplist,
  // checkAdmin,//检测管理员
  getUserInfo,
  GetArticleList
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
  computed: {
    ...mapState({
      Userinfo: state => state.user.userinfo
    }),   
  },
  watch: {
    DepCount(val){
      setTimeout(() => {
        this.DepCount = val;
      }, 500);
    }
  },
  props: {
    msg: String
  },
  created() {
    console.log(window.document.referrer);
    console.log(this.$route);
    console.log(`created`);
  
    this.GetUA();
    this.initImagesWH();
    //  this.auth();
  },
  mounted() {
    // this.changeTabs();
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

  data() {
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
  //  this.UA=function(){
  //      let flag = navigator.userAgent.match(
  //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //     );
  //     return flag
  //   };
    return {
      imageIndex:0,
      imagescoverText:'',
      imageslist:[],
      imagescover:[],
      showimglist:false,
      imgwidth:0,
      fullWidth:document.documentElement.clientWidth,
      fullHeight:document.documentElement.clientHeight,
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      UA:'',
      dsaList:[],
      ysaList:[],
      dsloading:false,
      dsfinished:false,
      ysloading:false,
      ysfinished:false,
      isRealUrl: false,
      // :style="{backgroundImage:`url(${img})`}"
      showdialog: false,
      active:0,
      // login_bg:require('../assets/login_bg.jpg'),

      arrow: "down",
      wasSubmit: false,
      cellphone: "",
      ischeck: false,
      DepName: "",
      Deplist: [],
      pattern: /\d{6}/,
      isAdmin: false,
      buttonType: "info",
      buttonloading: false,
      smsloading: "",
      smsdisabled: true,
      buttondisabled: true,
      listPanl: true,
      showPicker: false,
      columns: [],
      isPerson: false,
      loginPanl: true,
      text: "",
      sms: "",
      smsaction: "发送短信验证码",
      status: 1,
      Report: {
        name: "",
        // tel	nvarchar(14),
        tel: "",
        RealTel: "",
        // sex bit,
        isOK: "0"
      },
      isok: true,
      adminInfo: {},
      smschecktokens: {},
      myVersion: "",
      DepCount: 0,
      imgfile: {},
      dsnextPage:0,
      ysnextPage:0,
      dssingleLoaded:0,
      yssingleLoaded:0
      // personTitle:''
    };
  },
  methods: {
    onCloseImglist(index)
    {
        console.log(index)
      this.imageslist=[]
      this.imagescover=[]
      this.imageIndex=0
        //  this.imagescover=this.imagescover[index]

    },
    onclickimglist(index)
    {
   
     
      this.dsaList[index].ImageFiles.map((item)=>{
          this.imageIndex++
          // let imgobj=new Object();
          // imgobj.imglist=item.localhost+item.real_file
          // imgobj.caption=item.caption
          // this.imageslist.push(imgobj)
           this.imageslist.push(item.localhost+item.real_file)         
           this.imagescover.push(item.caption)
      })
    //   console.log(this.imageslist)
    //  console.log(this.fullHeight)
  
     this.showimglist=true;
     this.imagescoverText=this.imagescover[0]
    
    },
    onclickImg(index)
    {     
         this.imagescoverText=this.imagescover[index]
    },
    initImagesWH()
    {
     let fullwidth=document.documentElement.clientWidth
    //  console.log(fullwidth)
      this.imgwidth=(fullwidth-29)/4
    },
    GetUA(){
    
       let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      // console.log(flag)
      this.UA=!flag?'PC':flag;
      // console.log(this.UA)
    },
    quit()
    {
        Vue.ls.set(UserInfo,'')
        Vue.ls.set(NodeID,'')
        this.$router.push({path:'/Uniformlogin'})
    },
  splitPage(array, size) {
  var index = 0;
  size = size || 3;

  array = array.slice();

  return function () {
    var ret = array.slice(index, index + size);
    index += size;
    return ret;
  }
},

dsonLoad()
    {
      let userinfo = Vue.ls.get(UserInfo);
      let node = Vue.ls.get(NodeID);
      if (!userinfo || !node) {
        return 
      }
     
      // this.singleLoaded=_status==0?false:true
      if(this.dssingleLoaded){
    
        setTimeout(()=>{
          this.dsloading=false
          var nextPage = this.dsnextPage();
          if(nextPage.length == 0){
            this.dsfinished = true;
          } else {
            this.dsaList = this.dsaList.concat(nextPage);
          }
        }, 1000);
        return;
      }
      setTimeout(async() => {
      
           let articlelist=await GetArticleList({Status:1,ClientType:1,NodeID:node})   
           console.log(articlelist)
           let list=articlelist.data.result.rows
            let _alist=[]
            for(let i=0;i<list.length;i++)
           {
         
            let obj=new Object()
            obj.title=list[i].Title
            obj.TitleIntact=list[i].A.TitleIntact
            obj.GeneralID=list[i].GeneralID
            obj.InputTime=this.$moment(list[i].InputTime).format('MM-DD HH:mm')  
            obj.ImageFiles=list[i].Files
            _alist.push(obj)
          
           }
           this.dsnextPage = this.splitPage(_alist,3);
           this.dsloading=false
           this.dssingleLoaded = true;
           this.dsaList = this.dsnextPage();
        //    if (this.aList.length >= list.length) {
        //    this.finished = true;
        // }
      }, 1000);
      
    },
    ysonLoad()
    {
      let userinfo = Vue.ls.get(UserInfo);
      let node = Vue.ls.get(NodeID);
      if (!userinfo || !node) {
        return 
      }
     
      // this.singleLoaded=_status==0?false:true
      if(this.yssingleLoaded){
    
        setTimeout(()=>{
          this.ysloading=false
          var nextPage = this.ysnextPage();
          if(nextPage.length == 0){
            this.ysfinished = true;
          } else {
            this.ysaList = this.ysaList.concat(nextPage);
          }
        }, 1000);
        return;
      }
      setTimeout(async() => {
      
           let articlelist=await GetArticleList({Status:99,ClientType:1,NodeID:node})   
           console.log(articlelist)
            let list=articlelist.data.result.rows
            let _alist=[]
            for(let i=0;i<list.length;i++)
           {
         
            let obj=new Object()
            obj.title=list[i].Title
            obj.GeneralID=list[i].GeneralID
            obj.InputTime=this.$moment(list[i].InputTime).format('MM-DD HH:ss')  
            obj.ImageFiles=list[i].Files
            _alist.push(obj)
          
           }
           this.ysnextPage = this.splitPage(_alist,3);
          //  console.log(this.ysnextPage)
           this.ysloading=false
           this.yssingleLoaded = true;
           this.ysaList = this.ysnextPage();
           console.log(this.ysaList)
           if (this.ysaList.length >= list.length) {
           this.ysfinished = true;
        }
      }, 1000);
      
    },

    changeTabs(){
       
        console.log(this.active)
        this.yssingleLoaded=false
        this.dssingleLoaded=false
        this.ysloading =true   
        this.dsloading =true
        this.ysfinished = false;
        this.dsfinished = false;    
        this.ysaList=[]
        this.dsaList=[]
        // this.singleLoaded=!this.singleLoaded
        
    
      if(this.active== 0)
      {
          console.log(`这是0`)
          this.dsonLoad()
          return
      }
      console.log(`这是1`)
          this.ysonLoad()
      // this.GetArticleLists(this.active)
     
    },
    ToAdd() {
      let vm = this;
      vm.$router.push({ name: "UfAdd" });
    },

    isMobile() {
      //获取到userAgent 使用正则表达式解析 若是移动端返回的flag将不为null，反之为null
      console.log(navigator);
      if (window.document.referrer === "") {
        // 当没有上一级url链接的时候，返回上一级按钮的链接改成项目首页url链接地址，这也是很符合项目逻辑的

        console.log(`没有上一级`);
      } else {
        console.log(this.$route);
        console.log(window.document.referrer);
        console.log(`有上一级`);
      }
      console.log(window.history.length);
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag != null;
    },
    showintroduce() {
      console.log(this.arrow);

      this.arrow = this.arrow == "down" ? "up" : "down";
      this.showdialog = true;
    },
    showPM() {
      console.log(this.arrow);

      this.arrow = this.arrow == "down" ? "up" : "down";
      this.$toast("排行榜即将开放");
      // this.arrow=this.arrow=='down'?'up'
    },
    onConfirm(val) {
      console.log(val);
      this.form.DepName = val.text;
      this.form.DepID = val.code;
      console.log(this.form);
      this.showPicker = false;
    },
    asyncGetdeplist: _.debounce(async function(val) {
      console.log(val);
      if (val == "") {
        this.Deplist = [];
        this.showpicker = false;
        return;
      }
      const result = await getdeplist({ DepName: val });
      console.log(result);
      if (result.status == 200 && result.data.code != -1) {
        this.Deplist = result.data.Deplist.map(item => {
          return { text: item.DepartmentName, code: item.DepartmentId };
        });
        console.log(val);
        this.showPicker = true;
      } else {
        this.$toast(``);
        return false;
      }
    }, 800),
    //  500),
    async onSubmit(values) {
      console.log("submit", values);
      console.log(this.form);
      let vm = this;
      const toast = vm.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "倒计时 2 秒,数据提交中..."
      });
      let second = 2;
      const timer = setInterval(async () => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒,数据提交中...`;
        } else {
          clearInterval(timer);
          let res = await adddxrm(this.form);
          console.log(res);
          if (res.data.isok) {
            let count = await seletDepCount({ DepID: this.form.DepID });
            console.log(count);
            this.DepCount = count.data.count;
            this.isPerson = false;
            this.wasSubmit = true;
            vm.$toast.success("提交成功");
          } else {
            this.isPerson = false;
            this.wasSubmit = true;
          }
          // 手动清除 Toast
          toast.clear();
        }
      }, 1000);
    },

    // 异步校验函数返回 Promise

    onFailed(errorInfo) {
      this.$toast.fail(errorInfo.errors[0].message);
    },
     
   async GetArticleLists(active) {
      
      console.log(active)
      // this.loading=true;
      let userinfo = Vue.ls.get(UserInfo);
      let node = Vue.ls.get(NodeID);
// Status=1&ClientType=1&NodeID=
      if (!userinfo || !node) {
        // this.$router.push({ name: "Uflogin" });
        return 
        // window.location.href='/#/Uniformlogin'
      }
      else
      {    
      //     setTimeout(() => {
      //   for (let i = 0; i < 4; i++) {
      //     this.aList.push(this.aList.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.aList.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);     
        setTimeout(async() => {
          let status=active==0?1:99
          let articlelist=await GetArticleList({Status:status,ClientType:1,NodeID:node})   
          let dataList= articlelist.data.result   
          console.log(dataList)   
          let length=dataList.rows.length
             for(let i=0;i<3;i++)
          {
            let obj=new Object()
            obj.title=dataList.rows[i].Title
            obj.GeneralID=dataList.rows[i].GeneralID
            obj.InputTime=this.$moment(dataList.rows[i].InputTime).format('MM-DD HH:ss')  
            obj.ImageFiles=dataList.rows[i].Files
            this.aList.push(obj)
          }     
            this.loading = false;
        // 数据全部加载完成
        if (dataList.length >= length) {
             this.finished = true;
        }
        }, 1000);
            
      //     let status=active==0?1:99
      //     console.log(status)
      //     let articlelist=await GetArticleList({Status:status,ClientType:1,NodeID:node})     
      //     console.log(articlelist)
      //     let dataList= articlelist.data.result      
      //     let length=dataList.rows.length
      //     // console.log(i)

      //     if(dataList.count==0)
      //     {
      //       console.log(`进到这里`)
      //       this.aList=[]
      //       //  this.loading=false;
      //        this.finished=true;        
          
      //     }
      //     else
      //     {
      //     setTimeout(() => {
      //       console.log(`进到有数据的这里`)
      //       for(let i=0;i<1;i++)
      //     {
      //       let obj=new Object()
      //       obj.title=dataList.rows[i].Title
      //       obj.GeneralID=dataList.rows[i].GeneralID
      //       obj.InputTime=this.$moment(dataList.rows[i].InputTime).format('MM-DD HH:ss')  
      //       obj.ImageFiles=dataList.rows[i].Files
      //       this.aList.push(obj)
      //     }     
      //       this.loading = false;
      //   // 数据全部加载完成
      //   if (dataList.length >= length) {
      //        this.finished = true;
      //   }
           
      // }, 1000);
      //     }
         


    
      }
    },

    getUserInfo() {
      let id;
      let tel;

      id = Vue.ls.get(ReportId);
      tel = Vue.ls.get(Tel);

      setTimeout(() => {
        getUserInfo({ ReportId: id, tel: tel }).then(res => {
          // {code: -1, msg: "查无记录"}
          let data = res.data.html;
          console.log(data);
          if (data.code != -1) {
            this.Report.tel = data.tel;
          }
          this.personInfo = this.Report;
        });
      }, 500);
    },
    // formatter(type, val) {
    //   if (type === "year") {
    //     return `${val}年`;
    //   } else if (type === "month") {
    //     return `${val}月`;
    //   }
    //   return val;
    // }

    //     GetVerificatCodeAdSmssecret,
    // checkCaptchatoken,

    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-divider
{
  margin: 8px 0px;
    border-color: #f7f7f7;
}
.my-preView >>> .van-image-preview__cover{
    top:500px;
    text-align: left;
    padding:10px 10px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    height: 300px;
}
.van-image-preview >>>.van-image-preview__cover
{

   position: absolute;
   
  
    color:#fff;
    font-size: 15px;
  
}
.van-uploader {
  float: left;
  padding: 0 8px;
}
.posting-uploader-item {
}
.title h1 {
  font-size: 18px;
  font-family: fantasy;
  color: #606266;
}
.list_bg {
  background-color: #f2f6fc;
  margin: 6px;
}
.text_dialog {
  font-size: 16px;
  padding-bottom: 10px;
  text-indent: 2em;
  margin: 15px;
  text-align: left;
  line-height: 26px;
}
.dialogDiv img {
  width: 33%;
}
.Isperson_panel {
  margin: 0px !important;
}
.footer {
  padding: 0px !important;
  margin: 0px !important;
  position: fixed;
  width: 100%;
  background-color: #fff !important;
  bottom: -2px;
}
.van-panel {
  margin: 0px 4px;
}
.van-panel >>> .van-panel__footer {
  float: right;
}
.login_panel {
  background-image: url(../../assets/login_bg.jpg);
}
.myIcon {
  float: right;
  margin-top: 4px;
}
.myIcon >>> .van-icon {
  float: left;
  font-size: 16px !important;
}
.text_result {
  font-size: 14px;
  padding-bottom: 10px;
}
.bottom_button {
  padding-top: 10px !important;
  border-bottom: 0px !important;
}
.van-button
{
  height:36px;
  line-height: 34px;
}
.van-button--normal 
{
  padding: 0 10px;
}
.van-button--normal >>> .van-button__text {
  font-size: 14px;
 
}
.van-cell__title {
  text-align: left;
  padding-left: 20px;
  line-height: 40px;
}
.my_panel {
  font-size: 16px;
  text-align: left;
  padding: 20px;
}
.my_panel >>> .van-row {
  padding: 8px;
  border-bottom: 1px solid #42b983;
}
.myinput >>> .van-cell__value {
  border: #42b983 1px solid;
  border-radius: 15px;
}
.myinput >>> .van-field__body {
  padding-left: 10px;
  font-size: 14px;
}
.van-cell >>> .van-field__label {
  width: 35px;
  font-size: 14px;
  float: left;
  padding-right: 5px;
}
/* .van-cell__value >>> .van-field__body{
      font-size:999px;
} */
.van-cell__value {
  /* background-color: #42b983 !important; */
}
.aListClass
{
 background-color: #fff !important;
}
.van-icon {
  font-size: 25px !important;
}
.van-grid-item__icon {
  font-size: 38px !important;
}
.van-row{
  
}
.van-cell__value {
  /* border: #42b983 1px solid !important; */
  font-size: 14px !important;
  /* background-color: aliceblue !important; */
}

.login_input {
  font-size: 14px !important;
}
.van-cell {
  color: #2b2b2b;
  font-size: 16px;
  line-height: 28px;
  padding: 5px 5px;

  background-color: #f2f6fc;
}

.van-grid-item__text {
  color: #646566;
  font-size: 18px !important;
  word-wrap: break-word;
}
.van-cell__title {
  background-color: #9bcd9b;
  color: #fff;
}
.footer {
  margin-top: 20px;
  padding: 10px;

  color: #2b2b2b;
  background-color: #d7d7d7;
}
.title_5 {
  font-size: 17px;
  padding: 10px;
  background-color: red;
  color: #fff;
  font-weight: 600;
}
.title_6 {
  font-size: 17px;
  padding: 10px;
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
