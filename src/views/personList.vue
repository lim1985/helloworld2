<template>
  <div class="hello">
   <van-nav-bar 
  left-text="返回" 
  left-arrow
  @click-left="onClickLeft" 
/>
  <!-- <van-notice-bar :scrollable="true"> 
当前大祥区登记总数1000人（其中上：返邵来邵人员500人，本地居民500人），卡口50个，其中，重点跟踪的A类0人，B类20人，C类10人，D类13人，已取消观察0人。
</van-notice-bar> -->
<van-row>
  <van-col span="16">
    <div class="title_1">
    <h2>大祥区-{{ jdName==''?'未分类':jdName }}</h2>
    </div>
    </van-col>   
</van-row>

<van-row>
  <van-col span="24">
    <div class="text_1">     
      目前，登记总数{{Countsdata.AllCount}}人(其中：返邵来邵人员{{Countsdata.FsPersonCount}}人，本地居民{{Countsdata.localPersonCount}}人)。
    </div> 
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  返邵来邵人员基本情况
</van-divider>
 <div class="text_1">       
     <!-- console.log(this.todayTimes);
     console.log(this.Be15Dayafter) -->
  截止目前，当天（{{todayTimes}}）已登记{{ toDayCountsdata.AllCount }}人，其中A类{{ toDayCountsdata.AclassCount  }}人，B类{{ toDayCountsdata.BclassCount  }}人，C类{{ toDayCountsdata.CclassCount  }}人，
  D类{{ toDayCountsdata.DclassCount  }}人。
      <!-- 目前，登记总数{{Countsdata.AllCount}}人(其中：返邵来邵人员{{Countsdata.FsPersonCount}}人，本地居民{{Countsdata.localPersonCount}}人)。 -->
    </div> 
     <!-- toDayCountsdata:{ yesTeDayCountsdata:{Day15beforCountsdata -->
  
    </van-col>
</van-row>
<van-row>
  <van-col span="24">
 <div class="text_1">       
  14天内（即{{Be15Dayafter}}以来）共登记{{ Day15beforCountsdata.AllCount}}人，其中A类{{ Day15beforCountsdata.AclassCount  }}人，
  B类{{ Day15beforCountsdata.BclassCount  }}人，C类{{ Day15beforCountsdata.CclassCount  }}人，D类{{ Day15beforCountsdata.DclassCount  }}人。 
      <!-- 目前，登记总数{{Countsdata.AllCount}}人(其中：返邵来邵人员{{Countsdata.FsPersonCount}}人，本地居民{{Countsdata.localPersonCount}}人)。 -->
    </div> 
       

     <!-- toDayCountsdata:{ yesTeDayCountsdata:{Day15beforCountsdata -->
     <!--   localtoDayCountsdata:{   localyesTeDayCountsdata:{localDay15beforCountsdata -->
    </van-col>
</van-row>
<!-- 本地人 -->
<van-row>
  <van-col span="24">
   
 <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  本地居民基本情况
</van-divider>
 <div class="text_1">       
     <!-- console.log(this.todayTimes);
     console.log(this.Be15Dayafter) -->
  截止目前，当天（{{todayTimes}}）已登记{{ localtoDayCountsdata.AllCount }}人，其中A类{{ localtoDayCountsdata.AclassCount  }}人，B类{{ localtoDayCountsdata.BclassCount  }}人，C类{{ localtoDayCountsdata.CclassCount  }}人，
  D类{{ localtoDayCountsdata.DclassCount  }}人。
      <!-- 目前，登记总数{{Countsdata.AllCount}}人(其中：返邵来邵人员{{Countsdata.FsPersonCount}}人，本地居民{{Countsdata.localPersonCount}}人)。 -->
    </div> 
     <!-- toDayCountsdata:{ yesTeDayCountsdata:{Day15beforCountsdata -->
    </van-col>
</van-row>
<van-row>
  <van-col span="24">
 <div class="text_1">       
  14天内（即{{Be15Dayafter}}以来）共登记{{ localDay15beforCountsdata.AllCount}}人，其中A类{{ localDay15beforCountsdata.AclassCount  }}人，
  B类{{ localDay15beforCountsdata.BclassCount  }}人，C类{{ localDay15beforCountsdata.CclassCount  }}人，D类{{ localDay15beforCountsdata.DclassCount  }}人。 
      <!-- 目前，登记总数{{Countsdata.AllCount}}人(其中：返邵来邵人员{{Countsdata.FsPersonCount}}人，本地居民{{Countsdata.localPersonCount}}人)。 -->
    </div> 
     <!-- toDayCountsdata:{ yesTeDayCountsdata:{Day15beforCountsdata -->
     <!--   localtoDayCountsdata:{   localyesTeDayCountsdata:{localDay15beforCountsdata -->
    </van-col>
</van-row>
<!-- line -->
<!-- <van-row>
  <van-col span="24">
   <div class="title_1">
    <h2>设立卡口数{{kakoInfoAndAll.counts}}个</h2>
   </div> -->
<!-- <van-row>
  <van-col span="24">
   <div class="text_1"><span>{{kakoInfoAndAll.counts}}个</span></div>
    </van-col>   
</van-row> -->
<!-- <van-row v-for="(item,index) in kakoInfoAndAll.kakolist" :key="index"> 
  <van-col span="24">
   <div class="text_1"><span>街道：{{ item.text }}</span></div>
    </van-col>  
     <van-row v-for="(SqItem,index) in item.children" :key="index"> 
        <van-col span="24">
   <div class="text_1"><span>社区：{{ SqItem.text }}</span></div>
    </van-col>      
      <van-row v-for="(kdItem,index) in SqItem.kd_list" :key="index"> 
             <van-col span="24">
   <div class="text_1"><span>卡口：{{ kdItem.kakName }}</span></div>
    </van-col>         
      </van-row>

      </van-row>
      <van-divider />
</van-row>
    </van-col>   
</van-row> -->
<!-- jiedao list -->
<!-- <van-row>
  <van-col span="18">
    <div class="title_1">
    <h2>乡镇街道登记人数情况</h2>
    </div>
    </van-col>   
</van-row>

  <van-row class="lim_row" v-for="(item,index) in jdcountList" :key="index">
        <van-col span="20">
          <div class="title_2">
          <span> {{index==0?'':`${index}、`}} {{ item.jiedao==null?'未明确人员':item.jiedao}} {{ item.counts}}人</span>
        </div>
       </van-col>   
    
        <van-col  span="4">
      
          <div class="title_2 " style="float:right;padding-right: 10px;">
              <span>  详细</span>
            </div>
    
       </van-col>               
    </van-row> -->
<!-- <van-row v-for="(item,index) in jdcountList" :key="index">
  <van-col span="24">
      {{ item.jiedao}}
    </van-col>
</van-row> -->
<!-- jiedao end -->
<!-- line -->
<van-row>
  <van-col span="24">
   <div class="title_1">
    <h2>重点跟踪</h2>
   </div>
<van-row>
  <van-col span="24">
<van-row class="lim_row2">
          <van-col span="11">
          <div class="title_3">
          <span>重点观察：<b>{{Countsdata.ZDGZ_Count}}</b>人</span>
        </div>
       </van-col> 
       <van-col  span="11" >
         <div class="title_3">
          <span>解除观察：<b>{{Countsdata.QXGZ_Count}}</b>人</span>
        </div>
       </van-col>                   
</van-row>

<!-- A—为湖北武汉返邵人员，确诊病例及其密切接触者
B—有发烧症状
C—与湖北有密切接触人员（即2月1日以后有接触，接触未解除仍需监测的湖北人员
D—除湖北以外省市，2月1日来邵外来人员 -->
<!-- <van-icon name="question-o" /> -->
  <!-- FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0 -->
    <van-row class="lim_row">
        <van-col span="20">
          <div class="title_2">
          <span>A类人员{{Countsdata.AclassCount}}人</span>
        </div>
       </van-col>   
       <van-col  span="4">
        <van-icon name="question-o" />
       </van-col>  
         <van-row>
        <van-col span="24">
          <div class="text_2">
              湖北武汉返邵人员，确诊病例及其密切接触者
         </div>
          </van-col>
           </van-row>         
    </van-row>
<!-- A -->
     <van-row class="lim_row">
  <van-col span="20">
     <div class="title_2">
    <span>B类人员{{Countsdata.BclassCount}}人</span>
   </div>
    </van-col>  
        <van-col  span="4">
   <van-icon name="question-o" />
    </van-col>   

 <van-row>
        <van-col span="24">
          <div class="text_2">
              有发烧症状
         </div>
          </van-col>
           </van-row> 

</van-row>
<!-- B -->
     <van-row class="lim_row">
  <van-col span="20">
     <div class="title_2">
    <span>C类人员{{Countsdata.CclassCount}}人</span>
   </div>
    </van-col>   
        <van-col  span="4">
   <van-icon name="question-o" />
    </van-col>  

     <van-row>
        <van-col span="24">
          <div class="text_2">
              与湖北有密切接触人员（即{{ Be15Dayafter }}以后有接触，接触未解除仍需监测的湖北人员
         </div>
          </van-col>
           </van-row> 
    </van-row>
    <!-- C -->
    <van-row class="lim_row">
  <van-col span="20">
     <div class="title_2">
    <span>D类人员{{Countsdata.DclassCount}}人</span>
   </div>
    </van-col>   
        <van-col  span="4">
   <van-icon name="question-o" />
    </van-col>  

     <van-row>
        <van-col span="24">
          <div class="text_2">
              除湖北以外省市，{{ Be15Dayafter }}来邵外来人员 
         </div>
          </van-col>
           </van-row> 
</van-row>
<!-- D -->
  <!-- <van-row class="lim_row">
        <van-col span="20">
          <div class="title_2">
          <span>接受过14天观察人员0人</span>
        </div>
       </van-col>   
       <van-col  span="4">
        <van-icon name="question-o" />
       </van-col>  
         <van-row>
        <van-col span="24">
          <div class="text_2">
               返/来邵前14天内已经居家/集中医学观察满14天人员
         </div>
          </van-col>
           </van-row>         
    </van-row> -->

<!-- end -->
    </van-col>   
</van-row>
    </van-col>   
</van-row>
<!-- line end -->
  </div>
</template>

<script>
// import Vue from 'vue'
// import { Tel ,IsshowNav,Version} from "@/store/mutation-types"//MD5Tel AdminInfo

// import { checkLsinfo } from "@/components/lsUser";
  // import { mapState} from 'vuex'
  // import navigations from '@/components/nav/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
 import {
//   addRecords,
//   checkAdmin,//检测管理员
//   // reportUpdate,
//   getUserInfo,
//   // reportAdd,
//   CheckTel
getAllDataGroupbyJDID,
AllKakoandCounts,
getDataCounts
  } from "@/api/index";
// import placesMap from "@/tools/map";
import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "dataCount",
    components: {    
   
    },
    //     computed:{    
    //   ...mapState({
    //     VXReportId:state=>state.user.ReportId,        
    //   })    
    // },
  props: {
    msg: String
  },
  mounted() {
    let vm=this;
    let query=vm.$route.query;  
    this.getCountData(query);
 
    // Vue.ls.remove(IsshowNav)
        // Vue.ls.remove(User_ID)
    // MD5Tel
    // this.auth();
    // this.init_palceMap();
    // this.isnav=Vue.ls.get(IsshowNav)==null?false:true
  
    // console.log(Vue.ls.get(IsshowNav))
    // // this.isnav=
    // console.log(this.isnav)
    // let s=Vue.ls.get(IsshowNav)
    // this.isnav=s;
    // console.log(this.isnav)
   
    
  },
  data() 
  {    
    
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
  //    this.SQ_Rules=[
  //      { required: true, message: "请选择街道/社区或村" },
  //   ];
  //   this.cityRules=[
  //      { required: true, message: "请选择户籍城市" },
  //   ];
  //   this.phoneRules = [
  //     { required: true, message: "请输入手机号" },
  //     // { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
  //     { validator: this.phoneValidator, message: "手机号格式错误" }
  //   ];
  //  this.gclyRules = [
  //     { required: true, message: "请输入观察理由" },
  //     // { validator: this.userNameValidator, message: "姓名只能输入中文" }
  //   ];

  //   this.userNameRules = [
  //     { required: true, message: "请输入姓名" },
  //     { validator: this.userNameValidator, message: "姓名只能输入中文" }
  //   ];
  //   this.IdCardRules = [
  //     { required: true, message: "请输入身份证" },
  //     { validator: this.IdCardValidator, message: "请正确输入身份证" }
  //   ];

    return {
        todayTimes:'',
      Be15Dayafter:'',
      jdName:'',
      jdcountList:[],
      kakoInfoAndAll:{
        counts:0,
        kakolist:[],
      },
       Countsdata:{
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
           toDayCountsdata:{ 
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
        yesTeDayCountsdata:{
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
         Day15beforCountsdata:{
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
      // 本地人员数据
         localtoDayCountsdata:{   
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
        localyesTeDayCountsdata:{
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
         localDay15beforCountsdata:{
         AllCount:0,
         FsPersonCount:0,
         localPersonCount:0,
         AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0,
         ZDGZ_Count:0,
         QXGZ_Count:0
       },
    };
  },
  methods: {
     formatMMDD(data)
   {
     let _data=data.split('-')
     let mmdd=_data[0]+'月'+_data[1]+'日'
     return mmdd
   },
    // 提取卡点信息合并到街道数组
 mergeKDInfo(jdList/*街道数组*/, kdList/*卡点数组*/){
    // 复制街道数组
    var _jdList = JSON.parse(JSON.stringify(jdList));
    // 卡点数组整理, 把同街道社区的卡点统计为一个数组 [{卡点名：卡点 id},...]
    var _kdInfo = {};
    kdList.forEach(item=>{
        var gid = item.DepID + '_' + item.SQID;//合成一个查询 id
        if(!(gid in _kdInfo)){
            _kdInfo[gid] = [];
        }
        var data = {};
        data.kakId = item.kakID;// 收集相同街道与社区的卡点
        data.kakName = item.kk_name;
        _kdInfo[gid].push(data);
    });
    // 遍历街道
    _jdList.forEach(item => {
        var jdId = item.code;
        if(Array.isArray(item.children)){
            // 遍历社区
            item.children.forEach(sqItem=>{
                var sqId = sqItem.code;
                var gid = jdId + '_' + sqId;// 合成组id
                // 使用组 id 到卡点统计表中查询
                if(gid in _kdInfo){
                    var kdItem = _kdInfo[gid];
                    sqItem.kd_list = kdItem;
                    item.hasKd = true;
                }
            });
            if(item.hasKd){
                item.children = item.children.filter(item=>{
                    return !!item.kd_list;
                });
            }
        }
    });
    return _jdList.filter(item=>{
        return item.hasKd;
    });
    // // 遍历街道
    // _jdList.forEach(item => {
    //     var jdId = item.code;
    //     if(Array.isArray(item.children)){
    //         // 遍历社区
    //         item.children.forEach(sqItem=>{
    //             var sqId = sqItem.code;
    //             var gid = jdId + '_' + sqId;// 合成组id
    //             // 使用组 id 到卡点统计表中查询
    //             if(gid in _kdInfo){
    //                 var kdItem = _kdInfo[gid];
    //                 sqItem.kd_list = kdItem;
    //             }
    //         })
    //     }
    // });
    // return _jdList;
},
    async getCountData(s)
    {
      
       let data= this.$moment().format("MM-DD");
       let Be15data=this.$moment().subtract('days',15).format('MM-DD');//15天前  
       this.todayTimes=this.formatMMDD(data);
       this.Be15Dayafter=this.formatMMDD(Be15data);  

       let JdCount=await getAllDataGroupbyJDID();
      //  let result=await getDataCounts(s);

       let result=await getDataCounts({personType:1,jdId:s.jdId});//返邵来邵人员
       let loalresult=await getDataCounts({personType:0,jdId:s.jdId});

        console.log(result)
       let JD_List=xzsqoptions[0].children
       console.log(loalresult);
        //本地人员
       //15天前到当天的数据
           loalresult.data.be15daylate.rows.forEach(v => {
         this.localDay15beforCountsdata.AllCount=v.counts
         if(v.personType==1)
         {
         this.localDay15beforCountsdata.FsPersonCount= v.counts
         }
         else
         {
         this.localDay15beforCountsdata.localPersonCount= v.counts
         }
         switch (v.status) {
           case 66:
            this.localDay15beforCountsdata.QXGZ_Count= v.counts
             break;
           case 99:
             this.localDay15beforCountsdata.ZDGZ_Count= v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          this.localDay15beforCountsdata.AclassCount= this.localDay15beforCountsdata.AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          this.localDay15beforCountsdata.BclassCount= this.localDay15beforCountsdata.BclassCount+v.counts
         }
          if(v.C_class==true)
         {
         this.localDay15beforCountsdata.CclassCount= this.localDay15beforCountsdata.CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          this.localDay15beforCountsdata.DclassCount= this.localDay15beforCountsdata.DclassCount+v.counts
         }     
      });
         console.log(this.localDay15beforCountsdata)
       //昨天数据
           loalresult.data.yesterday.rows.forEach(v => {
          this.localyesTeDayCountsdata.AllCount= this.localyesTeDayCountsdata.AllCount+v.counts
         if(v.personType==1)
         {
         this.localyesTeDayCountsdata.FsPersonCount= this.localyesTeDayCountsdata.FsPersonCount+v.counts
         }
         else
         {
         this.localyesTeDayCountsdata.localPersonCount= this.localyesTeDayCountsdata.localPersonCount+v.counts
         }
         switch (v.status) {
           case 66:
            this.localyesTeDayCountsdata.QXGZ_Count= this.localyesTeDayCountsdata.QXGZ_Count+v.counts
             break;
           case 99:
             this.localyesTeDayCountsdata.ZDGZ_Count= this.localyesTeDayCountsdata.ZDGZ_Count+v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          this.localyesTeDayCountsdata.AclassCount= this.localyesTeDayCountsdata.AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          this.localyesTeDayCountsdata.BclassCount= this.localyesTeDayCountsdata.BclassCount+v.counts
         }
          if(v.C_class==true)
         {
         this.localyesTeDayCountsdata.CclassCount= this.localyesTeDayCountsdata.CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          this.localyesTeDayCountsdata.DclassCount= this.localyesTeDayCountsdata.DclassCount+v.counts
         }     
      });
      console.log(this.localyesTeDayCountsdata)
       //当天数据
           loalresult.data.toDay.rows.forEach(v => {
          this.localtoDayCountsdata.AllCount= this.localtoDayCountsdata.AllCount+v.counts
         if(v.personType==1)
         {
         this.localtoDayCountsdata.FsPersonCount= this.localtoDayCountsdata.FsPersonCount+v.counts
         }
         else
         {
         this.localtoDayCountsdata.localPersonCount= this.localtoDayCountsdata.localPersonCount+v.counts
         }
         switch (v.status) {
           case 66:
            this.localtoDayCountsdata.QXGZ_Count= this.localtoDayCountsdata.QXGZ_Count+v.counts
             break;
           case 99:
             this.localtoDayCountsdata.ZDGZ_Count= this.localtoDayCountsdata.ZDGZ_Count+v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          this.localtoDayCountsdata.AclassCount= this.localtoDayCountsdata.AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          this.localtoDayCountsdata.BclassCount= this.localtoDayCountsdata.BclassCount+v.counts
         }
          if(v.C_class==true)
         {
         this.localtoDayCountsdata.CclassCount= this.localtoDayCountsdata.CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          this.localtoDayCountsdata.DclassCount= this.localtoDayCountsdata.DclassCount+v.counts
         }     
      });

      // 本地数据 end
        //15天前到当天的数据
           result.data.be15daylate.rows.forEach(v => {
         this.Day15beforCountsdata.AllCount= this.Day15beforCountsdata.AllCount+v.counts
         if(v.personType==1)
         {
         this.Day15beforCountsdata.FsPersonCount= this.Day15beforCountsdata.FsPersonCount+v.counts
         }
         else
         {
         this.Day15beforCountsdata.localPersonCount= this.Day15beforCountsdata.localPersonCount+v.counts
         }
         switch (v.status) {
           case 66:
            this.Day15beforCountsdata.QXGZ_Count= this.Day15beforCountsdata.QXGZ_Count+v.counts
             break;
           case 99:
             this.Day15beforCountsdata.ZDGZ_Count= this.Day15beforCountsdata.ZDGZ_Count+v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          this.Day15beforCountsdata.AclassCount= this.Day15beforCountsdata.AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          this.Day15beforCountsdata.BclassCount= this.Day15beforCountsdata.BclassCount+v.counts
         }
          if(v.C_class==true)
         {
         this.Day15beforCountsdata.CclassCount= this.Day15beforCountsdata.CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          this.Day15beforCountsdata.DclassCount= this.Day15beforCountsdata.DclassCount+v.counts
         }     
      });
         console.log(this.Day15beforCountsdata)
       //昨天数据
           result.data.yesterday.rows.forEach(v => {
          this.yesTeDayCountsdata.AllCount= this.yesTeDayCountsdata.AllCount+v.counts
         if(v.personType==1)
         {
         this.yesTeDayCountsdata.FsPersonCount= this.yesTeDayCountsdata.FsPersonCount+v.counts
         }
         else
         {
         this.yesTeDayCountsdata.localPersonCount= this.yesTeDayCountsdata.localPersonCount+v.counts
         }
         switch (v.status) {
           case 66:
            this.yesTeDayCountsdata.QXGZ_Count= this.yesTeDayCountsdata.QXGZ_Count+v.counts
             break;
           case 99:
             this.yesTeDayCountsdata.ZDGZ_Count= this.yesTeDayCountsdata.ZDGZ_Count+v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          this.yesTeDayCountsdata.AclassCount= this.yesTeDayCountsdata.AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          this.yesTeDayCountsdata.BclassCount= this.yesTeDayCountsdata.BclassCount+v.counts
         }
          if(v.C_class==true)
         {
         this.yesTeDayCountsdata.CclassCount= this.yesTeDayCountsdata.CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          this.yesTeDayCountsdata.DclassCount= this.yesTeDayCountsdata.DclassCount+v.counts
         }     
      });
      console.log(this.yesTeDayCountsdata)
       //当天数据
           result.data.toDay.rows.forEach(v => {
          this.toDayCountsdata.AllCount= this.toDayCountsdata.AllCount+v.counts
         if(v.personType==1)
         {
         this.toDayCountsdata.FsPersonCount= this.toDayCountsdata.FsPersonCount+v.counts
         }
         else
         {
         this.toDayCountsdata.localPersonCount= this.toDayCountsdata.localPersonCount+v.counts
         }
         switch (v.status) {
           case 66:
            this.toDayCountsdata.QXGZ_Count= this.toDayCountsdata.QXGZ_Count+v.counts
             break;
           case 99:
             this.toDayCountsdata.ZDGZ_Count= this.toDayCountsdata.ZDGZ_Count+v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          this.toDayCountsdata.AclassCount= this.toDayCountsdata.AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          this.toDayCountsdata.BclassCount= this.toDayCountsdata.BclassCount+v.counts
         }
          if(v.C_class==true)
         {
         this.toDayCountsdata.CclassCount= this.toDayCountsdata.CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          this.toDayCountsdata.DclassCount= this.toDayCountsdata.DclassCount+v.counts
         }     
      });
      console.log(this.toDayCountsdata)
    
    JD_List.forEach(v => {
        
         if(s.jdId==v.code)
         {
          this.jdName=v.text

         }         
       });
     
       
       let kakoAllCounts=await AllKakoandCounts();
       let kdList=kakoAllCounts.data.html.rows
      
       this.jdcountList=JdCount.data.result.rows

    
      //  DepID:78
      //  SQID:104
      //  createTimes:"2020-02-28T13:09:22.380Z"
      //  createUserId:1204
      //  kakID:32
      //  kk_name:"光明园小区"
     
    
      let _kakolist=this.mergeKDInfo(JD_List,kdList)
       
      // this.kakoInfoAndAll.kakolist=_kakolist;
      // console.log(this.kakoInfoAndAll)
      
       this.kakoInfoAndAll={
         counts:kakoAllCounts.data.html.count,
         kakolist:_kakolist
       }
      //  console.log(this.kakoInfoAndAll)
      //  console.log(kakoAllCounts);
       let _allcount=0
       let _FsPersonCount=0
       let _localPersonCount=0
       let _ZDGZCount=0
       let _QXGZCount=0
       let _AclassCount=0
       let _BclassCount=0
       let _CclassCount=0
       let _DclassCount=0
      result.data.result.rows.forEach(v => {
         _allcount=_allcount+v.counts
         if(v.personType==1)
         {
          _FsPersonCount=_FsPersonCount+v.counts
         }
         else
         {
         _localPersonCount=_localPersonCount+v.counts
         }
         switch (v.status) {
           case 66:
             _QXGZCount=_QXGZCount+v.counts
             break;
           case 99:
             _ZDGZCount=_ZDGZCount+v.counts
             break;         
           default:
             break;
         }

         if(v.A_class==true)
         {
          _AclassCount=_AclassCount+v.counts
         }
          if(v.B_class==true)
         {
          _BclassCount=_BclassCount+v.counts
         }
          if(v.C_class==true)
         {
          _CclassCount=_CclassCount+v.counts
         }
          if(v.D_class==true)
         {
          _DclassCount=_DclassCount+v.counts
         }     
      });
// this.Countsdata.AllCount=_allcount;
// console.log(this.Countsdata)
      // console.log(_allcount)
      // console.log(result)
      this.Countsdata={
        AllCount:_allcount,
        FsPersonCount:_FsPersonCount,
        localPersonCount:_localPersonCount,
        AclassCount:_AclassCount,
        BclassCount:_BclassCount,
        CclassCount:_CclassCount,
        DclassCount:_DclassCount,
        ZDGZ_Count:_ZDGZCount,
        QXGZ_Count:_QXGZCount
      }
  
    },
   onClickLeft(){
  let vm=this
  vm.$router.go(-1);
  // vm.$router.push({path:'/'})
},
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text_2
{
  text-align: left;
    padding-left: 20px;
    color: #303133;
}


.lim_row2{
       background-color: #409EFF;
    padding: 8px;
    border: 1px solid #dfdfdf;
    margin: 10px;
    border-radius: 5px;
    
}
.lim_row{
       background-color: #f7f9ff;
    padding: 8px;
    border: 1px solid #dfdfdf;
    margin: 10px;
    border-radius: 5px;
    
}
.title_2{
  line-height: 33px;
    text-align: left;
    font-size: 16px;
    padding-left: 20px;
    color: #303133;
}
.title_3{
  line-height: 33px;
    text-align: left;
    font-size: 16px;
    padding-left: 20px;
    color: #fff;
   
   
}
.title_1{
text-align: left;
    padding-left: 20px;
    color: #303133;
}
.text_1{
     text-align: left;
    padding: 0px 15px 0px 20px;
    font-size: 16px;
}
.van-icon
{
  font-size: 24px !important;
}
.van-grid-item__icon{
  font-size: 38px !important;
}
.van-cell__value{
font-size: 18px !important;
    background-color: aliceblue !important;
}

.login_input{
  font-size:14px !important;
}
.van-cell{
    color: #2b2b2b;
    font-size: 17px;
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
/* h3 {
  margin: 40px 0 0;
} */
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
