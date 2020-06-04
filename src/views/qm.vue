<template>
  <div class="qmsm">
    <van-row>
      <van-col style="padding:5px;border-radius:5px;" span="24">
        <!-- <van-image
  width="100%"
  height="60"
  
 src="../assets/qmsq.jpg"
/> -->
        <header class="header-appClient">
          <span class="left-1 app-logo-border">
            <img
              src="https://img.rednet.cn/2020/01-10/1578625555584-mchx2l3lckggo.png"
            />
          </span>
          <span class="left-2 footer-left-2">大祥融媒</span>
          <a
            class="right-1"
            href="https://daxiang-wap.rednet.cn/app/index.html?contentId=6966421&contentType=1"
          ></a>
        </header>
      </van-col>
    </van-row>
    <!-- <van-row>
  <van-col style="padding:5px;border-radius:5px;" span="24">

<header class="header-text">
              
                <span class="left-3">目前已经有{{count}}位访客浏览</span>
             
        </header>
</van-col>
</van-row> -->
    <van-row>
      <van-col style="padding:5px;border-radius:5px;" span="24">
        <!-- <van-image
  width="100%"
  height="60"
  
 src="../assets/qmsq.jpg"
/> -->

        <img alt="Vue logo" width="100%" src="../assets/777.jpg" />
      </van-col>
    </van-row>
    <van-row>
      <van-col style="padding:5px;border-radius:5px;" span="24">
        <!-- <van-image
  width="100%"
  height="60"
  
 src="../assets/qmsq.jpg"
/> -->

        <a
          href="https://h5.rednet.cn/c/b4xy/neph/index.html?t=0&amp;custom=&amp;crid=&amp;s=1"
          target="_self"
          ><img
            width="100%"
            src="https://img.rednet.cn/2020/03-31/82ba4f1b-1b5e-47e1-b89b-4f0c2334040b.jpg"
            title="1.jpg"
            data-resourceid="694537454940250112"
            alt="1.jpg"
            _styleapp="width: 0px; height: 0px; "
        /></a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// import { mapState} from 'vuex'
// import navigations from '@/components/nav/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})

// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
import { QMCount } from "@/api/index";

export default {
  name: "QMSM",
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
    this.addCount();
  },
  data() {
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')

    return {
      count: 0,
      active: 1
      // personTitle:''
    };
  },
  methods: {
    async addCount() {
      console.log(1);
      let Randomnum = Math.random()
        .toString()
        .slice(-4);
      let rd = localStorage.getItem("rd");
      let res = "";
      if (!rd) {
        res = await QMCount({ rd: Randomnum });
        localStorage.setItem("rd", Randomnum);
      } else {
        res = await QMCount({ rd: rd });
      }

      console.log(res);
      this.count = res.data.count;
      //  if(rd)
      //  {
      //       let res=await QMCount({rd:rd})
      //  }
      //  else
      //  {
      //   let Randomnum=Math.random().toString().slice(-4);
      //   localStorage.setItem('rd',Randomnum)
      //  }

      console.log(rd);
    },
    onChange(event) {
      console.log(event.detail.name);
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-1 {
  float: left;
  margin: 0.18rem 0 0 0.45rem;
}

.left-1 img {
  width: 2.45rem;
  height: 2.45rem;
}

.app-logo-border img {
  border: 1px solid #e6e6e6;
  border-radius: 0.06rem;
}

.left-2 {
  float: left;
  height: 1.14rem;
  line-height: 2.94rem;
  margin-left: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}

.left-3 {
  float: right;
  height: 0.14rem;
  line-height: 0.94rem;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 200;
  color: #2b2b2b;
}
.header-left-2 {
  color: #000;
}
.header-text {
  position: relative;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  /* background: url(../images/img_logo.png) 0.36rem 0.14rem #FEFEFE no-repeat;
	background-size: 4rem 0.76rem; */
  /* box-shadow:0px 4px 7px rgba(0,0,0,.05); */

  /* position: fixed;
	display: none !important; */
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.16rem;
  /* box-shadow: 0 -1px 2px 0 #ebebeb; */
  /* border-top: 1px solid #ebebeb; 
	background-color: rgba(255,255,255,.95); */
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  width: 100%;
  margin: 0 auto;
}
.header-appClient {
  position: relative;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  /* background: url(../images/img_logo.png) 0.36rem 0.14rem #FEFEFE no-repeat;
	background-size: 4rem 0.76rem; */
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);

  /* position: fixed;
	display: none !important; */
  left: 0;
  right: 0;
  bottom: 0;
  height: 3.16rem;
  /* box-shadow: 0 -1px 2px 0 #ebebeb; */
  /* border-top: 1px solid #ebebeb; 
	background-color: rgba(255,255,255,.95); */
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  width: 100%;
  margin: 0 auto;
}
.right-1 {
  top: 0.27rem;
  right: 0.35rem;
  float: right;
  width: 5.86rem;
  height: 2.52rem;
  line-height: 0.82rem;
  background: url(//j.rednet.cn/site/static/images/btn_download.png) no-repeat;
  background-size: 100% 100%;
}
</style>
