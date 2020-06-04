<template>
  <div class="qmsm">
    <!-- <van-row>
  <van-col style="padding:5px;border-radius:5px;" span="24">
   <van-image
  width="100%"
  height="60"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
</van-col>
</van-row> -->
    <van-row>
      <van-col style="text-align:left;padding:14px 5px 5px 5px;" span="20">
        <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
        <span style="font-size: 16px;padding: 10px;"
          >你好，今天是{{ toDay }}</span
        >
      </van-col>
      <van-col style="padding:10px 5px 5px 5px;" span="4">
        <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
        <span @click="showcalendar" style="font-size: 22px;padding: 10px;"
          ><van-icon name="setting-o" />
        </span>
      </van-col>
    </van-row>
    <van-row>
      <van-col style="text-align:left;padding:14px 5px 5px 5px;" span="24">
        <van-calendar
          :min-date="minDate"
          :max-date="maxDate"
          v-model="show"
          type="range"
          @confirm="onConfirm"
        />
      </van-col>
    </van-row>

    <van-row>
      <van-col style="text-align:left;padding:0px 5px 5px 5px;" span="24">
        <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
        <van-notice-bar
          color="#1989fa"
          background="#ecf9ff"
          wrapable
          :scrollable="false"
        >
          <div id="resResult">
            {{ resResult }}
          </div>
        </van-notice-bar>
      </van-col>
    </van-row>
    <van-row>
      <van-col style="padding:0px 5px 5px 5px;" span="24">
        <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
        <van-button @click="copytoClipboard" type="info"
          >点击复制上述内容</van-button
        >
      </van-col>
    </van-row>

    <van-row>
      <van-col style="text-align:left;padding:0px 5px 5px 5px;" span="24">
        <!-- <van-notice-bar text="温馨提醒:大祥区雨溪公墓实行按日分时段限流预约祭扫，可通过“云上清明”微信公众号或拨打电话0739-5300667预约或咨询。3月28日至４月12日，每个墓穴每天入园祭扫人员不超过３人，祭扫时间不超过１小时，未预约不得入园祭扫。" left-icon="volume-o" />
     -->
        <van-collapse v-model="activeName" accordion>
          <template v-for="(item, index) in datalist">
            <div :key="index">
              <van-collapse-item
                style="font-size:20px"
                :title="`${item.keyname}稿件${item.count}条`"
                :name="index + 1"
              >
                <template v-for="(c, index) in item.rows">
                  <van-row :key="index">
                    <van-col style="padding:0px 5px 5px 5px;" span="24">
                      <div @click="goto(c.c_link)" class="rowlist" :key="index">
                        {{ index + 1 }}.{{ c.title }}
                      </div>
                    </van-col>
                  </van-row>
                </template>
                <!-- {{item}} -->
              </van-collapse-item>
            </div>
          </template>
          <!-- <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3">内容</van-collapse-item> -->
        </van-collapse>
      </van-col>
    </van-row>

    <!-- <van-row>
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
</van-row> -->

    <van-row>
      <van-col span="24">
        <div class="footer">
          大祥区融媒体中心
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
import {
  getAllsharelink

  // CheckTel
} from "@/api/index";
// import { mapState} from 'vuex'
// import navigations from '@/components/nav/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})

// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
// import moment from 'moment'
//  var moment = require('moment');
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
    let date = this.init();
    this.initdata(date);
  },
  data() {
    return {
      datalist: [],
      activeName: 1,
      minDate: new Date(
        this.$moment()
          .startOf("year")
          .format("YYYY"),
        0,
        1
      ),
      maxDate: new Date(
        this.$moment()
          .startOf("year")
          .format("YYYY"),
        11,
        this.$moment()
          .endOf("year")
          .format("DD")
      ),
      toDay: "",
      active: 1,
      resResult: "",
      show: false
      // personTitle:''
    };
  },
  watch: {
    resResult() {
      return this.resResult;
    }
  },
  methods: {
    goto(url) {
      window.location.href = url;
    },
    init() {
      let date = {};
      let afterDayTime = this.$moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD 23:59:00"); /*前一天的时间*/
      let after2DayTime = this.$moment()
        .subtract(2, "days")
        .format("YYYY-MM-DD 23:59:00"); /*前一天的时间*/
      date.from = after2DayTime; //大前天
      date.now = afterDayTime; //昨天
      return date;
    },
    formatdatatime(val) {
      return this.$moment(val).format("YYYY-MM-DD 23:59:00");
    },
    showcalendar() {
      this.show = true;
    },
    async onConfirm(e) {
      console.log(e);
      this.show = false;
      const [start, end] = e;
      let date = {};
      date.from = this.formatdatatime(start);
      date.now = this.formatdatatime(end);
      date.selectd = true;
      console.log(date);
      this.initdata(date);
      //  let result=await getAllsharelink(date)
      //  console.log(result)
      //  let _data=result.data.objresult
      //  this.resResult=`【大祥区融媒体中心】${afterDay}，发稿（${_data.AllCountPublish}）篇，大祥之窗上稿${_data.countPublish}篇，其中原创${_data['原创'].count}篇，大祥发布${_data.DXFB_Count}篇，转载${_data['转载'].count}篇，向市以上各大媒体发稿${_data.MtJJ_Count}篇。`
      // console.log(result)
    },
    copytoClipboard() {
      let that = this;
      that.$copyText(this.resResult).then(
        function(e) {
          that.$toast.success("复制到剪切板成功！");
          console.log(e);
        },
        function(e) {
          alert("无法复制");
          console.log(e);
        }
      );
    },
    async initdata(date) {
      // let currentYear=this.$moment().startOf('year').format('YYYY')
      let currentMM = this.$moment()
        .endOf("year")
        .format("DD");
      console.log(currentMM);

      // let now=this.$moment().format('YYYY-MM-DD HH:mm:ss' )
      let afterDayTime = this.$moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD 23:59:00"); /*前一天的时间*/
      let after2DayTime = this.$moment()
        .subtract(2, "days")
        .format("YYYY-MM-DD 23:59:00"); /*前一天的时间*/
      let afterDay = this.$moment()
        .subtract(1, "days")
        .format("YYYY年MM月DD日");
      let today = this.$moment().format("YYYY年MM月DD日");
      this.toDay = today;
      let result;
      if (date.selectd) {
        result = await getAllsharelink(date);
        let _data = result.data.objresult;
        this.resResult = `【大祥区融媒体中心】${this.$moment(date.from).format(
          "YYYY年MM月DD日"
        )}到${this.$moment(date.now).format("YYYY年MM月DD日")}，发稿（${
          _data.AllCountPublish
        }）篇，大祥融媒${_data["原创"].count}篇,大祥之窗上稿${
          _data.countPublish
        }篇，其中原创${_data["原创"].count}篇，大祥发布${
          _data.DXFB_Count
        }篇，转载${_data["转载"].count}篇，向市以上各大媒体发稿${
          _data.MtJJ_Count
        }篇。`;
        console.log(result);
        this.datalist = [];
        console.log(_data);
        for (let key in _data) {
          if (_data[key].count >= 0) {
            // console.log(key)
            // _data['keyname']=key
            _data[key].keyname = key;
            this.datalist.push(_data[key]);
          }
        }

        return;
      }

      date.from = after2DayTime; //大前天
      date.now = afterDayTime; //昨天
      result = await getAllsharelink(date);

      let _data = result.data.objresult;
      console.log(_data);
      for (let key in _data) {
        if (_data[key].count >= 0) {
          // console.log(key)
          // _data['keyname']=key
          _data[key].keyname = key;
          this.datalist.push(_data[key]);
        }
      }

      console.log(this.datalist);
      this.resResult = `【大祥区融媒体中心】${afterDay}，发稿（${_data.AllCountPublish}）篇，大祥之窗上稿${_data.countPublish}篇，其中原创${_data["原创"].count}篇，大祥融媒${_data["原创"].count}篇,大祥发布${_data.DXFB_Count}篇，转载${_data["转载"].count}篇，向市以上各大媒体发稿${_data.MtJJ_Count}篇。`;
      console.log(result);
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
.van-collapse-item >>> .van-cell__title {
  float: left;
  font-size: 16px !important;
}
.rowlist {
  font-size: 16px;
  line-height: 28px;
  border-bottom: 1px solid #f4f4f4;
  color: #2b2b2b;
}
.myrow {
  height: 230px;
  padding: 20px;
}
a:link {
  color: #000;
} /* 未被访问的链接 */
a:visited {
  background: #ffff85;
  text-decoration: underline;
  color: cadetblue;
} /* 已被访问的链接 */
a:hover {
  background: #129416;
  text-transform: uppercase;
  text-decoration: underline;
  color: #fff;
} /* 鼠标指针移动到链接上 */
a:active {
  background: #129416;
  text-decoration: underline;
  color: #fff;
} /* 正在被点击的链接 */

.myfont {
  font-size: 14px;
  color: #2b2b2b;
}

.selected {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
}
.van-icon {
  font-size: 25px !important;
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
