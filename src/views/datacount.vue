<template>
  <div class="hello">
    <van-nav-bar left-text="返回首页" left-arrow @click-left="onClickLeft" />
    <!-- <van-notice-bar :scrollable="true"> 
当前大祥区登记总数1000人（其中上：返邵来邵人员500人，本地居民500人），卡口50个，其中，重点跟踪的A类0人，B类20人，C类10人，D类13人，已取消观察0人。
</van-notice-bar> -->
    <van-row>
      <van-col span="8">
        <div class="title_1">
          <h2>大祥区</h2>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <div class="text_1">
          目前，登记总数{{ Countsdata.AllCount }}人(其中：返邵来邵人员{{
            Countsdata.FsPersonCount
          }}人，本地居民{{ Countsdata.localPersonCount }}人)。
        </div>
        <van-row>
          <van-col span="16">
            <div class="title_4">
              <h3>返邵来邵人员登记情况</h3>
            </div>
          </van-col>
        </van-row>

        <!-- AclassCount:0,
         BclassCount:0,
         DclassCount:0,
         CclassCount:0, -->
        <van-row>
          <van-col span="24">
            <div class="text_1">
              当天({{ todayTimes }})，登记总数{{
                toDayCountsdata.AllCount
              }}人，其中A类{{ toDayCountsdata.AclassCount }}人，B类{{
                toDayCountsdata.BclassCount
              }}人， C类{{ toDayCountsdata.CclassCount }}人， D类{{
                toDayCountsdata.DclassCount
              }}人。
              <!-- (其中：返邵来邵人员{{toDayCountsdata.FsPersonCount}}人，本地居民{{toDayCountsdata.localPersonCount}}人) -->
            </div>
          </van-col>
        </van-row>
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#ccc', padding: '0 16px' }"
        >
        </van-divider>
        <van-row>
          <van-col span="24">
            <div class="text_1">
              昨天({{ yesToday }}),登记总数{{
                yesTeDayCountsdata.AllCount
              }}人，其中A类{{ yesTeDayCountsdata.AclassCount }}人，B类{{
                yesTeDayCountsdata.BclassCount
              }}人， C类{{ yesTeDayCountsdata.CclassCount }}人， D类{{
                yesTeDayCountsdata.DclassCount
              }}人。
              <!-- (其中：返邵来邵人员{{toDayCountsdata.FsPersonCount}}人，本地居民{{toDayCountsdata.localPersonCount}}人) -->
            </div>
          </van-col>
        </van-row>
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#ccc', padding: '0 16px' }"
        >
          截止目前（{{ todayTimes }}）14天内返邵来邵人员基本情况
        </van-divider>
        <!-- offset="1"  -->
        <van-row>
          <van-col class="mytd" span="7">
            <div class="title_2">
              乡镇名
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              A类
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              B类
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              C类
            </div>
          </van-col>
          <van-col class="mytd" span="5">
            <div class="title_2">
              D类
            </div>
          </van-col>
        </van-row>

        <!-- aCount0
