<template>
  <div>
    <div class="header">
      <van-row>
        <van-col style="text-align: left;line-height: 10px;" span="24">
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
          -->
          <!-- {{fullWidth}}{{UA}}- -->

          <!-- http://info.dxzc.gov.cn/images/2020/7/header.jpg -->
          <!-- <span>    <img alt="Vue logo" width="100%" src="../../assets/C_header.jpg" /></span> -->
          <van-nav-bar
            :title="paginfo.title+'志愿者信息'"
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
      <van-row>
        <van-col style="text-align: left;line-height: 10px;" span="24">
          <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
          -->
          <!-- {{fullWidth}}{{UA}}- -->

          <!-- http://info.dxzc.gov.cn/images/2020/7/header.jpg -->
          <!-- <span>    <img alt="Vue logo" width="100%" src="../../assets/C_header.jpg" /></span> -->
          <span>
            <img alt="Vue logo" width="100%" src="http://info.dxzc.gov.cn/images/2020/7/header.jpg" />
          </span>
        </van-col>
      </van-row>

      <van-row>
        <van-col class="mycard textleft" span="12">志愿者组织：{{paginfo.teamServiceCount}}个</van-col>
        <van-col class="mycard textright" span="12">志愿者：{{paginfo.teamMembersCount}}名</van-col>
        <van-col class="mycard" span="24">
          <template v-for="(item,index) in paginfo.List">
            <div :key="index">
              <van-row>
                <van-col offset="1" span="19">
                  <div class="textleft">{{index+1}}、{{ item.teamName}}</div>
                </van-col>
                <van-col span="3">
                  <div class="textright">{{ item.teamMembers }}名</div>
                </van-col>
              </van-row>
            </div>
          </template>
        </van-col>
        <!-- <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </van-col>
        <van-col class="mycard" span="24">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </van-col>-->
      </van-row>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// // import { mapState } from "vuex";
// import { village } from "@/store/mutation-types"; //MD5Tel AdminInfo
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
  name: "list",
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

  },
  created () {


    //  this.auth();
  },
  mounted () {
    // let _village = Vue.ls.get(village);
    // console.log(_village);

    // console.log(this.$route);

    console.log(this.$route.params.departmentNo);
    console.log(this.$route.params.villageName);
    console.log(this.$route.params.serviceTeamList);
    this.paginfo.title = this.$route.params.villageName;
    this.paginfo.List = this.$route.params.serviceTeamList.teamList;
    this.paginfo.teamServiceCount = this.$route.params.serviceTeamList.allTeamCount
    this.paginfo.teamMembersCount = this.$route.params.serviceTeamList.allTeamMemberCount

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
      paginfo: {
        teamServiceCount: 0,
        teamMembersCount: 0,
        logoImage: '',
        introduction: '',
        List: {},
        title: '',
        publishTime: '',
        editer: ''

      },

      // personTitle:''
    };
  },
  methods:
  {
    onClickLeft () {
      let vm = this;
      vm.$router.push({ path: "/community" });
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textleft,
.textright {
  font-weight: 100;
  font-size: 18px;
  text-align: left;
  line-height: 32px;
}
.textright {
  text-align: right;
}
.mycard {
  margin-block-start: 0.5em;
  margin-block-end: 0em;
  padding: 0.3em 1em;
}
.mycard >>> .van-card {
  border-radius: 10px;
  border: 0.1em solid #ccc;
}
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
/* .textleft {
  margin-top: 20px;
  color: #606266;
}
.textleft2 {
  color: #606266;
} */
</style>
