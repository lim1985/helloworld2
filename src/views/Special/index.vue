<template>
  <transition name="van-fade">
    <div class="hello">
      <van-row>
        <van-col span="24">
          <van-search
            shape="round"
            background="#1989fa"
            v-model="searchvalue"
            placeholder="请输入搜索关键词"
          />
        </van-col>
        <van-col v-if="showSpecialImg" span="24">
          <van-image lazy-load width="100%" height="14em" fit="cover" :src="`${images[0]}`" />
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          <h2>专栏：{{ specialTitle }}</h2>
        </van-col>
        <van-col span="24">
          <div class="zhuanlanText">
            <b>专栏简介：</b>
            {{ specialDescription }}
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <div class="toplist">
            <ul>
              <li v-for="(item,index) in textspecialList" :key="index">
                <van-row>
                  <van-col @click="viewContent(item)" span="24">
                    <div class="toptitle">{{ item.Title }}</div>
                  </van-col>
                  <van-col span="24">
                    <div class="topfoot">
                      <van-row>
                        <van-col offset span="3">
                          <h6 class="top">置顶</h6>
                        </van-col>
                        <van-col offset span="4">
                          <h6 class="top2">{{ item.TitleIntact}}</h6>
                        </van-col>

                        <van-col span="8">
                          <h6 class="toptime">{{item.InputTime}}</h6>
                        </van-col>
                      </van-row>
                    </div>
                    <div class="line">
                      <van-divider />
                    </div>
                  </van-col>
                </van-row>
              </li>
              <!-- <li>
                       <van-row>
                        <van-col span="24">
                            <div class="toptitle">“一盔一带”主题宣传走进汽车南站,</div>
                        </van-col>
                          <van-col span="24">
                           <div class="topfoot">
                              <van-row>
                                <van-col offset='' span="3">
                                 <h6 class="top">置顶</h6>
                               </van-col>
                               <van-col offset='' span="4">
                                 <h6 class="top2">红网时刻</h6>
                               </van-col>
                          
                               <van-col span="8">
                                    <h6 class="toptime">2020-08-02 18:30</h6>
                               </van-col>
                            </van-row> 
                            </div>
                        </van-col>
                        </van-row>
              </li>-->
            </ul>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-swipe
            @change="onChange"
            class="my-swipe"
            width="350"
            style="height: 180px;"
            :show-indicators="false"
            indicator-color="white"
          >
            <van-swipe-item v-for="(item, index) in hotlist" :key="index">
              <template v-if="index<=3">
                <div class="tophot">
                  <div class="hot_icon">
                    <van-icon name="fire" />
                  </div>
                  <div class="hot">热点精选</div>
                </div>

                <div class="hot_title">{{item.Title}}</div>
                <van-image
                  @click="viewContent(item)"
                  lazy-load
                  width="97%"
                  height="9em"
                  fit="cover"
                  :src="`${item.DefaultPicUrl}`"
                />
                <!-- :src="`${item.DefaultPicUrl.indefOf('https://')==1)?item.DefaultPicUrl:'http://info.dxzc.gov.cn/uploadfiles/'item.DefaultPicUrl}`"    -->
              </template>

              <!-- <img  fit="contain" v-lazy="image" /> -->
            </van-swipe-item>
          </van-swipe>
          <!-- <van-swipe @change="onChange">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                <template #indicator>
                    <div class="custom-indicator">
                    {{ current + 1 }}/4
                    </div>
                </template>
          </van-swipe>-->
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <div class="more">更多热点内容</div>
        </van-col>
      </van-row>
      <!-- <van-row>
          <van-col span="24">
              <div>
                 <van-row>
                    <van-col span="24">
                                <div class="toptitle">“一盔一带”主题宣传走进汽车南站,“一盔一带”主题宣传走进汽车南站,</div>
                    </van-col>
                 </van-row> 
                   <van-row class="imgrow">
                        <div v-for="(image, index) in images" :key="index">
                        <template v-if="image.length>=2">
                            <van-col span="8"  class="imglists" >                               
                                <img v-if="index<=2" width="96%" height="90"  fit="fill" v-lazy="image" />                              
                            </van-col> 
                         </template>
                      </div> 
                    
                 </van-row> 
                   <van-row>                     
                          <van-col span="24">
                            <div class="contentfloot">
                              <van-row>
                                <van-col offset='' span="3">
                                 <h6 class="top">置顶</h6>
                               </van-col>
                               <van-col offset='' span="4">
                                 <h6 class="top2">湖南日报</h6>
                               </van-col>
                             
                               <van-col span="8">
                                    <h6 class="toptime">2020-08-02 18:30</h6>
                               </van-col>
                            </van-row> 
                            </div>
                        </van-col>
                        </van-row>
                 
               </div>   
               <div class="line">
                   <van-divider />
               </div>
          </van-col>
      </van-row>
        <van-row>
          <van-col span="24">
              <div>
                 <van-row>
                    <van-col span="24">
                                <div class="toptitle">“一盔一带”主题宣传走进汽车南站,“一盔一带”主题宣传走进汽车南站,</div>
                    </van-col>
                 </van-row> 
                   <van-row class="imgrow">
                        <div v-for="(image, index) in images" :key="index">
                        <template v-if="image.length>=2">
                            <van-col span="12"  class="imglists" >                               
                                <van-image lazy-load v-if="index<=1" width="97%" height="9em"         fit="cover"  :src="image" />                              
                            </van-col> 
                         </template>
                      </div> 
                  
                 </van-row> 
                    <van-row>                     
                          <van-col span="24">
                           <div class="contentfloot">
                              <van-row>
                                <van-col offset='' span="3">
                                 <h6 class="top">置顶</h6>
                               </van-col>
                               <van-col offset='' span="4">
                                 <h6 class="top2">湖南日报</h6>
                               </van-col>
                             
                               <van-col span="8">
                                    <h6 class="toptime">2020-08-02 18:30</h6>
                               </van-col>
                            </van-row> 
                            </div>
                        </van-col>
                        </van-row>
                   
               </div>   
                <div class="line">
                   <van-divider />
               </div>
          </van-col>

      </van-row>
           <van-row>
          <van-col span="24">
              <div>
                 <van-row>
                    <van-col span="24">
                                <div class="toptitle">“一盔一带”主题宣传走进汽车南站,“一盔一带”主题宣传走进汽车南站,</div>
                    </van-col>
                 </van-row> 
                   <van-row class="imgrow">
                        <div v-for="(image, index) in images" :key="index">
                        <template v-if="image.length>=2">
                            <van-col span="24"  class="imglists" >    
                 <van-image
                  v-if="index<=0"
                   lazy-load
                  width="98%"
                  height="15em"
                  fit="cover"
                  :src="image"
                />                           
                          
                            </van-col> 
                         </template>
                      </div> 
                   
                 </van-row> 
                    <van-row>                     
                          <van-col span="24">
                            <div class="contentfloot">
                              <van-row>
                                <van-col offset='' span="3">
                                 <h6 class="top">置顶</h6>
                               </van-col>
                               <van-col offset='' span="4">
                                 <h6 class="top2">湖南日报</h6>
                               </van-col>
                             
                               <van-col span="8">
                                    <h6 class="toptime">2020-08-02 18:30</h6>
                               </van-col>
                            </van-row> 
                            </div>
                        </van-col>
                        </van-row>
                  
               </div>  
                 <div class="line">
                   <van-divider />
               </div>
          </van-col>

      </van-row>-->
      <van-row v-for="(item,index) in imagespecialList" :key="index">
        <van-col span="24">
          <div @click="viewContent(item)">
            <van-row>
              <van-col span="16">
                <div class="onetoptitle">{{item.Title}}</div>
              </van-col>
              <van-col class="imglists" span="7">
                <van-image
                  lazy-load
                  width="100%"
                  height="80"
                  fit="cover"
                  :src="`${item.DefaultPicUrl}`"
                />
                <!-- <img v-if="index<=0" width="100%" height="80"  fit="cover" v-lazy="image" />    -->
              </van-col>
            </van-row>
            <van-row>
              <van-col span="24">
                <div class="contentfloot">
                  <van-row>
                    <!-- <van-col offset='' span="3">
                                 <h6 class="top">置顶</h6>
                    </van-col>-->
                    <van-col offset span="4">
                      <h6 class="top2">{{ item.TitleIntact}}</h6>
                    </van-col>

                    <van-col span="8">
                      <h6 class="toptime">{{ item.InputTime}}</h6>
                    </van-col>
                  </van-row>
                </div>
              </van-col>
            </van-row>
            <!-- <van-row class="imgrow">
                    <van-col class="imglists" span="8" v-for="(image, index) in images" :key="index">
                         <img v-if="index<=0" width="95%" height="110"  fit="fill" v-lazy="image" />   
                    </van-col>  
                  
            </van-row>-->
            <!-- <van-row class="imagesicon">
                    <van-col >
                   <div>
                       <van-icon name="photo-o" >4</van-icon>
                   </div>  
                    </van-col>                             
            </van-row>-->
          </div>
          <div class="line">
            <van-divider />
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          <div class="footer">湖南泛深智能科技有限公司技术支持</div>
        </van-col>
      </van-row>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// import { Tel, MD5Tel, ReportId, IsshowNav } from "@/store/mutation-types";