allCount:343
bCount:0
cCount:0
dCount:343
jiedao:null -->
        <van-row
          class="mytr"
          v-for="(item, index) in FS_Local_arr"
          :key="index"
        >
          <van-col class="mytd" span="7">
            <div class="title_2">
              {{ item.jiedao == null ? "未分类" : item.jiedao }}
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              {{ item.aCount == false ? "0" : item.aCount }}人
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              {{ item.bCount == false ? "0" : item.bCount }}人
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              {{ item.cCount == false ? "0" : item.cCount }}人
            </div>
          </van-col>
          <van-col class="mytd" span="5">
            <div class="title_2">
              {{ item.dCount == false ? "0" : item.dCount }}人
            </div>
          </van-col>
        </van-row>

        <van-divider
          :style="{
            color: '#1989fa',
            'margin-top': '0px',
            borderColor: '#ccc'
          }"
        >
        </van-divider>

        <van-row>
          <van-col span="16">
            <div class="title_4">
              <h3>本地居民登记情况</h3>
            </div>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <div class="text_1">
              当天({{ todayTimes }})，登记总数{{
                localtoDayCountsdata.AllCount
              }}人，其中A类{{ localtoDayCountsdata.AclassCount }}人，B类{{
                localtoDayCountsdata.BclassCount
              }}人， C类{{ localtoDayCountsdata.CclassCount }}人。
              <!-- (其中：返邵来邵人员{{toDayCountsdata.FsPersonCount}}人，本地居民{{toDayCountsdata.localPersonCount}}人) -->
            </div>
          </van-col>
        </van-row>
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#ccc', padding: '0 16px' }"
        >
        </van-divider>
        <van-row>
          <van-col span="24">
            <div class="text_1">
              昨天({{ yesToday }}),登记总数{{
                localyesTeDayCountsdata.AllCount
              }}人，其中A类{{ localyesTeDayCountsdata.AclassCount }}人，B类{{
                localyesTeDayCountsdata.BclassCount
              }}人， C类{{ localyesTeDayCountsdata.CclassCount }}人。
              <!-- (其中：返邵来邵人员{{toDayCountsdata.FsPersonCount}}人，本地居民{{toDayCountsdata.localPersonCount}}人) -->
            </div>
          </van-col>
        </van-row>
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#ccc', padding: '0 16px' }"
        >
          截止目前（{{ todayTimes }}）14天内本地居民基本情况
        </van-divider>
        <van-row>
          <van-col class="mytd" span="7">
            <div class="title_2">
              乡镇名
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              A类
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              B类
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              C类
            </div>
          </van-col>
          <van-col class="mytd" span="5">
            <div class="title_2">
              总数
            </div>
          </van-col>
        </van-row>

        <van-row
          class="mytr"
          v-for="(item, index) in Local_arr"
          :key="index + 100"
        >
          <van-col class="mytd" span="7">
            <div class="title_2">
              {{ item.jiedao == null ? "未分类" : item.jiedao }}
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              {{ item.aCount == false ? "0" : item.aCount }}人
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              {{ item.bCount == false ? "0" : item.bCount }}人
            </div>
          </van-col>
          <van-col class="mytd" span="4">
            <div class="title_2">
              {{ item.cCount == false ? "0" : item.cCount }}人
            </div>
          </van-col>
          <van-col class="mytd" span="5">
            <div class="title_2">
              {{ item.allCount == false ? "0" : item.allCount }}人
            </div>
          </van-col>
        </van-row>

        <van-divider
          :style="{
            color: '#1989fa',
            'margin-top': '0px',
            borderColor: '#ccc'
          }"
        >
        </van-divider>
        <!-- toDayCountsdata:{ yesTeDayCountsdata:{Day15beforCountsdata -->
        <!--  yesTeDayCountsdata:{ -->
      </van-col>
    </van-row>

    <!-- 本地人 -->

    <!-- A -->

    <!-- D -->
    <!-- <van-row>
  <van-col span="24">
 <div class="text_1"> 
  湖北武汉返邵人员，确诊病例及其密切接触者(A类)
    </div> 
    </van-col>
</van-row>
<van-row>
  <van-col span="24">
 <div class="text_1"> 
  现在是否有发热症状(B类)
    </div> 
    </van-col>
</van-row>
<van-row>
  <van-col span="24">
 <div class="text_1"> 
  与湖北有密切接触人员，(即排查当日前14天内有接触，接触未解除仍需监测的湖北人员)(C类)
    </div> 
    </van-col>
</van-row>
<van-row>
  <van-col span="24">
 <div class="text_1"> 
除湖北以外省市，排查当日前14天内来邵外来人员(D类)
    </div> 
    </van-col>
</van-row> -->

    <!-- 与湖北有密切接触人员，(即排查当日前14天内有接触，接触未解除仍需监测的湖北人员)(C类)
            除湖北以外省市，排查当日前14天内来邵外来人员(D类) 湖北武汉返邵人员，确诊病例及其密切接触者(A类)
            现在是否有发热症状(B类) -->

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
                  <span
                    >重点观察：<b style="color：red;">{{
                      Countsdata.ZDGZ_Count
                    }}</b
                    >人</span
                  >
                </div>
              </van-col>
              <van-col span="11">
                <div class="title_3">
                  <span
                    >解除观察：<b>{{ Countsdata.QXGZ_Count }}</b
                    >人</span
                  >
                </div>
              </van-col>
            </van-row>
            <!-- line -->
            <van-row>
              <van-col span="24">
                <div class="title_1">
                  <h2>设立卡口数{{ kakoInfoAndAll.counts }}个</h2>
                </div>
              </van-col>
            </van-row>
            <van-collapse v-model="activeName" accordion>
              <van-row
                v-for="(item, index) in kakoInfoAndAll.kakolist"
                :key="index"
              >
                <van-col span="24">
                  <div class="title_1">
                    <van-collapse-item
                      :title="`${item.text},卡口数:${item.count}个`"
                      :name="index"
                    >
                      <van-row
                        v-for="(SqItem, index) in item.children"
                        :key="index"
                      >
                        <van-col span="24">
                          <div class="text_4">
                            <span
                              >{{ index + 1 }}、社区：{{ SqItem.text }}</span
                            >
                          </div>
                        </van-col>
                        <van-row
                          v-for="(kdItem, index) in SqItem.kd_list"
                          :key="index"
                        >
                          <van-col span="24">
                            <div class="text_3">
                              <span>卡口：{{ kdItem.kakName }}</span>
                            </div>
                          </van-col>
                        </van-row>
                        <van-divider
                          :style="{
                            color: '#EBEEF5',
                            borderColor: '#EBEEF5',
                            padding: '0 0px'
                          }"
                        >
                        </van-divider>
                      </van-row>
                    </van-collapse-item>
                  </div>
                </van-col>
              </van-row>
            </van-collapse>
            <!-- <van-row>
  <van-col span="24">
   <div class="title_1">
    <h2>设立卡口数{{kakoInfoAndAll.counts}}个</h2>
   </div>
<van-row v-for="(item,index) in kakoInfoAndAll.kakolist" :key="index"> 
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
            <van-row>
              <van-col span="18">
                <div class="title_1">
                  <h2>乡镇街道登记人数情况</h2>
                </div>
              </van-col>
            </van-row>

            <van-row
              class="lim_row"
              v-for="(item, index) in jdcountList"
              :key="index"
            >
              <van-col span="18">
                <div class="title_5">
                  <span>
                    {{ index + 1 + `、` }}
                    {{ item.jiedao == null ? "未明确人员" : item.jiedao }}
                    {{ item.counts }}人</span
                  >
                </div>
              </van-col>
              <!-- <van-col  span="6">
      
          <div class="title_2 " style="float:right;">
              <span>   {{ item.counts}}人</span>
            </div>
        <van-icon style="font-size:16px;" name="user-o">{{item.counts}}人</van-icon >
       </van-col>     -->
              <van-col span="6">
                <div class="title_2 " style="float:right;padding-right: 10px;">
                  <span>
                    <router-link
                      :to="{
                        name: 'PersonList',
                        query: { jdId: item.JdId == null ? -1 : item.JdId }
                      }"
                    >
                      详细</router-link
                    >
                  </span>
                </div>
                <!-- <van-icon style="font-size:16px;" name="user-o">{{item.counts}}人</van-icon > -->
              </van-col>
            </van-row>
            <!-- <van-row v-for="(item,index) in jdcountList" :key="index">
  <van-col span="24">
      {{ item.jiedao}}
    </van-col>
</van-row> -->
            <!-- jiedao end -->

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
            <!-- <van-row class="lim_row">
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
    </van-row> -->
            <!-- A -->
            <!-- <van-row class="lim_row">
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

</van-row> -->
            <!-- B -->
            <!-- <van-row class="lim_row">
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
              与湖北有密切接触人员（即2月1日以后有接触，接触未解除仍需监测的湖北人员
         </div>
          </van-col>
           </van-row> 
    </van-row> -->
            <!-- C -->
            <!-- <van-row class="lim_row">
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
              除湖北以外省市，2月1日来邵外来人员 
         </div>
          </van-col>
           </van-row> 
</van-row> -->
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
  components: {},
  //     computed:{
  //   ...mapState({
  //     VXReportId:state=>state.user.ReportId,
  //   })
  // },
  props: {
    msg: String
  },
  mounted() {
    this.getCountData();
  },
  data() {
    return {
      activeName: "0",
      yesToday: "",
      todayTimes: "",
      Be15Dayafter: "",
      jdcountList: [],
      kakoInfoAndAll: {
        counts: 0,
        kakolist: []
      },
      Countsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      toDayCountsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      yesTeDayCountsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      Day15beforCountsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      // 本地人员数据
      localtoDayCountsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      localyesTeDayCountsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      localDay15beforCountsdata: {
        AllCount: 0,
        FsPersonCount: 0,
        localPersonCount: 0,
        AclassCount: 0,
        BclassCount: 0,
        DclassCount: 0,
        CclassCount: 0,
        ZDGZ_Count: 0,
        QXGZ_Count: 0
      },
      FS_Local_arr: [],
      Local_arr: []
      //  initFS_Local_Table:{
      //    Acount:0,
      //    Bcount:0,
      //    Ccount:0,
      //    Dcount:0,
      //    AllCount:0,
      //    jiedaoName:''
      //  }
    };
  },
  methods: {
    mergetMultiData2(list, key) {
      var result = [], // 用来收集结果
        json = {}; // 用来合并重复项
      function cleanData(data) {
        // 清理整合数据项，转换为 {jiedao:'', 'A_class或者B_class': n}
        var ret = {};
        for (var k in data) {
          if (data[k] === true) {
            console.log(data[k]);
            ret.jiedao = data.jiedao;
            ret[k] = data.counts;
          } else if (data[k] === false) {
            ret[k] = 0;
            console.log(data[k]);
          }
        }
        return ret;
      }
      list.forEach(item => {
        // 遍历原始数据
        item = cleanData(item);
        var jd = item[key]; // 取得合并的依据字段名
        if (jd in json) {
          // 如果收集过数据，尝试在第一次收集的项上做合并
          var obj = json[jd]; // 拿出上次收集的项
          for (var k in item) {
            // 遍历本次项的字段
            if (typeof item[k] == "number") {
              var val = item[k];
              // 如果字段存在就累加，否则直接赋值
              obj[k] = val + (k in obj ? obj[k] : 0);
            }
          }
        } else {
          // 第一次收集数据项
          json[jd] = JSON.parse(JSON.stringify(item)); // 做一个复制数据，避免污染数据源
          result.push(json[jd]); // 把收集项放到结集中
        }
      });
      console.log(result);
      return result; // 返回合并后的结果数组
    },
    // 提取卡点信息合并到街道数组
    mergeKDInfo(jdList /*街道数组*/, kdList /*卡点数组*/) {
      // 复制街道数组
      var _jdList = JSON.parse(JSON.stringify(jdList));
      // 卡点数组整理, 把同街道社区的卡点统计为一个数组 [{卡点名：卡点 id},...]
      var _kdInfo = {};

      kdList.forEach(item => {
        var gid = item.DepID + "_" + item.SQID; //合成一个查询 id
        if (!(gid in _kdInfo)) {
          _kdInfo[gid] = [];
        }
        var data = {};
        data.kakId = item.kakID; // 收集相同街道与社区的卡点
        data.kakName = item.kk_name;
        _kdInfo[gid].push(data);
      });
      // 遍历街道
      _jdList.forEach(item => {
        let ss = 0;
        var jdId = item.code;
        if (Array.isArray(item.children)) {
          // 遍历社区
          item.children.forEach(sqItem => {
            var sqId = sqItem.code;
            var gid = jdId + "_" + sqId; // 合成组id
            // 使用组 id 到卡点统计表中查询
            if (gid in _kdInfo) {
              var kdItem = _kdInfo[gid];
              sqItem.kd_list = kdItem;
              item.hasKd = true;
            }
            // obj.x !== undefined;
            if (sqItem.kd_list !== undefined) {
              ss = ss + sqItem.kd_list.length;
              item.count = ss;
            }
          });
          if (item.hasKd) {
            item.children = item.children.filter(item => {
              return !!item.kd_list;
            });
          }
        }
      });
      return _jdList.filter(item => {
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

    // if(v.jiedao in jdobj)
    // {  var old=jiedao[v.jiedao]
    // for(var k in v )
    // {if是数值，相加}
    mergetMultiData(list, key) {
      var result = [], // 用来收集结果
        json = {}; // 用来合并重复项
      list.forEach(item => {
        // 遍历原始数据
        var jd = item[key]; // 取得合并的依据字段名
        if (jd in json) {
          // 如果收集过数据，尝试在第一次收集的项上做合并
          var obj = json[jd]; // 拿出上次收集的项
          for (var k in item) {
            // 遍历本次项的字段
            if (typeof item[k] == "number") {
              obj[k] += item[k]; // 如果字段类型是数值型的，累加到上次收集的项中
            }
          }
        } else {
          // 第一次收集数据项
          json[jd] = JSON.parse(JSON.stringify(item)); // 做一个复制数据，避免污染数据源
          result.push(json[jd]); // 把收集项放到结集中
        }
      });
      console.log(result);
      return result; // 返回合并后的结果数组
    },
    formatMMDD(data) {
      let _data = data.split("-");
      let mmdd = _data[0] + "月" + _data[1] + "日";
      return mmdd;
    },
    async getCountData() {
      //  todayTimes:'',
      //       Be15Dayafter:'',
      // this.todayTimes={
      //    let data= this.$moment().format("MM-DD");
      //    return data
      // }

      let data = this.$moment().format("MM-DD");
      let Be15data = this.$moment()
        .subtract("days", 15)
        .format("MM-DD"); //15天前
      let yestoday = this.$moment()
        .subtract("days", 1)
        .format("MM-DD"); //昨天

      this.yesToday = this.formatMMDD(yestoday);
      this.todayTimes = this.formatMMDD(data);
      this.Be15Dayafter = this.formatMMDD(Be15data);
      // this.$moment().format("MM-DD");
      let JdCount = await getAllDataGroupbyJDID();
      let result = await getDataCounts({ personType: 1 }); //返邵来邵人员
      let loalresult = await getDataCounts({ personType: 0 });
      let kakoAllCounts = await AllKakoandCounts();
      let kdList = kakoAllCounts.data.html.rows;
      this.jdcountList = JdCount.data.result.rows;
      this.FS_Local_arr = result.data.FSLS_PersonType.rows;
      this.Local_arr = result.data.localPersonType.rows;
      console.log(result.data.FSLS_PersonType.rows);
      //  this.FS_Local_arr=result.data.BE15DayFS_PersonOrLocal.rows;
      //  this.Local_arr=loalresult.data.BE15DayFS_PersonOrLocal.rows;
      //   this.FS_Local_arr=  this.mergetMultiData2(result.data.BE15DayFS_PersonOrLocal.rows,'jiedao')
      console.log(this.FS_Local_arr);
      console.log(kdList);
      console.log(this.jdcountList);
      console.log(result); //返邵来邵人员
      console.log(loalresult);

      let JD_List = xzsqoptions[0].children;
      let _kakolist = this.mergeKDInfo(JD_List, kdList);

      // this.kakoInfoAndAll.kakolist=_kakolist;
      // console.log(this.kakoInfoAndAll)

      this.kakoInfoAndAll = {
        counts: kakoAllCounts.data.html.count,
        kakolist: _kakolist
      };
      //  console.log(this.kakoInfoAndAll)
      //  console.log(kakoAllCounts);
      let _allcount = 0;
      let _FsPersonCount = 0;
      let _localPersonCount = 0;
      let _ZDGZCount = 0;
      let _QXGZCount = 0;
      let _AclassCount = 0;
      let _BclassCount = 0;
      let _CclassCount = 0;
      let _DclassCount = 0;
      //本地人员
      //15天前到当天的数据
      loalresult.data.be15daylate.rows.forEach(v => {
        this.localDay15beforCountsdata.AllCount =
          this.localDay15beforCountsdata.AllCount + v.counts;
        if (v.personType == 1) {
          this.localDay15beforCountsdata.FsPersonCount =
            this.localDay15beforCountsdata.FsPersonCount + v.counts;
        } else {
          this.localDay15beforCountsdata.localPersonCount =
            this.localDay15beforCountsdata.localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            this.localDay15beforCountsdata.QXGZ_Count =
              this.localDay15beforCountsdata.QXGZ_Count + v.counts;
            break;
          case 99:
            this.localDay15beforCountsdata.ZDGZ_Count =
              this.localDay15beforCountsdata.ZDGZ_Count + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          this.localDay15beforCountsdata.AclassCount =
            this.localDay15beforCountsdata.AclassCount + v.counts;
        }
        if (v.B_class == true) {
          this.localDay15beforCountsdata.BclassCount =
            this.localDay15beforCountsdata.BclassCount + v.counts;
        }
        if (v.C_class == true) {
          this.localDay15beforCountsdata.CclassCount =
            this.localDay15beforCountsdata.CclassCount + v.counts;
        }
        if (v.D_class == true) {
          this.localDay15beforCountsdata.DclassCount =
            this.localDay15beforCountsdata.DclassCount + v.counts;
        }
      });
      console.log(this.localDay15beforCountsdata);
      //昨天数据
      loalresult.data.yesterday.rows.forEach(v => {
        this.localyesTeDayCountsdata.AllCount =
          this.localyesTeDayCountsdata.AllCount + v.counts;
        if (v.personType == 1) {
          this.localyesTeDayCountsdata.FsPersonCount =
            this.localyesTeDayCountsdata.FsPersonCount + v.counts;
        } else {
          this.localyesTeDayCountsdata.localPersonCount =
            this.localyesTeDayCountsdata.localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            this.localyesTeDayCountsdata.QXGZ_Count =
              this.localyesTeDayCountsdata.QXGZ_Count + v.counts;
            break;
          case 99:
            this.localyesTeDayCountsdata.ZDGZ_Count =
              this.localyesTeDayCountsdata.ZDGZ_Count + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          this.localyesTeDayCountsdata.AclassCount =
            this.localyesTeDayCountsdata.AclassCount + v.counts;
        }
        if (v.B_class == true) {
          this.localyesTeDayCountsdata.BclassCount =
            this.localyesTeDayCountsdata.BclassCount + v.counts;
        }
        if (v.C_class == true) {
          this.localyesTeDayCountsdata.CclassCount =
            this.localyesTeDayCountsdata.CclassCount + v.counts;
        }
        if (v.D_class == true) {
          this.localyesTeDayCountsdata.DclassCount =
            this.localyesTeDayCountsdata.DclassCount + v.counts;
        }
      });
      console.log(this.localyesTeDayCountsdata);
      //当天数据
      loalresult.data.toDay.rows.forEach(v => {
        this.localtoDayCountsdata.AllCount =
          this.localtoDayCountsdata.AllCount + v.counts;
        if (v.personType == 1) {
          this.localtoDayCountsdata.FsPersonCount =
            this.localtoDayCountsdata.FsPersonCount + v.counts;
        } else {
          this.localtoDayCountsdata.localPersonCount =
            this.localtoDayCountsdata.localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            this.localtoDayCountsdata.QXGZ_Count =
              this.localtoDayCountsdata.QXGZ_Count + v.counts;
            break;
          case 99:
            this.localtoDayCountsdata.ZDGZ_Count =
              this.localtoDayCountsdata.ZDGZ_Count + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          this.localtoDayCountsdata.AclassCount =
            this.localtoDayCountsdata.AclassCount + v.counts;
        }
        if (v.B_class == true) {
          this.localtoDayCountsdata.BclassCount =
            this.localtoDayCountsdata.BclassCount + v.counts;
        }
        if (v.C_class == true) {
          this.localtoDayCountsdata.CclassCount =
            this.localtoDayCountsdata.CclassCount + v.counts;
        }
        if (v.D_class == true) {
          this.localtoDayCountsdata.DclassCount =
            this.localtoDayCountsdata.DclassCount + v.counts;
        }
      });

      // 本地数据 end
      //15天前到当天的数据
      result.data.be15daylate.rows.forEach(v => {
        this.Day15beforCountsdata.AllCount =
          this.Day15beforCountsdata.AllCount + v.counts;
        if (v.personType == 1) {
          this.Day15beforCountsdata.FsPersonCount =
            this.Day15beforCountsdata.FsPersonCount + v.counts;
        } else {
          this.Day15beforCountsdata.localPersonCount =
            this.Day15beforCountsdata.localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            this.Day15beforCountsdata.QXGZ_Count =
              this.Day15beforCountsdata.QXGZ_Count + v.counts;
            break;
          case 99:
            this.Day15beforCountsdata.ZDGZ_Count =
              this.Day15beforCountsdata.ZDGZ_Count + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          this.Day15beforCountsdata.AclassCount =
            this.Day15beforCountsdata.AclassCount + v.counts;
        }
        if (v.B_class == true) {
          this.Day15beforCountsdata.BclassCount =
            this.Day15beforCountsdata.BclassCount + v.counts;
        }
        if (v.C_class == true) {
          this.Day15beforCountsdata.CclassCount =
            this.Day15beforCountsdata.CclassCount + v.counts;
        }
        if (v.D_class == true) {
          this.Day15beforCountsdata.DclassCount =
            this.Day15beforCountsdata.DclassCount + v.counts;
        }
      });
      console.log(this.Day15beforCountsdata);
      //昨天数据
      result.data.yesterday.rows.forEach(v => {
        this.yesTeDayCountsdata.AllCount =
          this.yesTeDayCountsdata.AllCount + v.counts;
        if (v.personType == 1) {
          this.yesTeDayCountsdata.FsPersonCount =
            this.yesTeDayCountsdata.FsPersonCount + v.counts;
        } else {
          this.yesTeDayCountsdata.localPersonCount =
            this.yesTeDayCountsdata.localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            this.yesTeDayCountsdata.QXGZ_Count =
              this.yesTeDayCountsdata.QXGZ_Count + v.counts;
            break;
          case 99:
            this.yesTeDayCountsdata.ZDGZ_Count =
              this.yesTeDayCountsdata.ZDGZ_Count + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          this.yesTeDayCountsdata.AclassCount =
            this.yesTeDayCountsdata.AclassCount + v.counts;
        }
        if (v.B_class == true) {
          this.yesTeDayCountsdata.BclassCount =
            this.yesTeDayCountsdata.BclassCount + v.counts;
        }
        if (v.C_class == true) {
          this.yesTeDayCountsdata.CclassCount =
            this.yesTeDayCountsdata.CclassCount + v.counts;
        }
        if (v.D_class == true) {
          this.yesTeDayCountsdata.DclassCount =
            this.yesTeDayCountsdata.DclassCount + v.counts;
        }
      });
      console.log(this.yesTeDayCountsdata);
      //当天数据
      result.data.toDay.rows.forEach(v => {
        this.toDayCountsdata.AllCount =
          this.toDayCountsdata.AllCount + v.counts;
        if (v.personType == 1) {
          this.toDayCountsdata.FsPersonCount =
            this.toDayCountsdata.FsPersonCount + v.counts;
        } else {
          this.toDayCountsdata.localPersonCount =
            this.toDayCountsdata.localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            this.toDayCountsdata.QXGZ_Count =
              this.toDayCountsdata.QXGZ_Count + v.counts;
            break;
          case 99:
            this.toDayCountsdata.ZDGZ_Count =
              this.toDayCountsdata.ZDGZ_Count + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          this.toDayCountsdata.AclassCount =
            this.toDayCountsdata.AclassCount + v.counts;
        }
        if (v.B_class == true) {
          this.toDayCountsdata.BclassCount =
            this.toDayCountsdata.BclassCount + v.counts;
        }
        if (v.C_class == true) {
          this.toDayCountsdata.CclassCount =
            this.toDayCountsdata.CclassCount + v.counts;
        }
        if (v.D_class == true) {
          this.toDayCountsdata.DclassCount =
            this.toDayCountsdata.DclassCount + v.counts;
        }
      });
      console.log(this.toDayCountsdata);
      //总数据
      result.data.result.rows.forEach(v => {
        _allcount = _allcount + v.counts;
        if (v.personType == 1) {
          _FsPersonCount = _FsPersonCount + v.counts;
        } else {
          _localPersonCount = _localPersonCount + v.counts;
        }
        switch (v.status) {
          case 66:
            _QXGZCount = _QXGZCount + v.counts;
            break;
          case 99:
            _ZDGZCount = _ZDGZCount + v.counts;
            break;
          default:
            break;
        }

        if (v.A_class == true) {
          _AclassCount = _AclassCount + v.counts;
        }
        if (v.B_class == true) {
          _BclassCount = _BclassCount + v.counts;
        }
        if (v.C_class == true) {
          _CclassCount = _CclassCount + v.counts;
        }
        if (v.D_class == true) {
          _DclassCount = _DclassCount + v.counts;
        }
      });

      this.Countsdata = {
        AllCount: _allcount,
        FsPersonCount: _FsPersonCount,
        localPersonCount: _localPersonCount,
        AclassCount: _AclassCount,
        BclassCount: _BclassCount,
        CclassCount: _CclassCount,
        DclassCount: _DclassCount,
        ZDGZ_Count: _ZDGZCount,
        QXGZ_Count: _QXGZCount
      };
    },
    onClickLeft() {
      let vm = this;
      vm.$router.push({ path: "/" });
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title_4 {
  text-align: left;
  font-size: 18px;
  padding-left: 20px;
  color: #2b2b2b;
}
.mytr {
  color: #fff;
}
.mytd {
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.title_5 {
  text-align: left;
  font-size: 18px;
  padding-left: 20px;
  color: #2b2b2b;
  /* margin-right: 40px; */
  /* padding: 20px; */
  /* margin-right: -19px; */
  margin-left: 0px;
  padding: 5px;

  /* background-color: white; */
  border-radius: 5px;
}
.text_4 {
  text-align: left;
  font-size: 18px;
  padding-left: 20px;
  color: #2b2b2b;
  /* margin-right: 40px; */
  /* padding: 20px; */
  /* margin-right: -19px; */
  margin-left: 0px;
  padding: 5px;
  background-color: #fafafa;
  /* background-color: white; */
  border-radius: 5px;
}

.text_3 {
  text-align: left;
  padding-left: 20px;
  color: #2b2b2b;
  line-height: 25px;
  font-size: 14px;
}

.text_2 {
  text-align: left;
  padding-left: 20px;
  color: #303133;
}

.lim_row2 {
  background-color: #409eff;
  padding: 8px;
  border: 1px solid #dfdfdf;
  margin: 10px;
  border-radius: 5px;
}
.lim_row {
  background-color: #f7f9ff;
  padding: 8px;
  border: 1px solid #dfdfdf;
  margin: 10px;
  border-radius: 5px;
}
.title_2 {
  line-height: 33px;
  text-align: left;
  font-size: 16px;
  /* padding-left: 10px; */
  color: #494949;
  text-align: center;
}
.title_3 {
  line-height: 33px;
  text-align: left;
  font-size: 16px;
  padding-left: 20px;
  color: #fff;
}
.title_1 {
  text-align: left;
  padding-left: 20px;
  color: #303133;
}
.text_1 {
  text-align: left;
  padding: 0px 15px 0px 20px;
  font-size: 16px;
}
.van-icon {
  font-size: 24px !important;
}
.van-grid-item__icon {
  font-size: 38px !important;
}
.van-cell__value {
  font-size: 18px !important;
  background-color: aliceblue !important;
}

.login_input {
  font-size: 14px !important;
}
.van-cell {
  color: #2b2b2b;
  font-size: 17px;
  line-height: 28px;
  background-color: #ffffff;
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
