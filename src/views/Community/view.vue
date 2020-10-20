<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
  <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->

  <div>
    <div class="header">
      <van-row>
        <van-col style="text-align: left; line-height: 10px" span="24">
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
          -->
          <!-- {{fullWidth}}{{UA}}- -->

          <!-- http://info.dxzc.gov.cn/images/2020/7/header.jpg -->
          <!-- <span>    <img alt="Vue logo" width="100%" src="../../assets/C_header.jpg" /></span> -->
          <van-nav-bar
            :title="paginfo.title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          >
            <template #left>
              <van-icon name="arrow-left" size="26"></van-icon>
            </template>
          </van-nav-bar>
        </van-col>
      </van-row>
      <van-row v-if="!hasimg">
        <van-col style="text-align: left; line-height: 10px" span="24">
          <span>
            <img
              alt="Vue logo"
              width="100%"
              src="http://info.dxzc.gov.cn/images/2020/7/header.jpg "
            />
          </span>
        </van-col>
      </van-row>
      <template v-if="showmanager">
        <van-row v-for="(item, index) in paginfo.managerList" :key="index">
          <van-col
            style="text-align: left; line-height: 10px; padding: 10px 10px"
            span="8"
          >
            <div class="managerlist">
              <span>
                <img
                  :alt="item.name"
                  width="100%"
                  :src="`${hostName + '' + item.imgurl}`"
                />
              </span>
            </div>
          </van-col>
          <van-col
            style="text-align: left; line-height: 10px; padding: 10px 10px"
            span="16"
          >
            <div class="managerlist">
              <br />
              <span>
                <b>姓名：</b>
                {{ item.name }}
              </span>
              <br />
              <span>
                <b>职务：</b>
                {{ item.duty }}
              </span>
              <br />
              <span>
                <b>电话：</b>
                <a :href="`${'tel:' + item.contactsPhone}`">{{
                  item.contactsPhone
                }}</a>
              </span>
              <br />
              <span>
                <b>简介：</b>
                {{ item.introduction }}
              </span>
              <br />
            </div>
          </van-col>
          <van-row>
            <van-col style="text-align: left; padding: 0px 10px" span="24">
              <van-divider />
            </van-col>
          </van-row>
        </van-row>
      </template>

      <van-row>
        <van-col
          style="text-align: left; line-height: 10px; padding: 10px"
          span="24"
        >
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
          -->
          <!-- {{fullWidth}}{{UA}}- -->

          <!-- http://info.dxzc.gov.cn/images/2020/7/header.jpg -->
          <!-- <span>    <img alt="Vue logo" width="100%" src="../../assets/C_header.jpg" /></span> -->
          <span v-if="hasimg">
            <img alt="Vue logo" width="100%" :src="paginfo.logoImage" />
          </span>
        </van-col>
      </van-row>
      <van-row>
        <van-col
          v-if="showContent"
          style="text-align: left; line-height: 10px; padding: 10px"
          span="24"
        >
          <div class="contents">
            <div v-if="isnotice">通知：</div>
            <div v-html="paginfo.introduction"></div>
            <div v-if="isnotice">
              <span>发布时间：{{ paginfo.publishTime }}</span>
              <span>发布人：{{ paginfo.editer }}</span>
            </div>

            <!-- this.paginfo.publishTime
            this.paginfo.editer-->
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
  // GridMember,
  // ServiceTeam,
  // publicNotice,
  // VillageManagers,
  // Villageinfo

  // seletDepCount,
  // adddxrm,
  // // finduserByTel,
  // getdeplist,
  // // checkAdmin,//检测管理员
  // getUserInfo,
  // GetArticleList
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "community",
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
  created () {

    this.initParams();

    //  this.auth();
  },
  mounted () {
  },
  data () {

    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
    //  this.UA=function(){
    //      let flag = navigator.userAgent.match(
    //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    //     );
    //     return flag
    //   };
    return {
      showContent: false,
      showmanager: false,
      isnotice: false,
      hasimg: false,
      paginfo: {
        logoImage: '',
        introduction: '',
        managerList: [],
        title: '',
        publishTime: '',
        editer: ''

      },
      villagecountPersion: 0,
      hostName: 'https://api.daxiang.gov.cn/village/',
      wanggeNum: [430503001003001, 430503001003002, 430503001003003, 430503001003004],

      // personTitle:''
    };
  },
  methods:
  {
    onClickLeft () {
      let vm = this;
      vm.$router.push({ path: "/community" });
    },
    initParams () {
      console.log(this.$route.params)
      if (this.$route.params.villageinfo || this.$route.params.villageManager) {
        console.log(`社区介绍`)
        this.hasimg = true
        this.showContent = true
        this.paginfo.title = `${this.$route.params.villageName}干部亮相台`
        this.paginfo.logoImage = this.hostName + '' + this.$route.params.villageinfo.imgurl
        this.paginfo.introduction = this.$route.params.villageinfo.introduction
        this.paginfo.managerList = this.$route.params.villageManager
      }
      else if (this.$route.params.publicNotice) {
        console.log(`通知告示`)
        this.isnotice = true
        this.showContent = true
        this.paginfo.title = this.$route.params.publicNotice.publicNoticeTitle
        this.paginfo.introduction = this.$route.params.publicNotice.publicNoticeMatter
        this.paginfo.noticeEditor = this.$route.params.publicNotice.noticeEditor  //noticeEditor editorDate noticeFiles
        this.paginfo.publishTime = this.$moment(this.$route.params.publicNotice.editorDate).format("YYYY-MM-DD");
        this.paginfo.editer = this.$route.params.publicNotice.noticeEditor
      }
      else if (this.$route.params.VillageManagers) {
        console.log(`亮相台`)
        this.showmanager = true
        console.log(this.$route.params.VillageManagers)
        this.paginfo.title = `${this.$route.params.villageName}干部亮相台`
        this.paginfo.managerList = this.$route.params.VillageManagers
      }


      // console.log( this.$route.params.villageinfo)
      // console.log( this.$route.params.villageManager)
      //  this.paginfo.logoImage = this.hostName+''+this.$route.params.villageinfo.imgurl||''
      //  this.paginfo.introduction = this.$route.params.villageinfo.introduction
      //  this.paginfo.managerList = this.$route.params.villageManager
      //  console.log(this.$route.params.publicNotice)
      //  this.paginfo.introduction=this.$route.params.publicNotice?publicNoticeMatter:''||this.$route.params.villageinfo.introduction
      //  console.log(this.paginfo)


    },


    GetUA () {
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
.managerlist {
  line-height: 24px;
}
.contents {
  font-size: 16px;

  line-height: 28px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: aliceblue;
}
.van-swipe-item {
  padding-right: 10px;
}
.arrowText {
  color: #c0c4cc;
  float: right;
  padding-right: 20px;
  line-height: 28px;
}
.imgText {
  background-color: #f8f8f8;
  width: 91%;
  word-break: keep-all;
  white-space: normal;
  text-indent: em;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 34px;
}
.imgslist img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.userinfo {
  border: 1px solid #dcdfe6;
  padding: 15px;
  /* box-shadow: 10px 10px 20px 10px rgba(255,255,0,0.5), -10px 10px 10px 10px rgba(255,255,255,0.5)  */
}
.van-icon >>> .van-tag--default {
  background-color: aliceblue !important;
}
.User >>> .van-icon {
  font-size: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  color: #f56c6c;
  padding: 5px;
}

.tongzhiList span {
  font-size: 20px;
}
.tongzhiList {
  background-color: #f2f6fc;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
}
.icon_left {
  float: right;
}
.icon_right {
  float: right;
}
.icon_left >>> .van-icon {
  font-size: 22px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #409eff;
  padding: 5px;
}
.icon_right >>> .van-icon {
  font-size: 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #e6a23c;
  padding: 5px;
}
.content_2 {
  padding: 15px;
}
.content_3 {
  padding: 0px 15px;
}
.content_1 {
  border: 1px #ebeef5 solid;
  border-radius: 4px;
}
.textleft {
  margin-top: 20px;
  color: #606266;
}
.textleft2 {
  color: #606266;
}
</style>
