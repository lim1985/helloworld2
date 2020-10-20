<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
  <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->

  <div>
    <div class="header">
      


  
 <van-row>
        <van-col
          style="text-align: left;line-height: 10px;" span="24">

          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
          <!-- {{fullWidth}}{{UA}}- -->

          <!-- http://info.dxzc.gov.cn/images/2020/7/header.jpg -->
          <!-- <span>    <img alt="Vue logo" width="100%" src="../../assets/C_header.jpg" /></span> -->
    <van-nav-bar
  title=""
  left-text="返回"
 fixed
  left-arrow
  @click-left="onClickLeft"
  >
   <template #left>
    <van-icon name="arrow-left" size="26" ></van-icon>
  </template>
            </van-nav-bar>

        </van-col>      
      </van-row>
      <van-row>
          <van-col span='24'>
              <div class="header">
                 <div class="Title">
                        {{ content.title}}
                 </div>
              </div>
          </van-col>
      </van-row>
      <van-row>
          <van-col span='24'>
              <div class="headerFloot">              
                              <van-row>
                                <van-col offset='' span="4">
                                 <h6 class="top">{{content.NodeName}}</h6>
                               </van-col>
                               <van-col offset='' span="3">
                                 <h6 class="top2">{{ content.Author}}</h6>
                               </van-col>
                                <van-col offset='' v-if="content.Tips" span="8">
                                 <h6 class="top2">{{ content.Tips}}</h6>
                               </van-col>
                               <van-col span="8">
                                    <h6 class="toptime">{{content.InputTime}}</h6>
                               </van-col>
                            </van-row> 
                            
              </div>
                 <div class="line">
                        <van-divider />
                    </div>
          </van-col>
      </van-row>
      <van-row>
          <van-col span='24'>
              <div v-html="content.c" class="content">                
              </div>
          </van-col>
      </van-row>
    
   
      
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
// import Vue from "vue";
// import { mapState } from "vuex";
//import { Tel, ReportId, UserInfo, NodeID } from "@/store/mutation-types"; //MD5Tel AdminInfo
//  import eruda from 'eruda'
  // IsAdmin ,Version,AdminInfo,



import {
  getconetentbyid
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "specialView",
  computed: {
    // ...mapState({
    //   Userinfo: state => state.user.userinfo
    // })
  },
  watch: {
    // DepCount(val) {
    //   setTimeout(() => {
    //     this.DepCount = val;
    //   }, 500);
    // }
  },
  props: {
    msg: String
  },
  created() {
  
      console.log(this.$route.params)
      this.initData(this.$route.params.Id)
    //  this.auth();
  },
  mounted()
  {  
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
        content:{
        c:'',
        title:'',
        InputTime:'',
        Author:'',
        Keyword:'',
        TitleIntact:''
    
        },
        SID:0
     
      // personTitle:''
    };
  },
  methods:
   {
    addDomainWithStr(str, domain){
        //{PE.SiteConfig.ApplicationPath/}{PE.SiteConfig.uploaddir/}      
        let path=`/UploadFiles/`
        let html= str.replace(/src="{(PE.SiteConfig.ApplicationPath\/)}{(PE.SiteConfig.uploaddir\/)}/g,"src=\""+domain+path)
                     .replace(/src="(?=\/UploadFiles)/g, "src=\"" +domain);

        // str.replace(/src="(?=\/UploadFiles)/g, "src=\"" + domain);
        // str.replace(/{(PE.SiteConfig.ApplicationPath\/)}{(PE.SiteConfig.uploaddir\/)}/g,`http://www.dxzc.gov.cn`+path)

        // str.replace(/{(PE.SiteConfig.ApplicationPath\/)}/g, domain);
        // str.replace(/{PE.SiteConfig.uploaddir\/}/g,path);
        return html
    },
     onClickLeft()
     {
      let vm = this;
      vm.$router.push({ name: "Specialindex",params:{SpecialId:this.SID} });
     },
   
   async initData(Id)
   {
      
       let result=await getconetentbyid({ID:Id})
       console.log(result)
       if(result.data.code==100)
       {
        this.SID=result.data.result[0].SpecialID
        this.content.c=this.addDomainWithStr(result.data.result[0].Content,'http://info.dxzc.gov.cn')
        this.content.title=result.data.result[0].Title
        this.content.InputTime=result.data.result[0].InputTime
        this.content.Author=result.data.result[0].Author
        this.content.Keyword=result.data.result[0].Keyword
        this.content.TitleIntact=result.data.result[0].TitleIntact  
        this.content.NodeName=result.data.result[0].NodeName  
        this.content.Tips=!result.data.result[0].Tips?'':result.data.result[0].Tips

        
        
        
       }
       console.log(this.content)
        
       
   },
   
    GetUA() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      // console.log(flag)
      this.UA = !flag ? "PC" : flag;
      // console.log(this.UA)
    },


    // getUserInfo() {
    //   let id;
    //   let tel;

    //   id = Vue.ls.get(ReportId);
    //   tel = Vue.ls.get(Tel);

    //   setTimeout(() => {
    //     getUserInfo({ ReportId: id, tel: tel }).then(res => {
    //       // {code: -1, msg: "查无记录"}
    //       let data = res.data.html;
    //       console.log(data);
    //       if (data.code != -1) {
    //         this.Report.tel = data.tel;
    //       }
    //       this.personInfo = this.Report;
    //     });
    //   }, 500);
    // }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
        margin-block-start: 2em;

}
.toptime{
      color:#a3a5aa;
      font-weight: 500;
      margin-block-start:.5em;
}
.line>>>.van-divider
{
    margin-block-start: 1px;
    margin-inline-start: 10px;
    margin-inline-end: 10px;
    border-color: #F2F6FC;
    margin-block-end: .3em;
}
.Title{
    color:#000;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start:.5em;
    margin-inline-end: .5em;
    font-size: 1.4em;
        text-align: left;
}
.content >>>img
{
    width:100% !important;
    margin-inline-start: -1em;
    height: 100% !important;
    border-radius: 5px;
}
.content >>>input
{
    width:100% !important;
    margin-inline-start: -2em;
    height: 100% !important;
    border-radius: 5px;
}
.content{
color:#000;
 text-indent: 1em;
 line-height: 28px;
 padding:0 15px;
 font-size: 18px;
 float:left;
 text-align: left;
 
}
h6
{
    display: block;
    font-size: 0.87em;
    margin-block-start: 0.33em;
    margin-block-end: 0.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  
    font-weight:100;
  
}
</style>