// import { mapState} from 'vuex'
// import LimGrid from '@/components/Index/grid/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
import {
  getcontextlistbyspecialid,
  // getAllspecialID
  // getUserInfo,
  // sendVerification,
  // checkCaptcha,
  // reportAdd,
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
  components: {

    // navigations
  },
  //     computed:{
  //   ...mapState({
  //     VXReportId:state=>state.user.ReportId,
  //   })
  // },
  props: {
    // msg: String
  },
  create () {
    // console.log(Vue.ls.get(IsshowNav));
    // this.isnav = Vue.ls.get(IsshowNav);
  },
  mounted () {

    this.showSpecialImg = this.isfupinspcialId();
    console.log(this.showSpecialImg)
    this.initdata();
    // this.init_palceMap();
    // this.auth();
  },
  data () {

    return {
      showSpecialImg: false,
      specialDescription: '',
      speciallist: [],
      specialName: '',
      textspecialList: [],
      hotlist: [],
      imagespecialList: [],
      specialTitle: '',
      images: [
        'http://info.dxzc.gov.cn/UploadFiles/2020/8/2020825134027.jpg',
        'https://wx.daxiang.gov.cn/uploadfiles/2020/8/6/237114690590976.jpg',
        'https://wx.daxiang.gov.cn/uploadfiles/2020/8/1/232864781623270.jpg',
        'http://info.dxzc.gov.cn/UploadFiles/2020/8/202084211435.png',
        'https://wx.daxiang.gov.cn/uploadfiles/2020/7/30/8102590743177.jpg',

      ],
      current: 0,
      searchvalue: '',
      msg: '登陆后主页'
    };
  },
  methods: {
    isfupinspcialId () {
      console.log(this.$route.params.SpecialId);
      let arr = [37, 38, 39]
      console.log()
      return JSON.stringify(arr).indexOf(this.$route.params.SpecialId) == -1 ? false : true
      // console.log(JSON.stringify(arr.indexOf(this.$route.params.SpecialId)))
      // return JSON.stringify.arr.indexOf(JSON.stringify(arr.indexOf(this.$route.params.SpecialId))) > 0 ? false : true
    },
    viewContent (item) {

      this.$router.push({ path: `/Specialview/${item.GeneralID}` })
    },
    async initdata () {
      let specialid = this.$route.params.SpecialId
      this.speciallist = await getcontextlistbyspecialid({ specialID: specialid })
      console.log(this.speciallist);
      this.specialTitle = this.speciallist.data.special.SpecialName
      this.specialDescription = this.speciallist.data.special.Description
      this.textspecialList = this.speciallist.data.result.textContent
      this.imagespecialList = this.speciallist.data.result.imageContent
      this.hotlist = this.speciallist.data.result.hotlist
    },
    onChange (index) {
      console.log(index)
    },

    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zhuanlanText {
  text-align: left;
  padding: 10px;
  border: 1px solid #efae70;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  margin-block-start: 0.5em;
  margin-block-end: 1em;
}
.topfoot {
  margin-inline-start: 4px;
  margin-block-start: 0em;
}
.line >>> .van-divider {
  margin-block-start: 1px;
  margin-inline-start: 10px;
  margin-inline-end: 10px;
  border-color: #f2f6fc;
  margin-block-end: 0.3em;
}
.more {
  margin-block-start: 10px;
  margin-block-end: 5px;
}
.contentfloot {
  margin-block-start: -5px;
  margin-block-end: 5px;
}
.imagesicon {
  display: block;
  position: absolute;

  margin-inline-start: 23em;
  margin-block-start: 4.5em;
  color: #fff;
}

.imglists >>> img {
  border-radius: 5px;
}
.imgrow {
  margin-inline-start: 0.4em;
  margin-inline-end: 0.4em;
}
.imglists {
  margin-block-start: 0.3em;
  margin-block-end: 0em;
}
.toptime {
  color: #a3a5aa;
  font-weight: 500;
  margin-block-start: 0.5em;
}
.toptitle {
  color: #000;
  font-weight: 800;
  text-align: left;
  margin-block-start: 0.5em;
  margin-block-end: 0em;
  margin-inline-start: 1em;
  font-size: 16px;
  margin-inline-end: 1em;
}
.onetoptitle {
  color: #000;
  font-weight: 800;
  text-align: left;
  margin-block-start: 0.1em;
  margin-block-end: 0em;
  margin-inline-start: 1em;
  font-size: 16px;
  margin-inline-end: 1em;
}
.toplist {
  margin-block-end: 0.5em;
}
.top {
  color: #409eff;
}
.top2 {
  color: #a3a5aa;
}
.hot_icon >>> .van-icon {
  line-height: 25px;
  z-index: 999;
}
.tophot {
  margin-inline-start: 0.7em;
  z-index: 999;
}
.hot_icon {
  z-index: 999;
  display: block;
  position: fixed;
  margin-block-start: 0.5em;
  margin-inline-start: 0.8em;
  color: #fff;

  border-radius: 50%;
  width: 1.9%;
  background-color: #f53333;
}
.hot_title {
  z-index: 999;
  position: absolute;
  text-align: left;
  margin-block-start: 7em;
  margin-inline-start: 1.3em;
  color: #fff;
  font-size: 17px;
  text-shadow: 5px 2px 6px #000;
}
.hot {
  z-index: 999;
  display: block;
  position: fixed;
  margin-inline-start: 2.8em;
  margin-block-start: 0.7em;
  color: #fff;
  text-shadow: 5px 2px 6px #000;
  font-size: 0.8em;
}
h6 {
  display: block;
  font-size: 0.87em;
  margin-block-start: 0.33em;
  margin-block-end: 0.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  font-weight: 100;
}
h2 {
  margin-block-start: 0.51em;
  margin-block-end: 0.3em;
  text-align: left;
  margin-inline-start: 0.5em;
  font-size: 18px;
}
.my-swipe img {
  width: 100%;
  padding: 0 10px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.my-swipe .van-swipe-item {
  color: #ccc;
  font-size: 20px;

  text-align: center;
  background-color: #fff;
}
.footer {
  margin-top: 20px;
  padding: 10px;

  color: #2b2b2b;
  background-color: #d7d7d7;
}
</style>
