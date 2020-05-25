<template>
  <div class="qmsm">

    
<van-row>
  <van-col style="padding:5px;border-radius:5px;" span="24">
   <van-image
  width="100%"
  height="60"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
</van-col>
</van-row>
    <van-row>
  <van-col style="padding:0px 5px 5px 5px;" span="24">
    <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
      <!-- <div style="border: 1px solid #129416;border-radius: 5px;">
        <p><b>温馨提醒：</b>您好，大祥区雨溪公墓清明节期间限流，需提前预约，否则可能耽误您的行程。</p>
      </div> -->
  </van-col> 
</van-row>
  <van-row>
  <van-col span="24">
<van-tabs class="istabs" type="card" animated color="#129416">
  <van-tab class="selected">
    <template #title>
      <van-icon class="lineicon" name="phone-o">  网上预约</van-icon>

    </template>
       <van-row>
  <van-col span="24">
   <span>预约方法：</span>
  </van-col>
     </van-row>
         <van-row>
  <van-col span="24">
    <span class="myfont">第一步：常按识别二维码</span>
    
  </van-col>
     </van-row>
     <van-row>
  <van-col span="24">
 
    <img alt="Vue logo" width="45%" src="../assets/ewm.jpg">
  </van-col>
     </van-row>
          <van-row>
  <van-col span="24">
    <span class="myfont">第二步：点击：市民入口->祭扫预约</span>
    
  </van-col>
     </van-row>
         <van-row>
  <van-col span="24">
   
    <img alt="Vue logo" width="60%" src="../assets/445.png">
  </van-col>
     </van-row>
    </van-tab>
  <van-tab class="selected">
    <template #title>    
       <van-icon class="lineicon" name="comment-o"> 电话预约</van-icon>
    </template>
  <van-row>
  <van-col span="24">
    <div class="myrow">
        <a  href="tel:0739-5300667">大祥区雨溪公墓电话：0739-5300667</a>
    </div>
  
  </van-col>
     </van-row>
  
    
    </van-tab>

</van-tabs>
  </van-col> 
</van-row>

   <van-row>
      <van-col span="24">
        <div class="footer">
         大祥区委新冠肺炎疫情防控工作领导小组
        </div>
      </van-col>
    </van-row>


<!-- <van-tabs active="{{ active }}" bind:change="onChange">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs> -->
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
export default {
  name: "QMSM",
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
  },
  data() 
  {    
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
    
    return {
active:1
      // personTitle:''
    };
  },
  methods: {
onChange(event)
{
  
  console.log(event.detail.name)
     
  
},
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.myrow
{
  height:230px;
  padding:20px;
}
a:link {color:#000;  }    /* 未被访问的链接 */
a:visited {background:#FFFF85;  text-decoration:underline;
           color:cadetblue;} /* 已被访问的链接 */
a:hover {background:#129416;text-transform:uppercase;  text-decoration:underline;color:#fff;}   /* 鼠标指针移动到链接上 */
a:active {background:#129416;  text-decoration:underline;color:#fff;}  /* 正在被点击的链接 */

.myfont{
  font-size: 14px;
  color: #2b2b2b;
}

.selected
{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;

}
.van-icon
{
  font-size: 16px !important;
}
/* .lineicon
{
  line-height: 18px;
} */
/* 
.van-grid-item__icon{
  font-size: 38px !important;
}
.van-cell__value{
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
} */
</style>
