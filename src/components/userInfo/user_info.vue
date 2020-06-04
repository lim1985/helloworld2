<template>
  <div v-show="show" class="check">
    <!-- <div @click="goHome"  class="topArrow">
      返回首页
    
    </div> -->

    <van-panel class="lsUser" title="审核">
      <div>
        <van-cell-group>
          <van-row>
            <van-col span="24">
              <!-- <van-cell title="单元格" value="内容" size="large" label="描述信息" /> -->
            </van-col>
          </van-row>

          <van-row v-if="tel_show" class="checkInput">
            <van-col offset="1" span="7">
              <span class="telclass">手机查询</span>
            </van-col>
            <van-col span="14"
              ><van-field
                @input="checkTels"
                placeholder="请输入被审核人员手机号"
            /></van-col>
          </van-row>
          <div v-show="showUserInfo">
            <div class="demo-nav">
              <div class="demo-nav__title">姓名：{{ userinfo.name }}</div>
              <!-- <svg viewBox="0 0 1000 1000" class="demo-nav__back">
      <path fill="#969799" fill-rule="evenodd" d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"></path>
      </svg> -->
            </div>
            <section class="van-doc-demo-section demo-count-down">
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">1、手机号</h2>
                <div class="van-count-down">{{ userinfo.tel }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">2、性别</h2>
                <div class="van-count-down">
                  {{ userinfo.sex == 1 ? "男" : "女" }}
                </div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">3、身份证</h2>
                <div class="van-count-down">{{ userinfo.idcard }}</div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">4、户籍地</h2>
                <div class="van-count-down">
                  {{
                    `${userinfo.FJsheng},${userinfo.FJshi},${userinfo.FJquxian}`
                  }}
                </div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">5、来邵阳往返车次</h2>
                <div class="van-count-down">
                  {{ userinfo.hangBan }}
                </div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">6、始发地</h2>
                <div class="van-count-down">{{ userinfo.kaiShidi }}</div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">7、途经地</h2>
                <div class="van-count-down">{{ userinfo.jieShudi }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">8、目的地</h2>
                <div class="van-count-down">{{ userinfo.muDidi }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">9、车牌号</h2>
                <div class="van-count-down">{{ userinfo.carNum }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">10、居住类型</h2>
                <div class="van-count-down">{{ userinfo.juzhuType }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">11、乡镇街道</h2>
                <div class="van-count-down">{{ userinfo.xiangZhen }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">12、村社区</h2>
                <div class="van-count-down">{{ userinfo.CunSheQu }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">
                  13、小区，楼栋，房间号
                </h2>
                <div class="van-count-down">
                  {{ userinfo.xiaoQu }}，{{ userinfo.louDong }}，{{
                    userinfo.fangHao
                  }}
                </div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">14、来邵目的</h2>
                <div class="van-count-down">{{ userinfo.LS_muDi }}</div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">15、返/来邵工作单位</h2>
                <div class="van-count-down">{{ userinfo.LS_workType }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">16、园区地址</h2>
                <div class="van-count-down">{{ userinfo.LS_workArea }}</div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">17、武汉归来人员（D）</h2>
                <div class="van-count-down">
                  {{ userinfo.D_class == 1 ? "是" : "否" }}
                </div>
                <div class="van-count-down">
                  离开武汉时间：{{ userinfo.D_class_LkwhDate }}
                </div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">18、湖北归来人员（A）</h2>
                <div class="van-count-down">
                  {{ userinfo.A_class == 1 ? "是" : "否" }}
                </div>
                <div class="van-count-down">
                  离开湖北时间：{{ userinfo.D_class_LkwhDate }}
                </div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">19、接触疫情情况（C）</h2>
                <div class="van-count-down">
                  {{ userinfo.C_class == 1 ? "是" : "否" }}
                </div>
                <div class="van-count-down">
                  接触情况：{{ userinfo.C_class_jiechu_type }}
                </div>
                <div class="van-count-down">
                  接触时间：{{ userinfo.C_class_jiechuDate }}
                </div>
              </div>

              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">
                  20、返/来邵前14天内是否已经居家/集中医学观察满14天（C）
                </h2>
                <div class="van-count-down">
                  {{ userinfo.LS_14_before == 1 ? "是" : "否" }}
                </div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">21、有否发热情况(B)</h2>
                <div class="van-count-down">
                  {{ userinfo.B_class == 1 ? "是" : "否" }}
                </div>
              </div>
              <div class="van-doc-demo-block">
                <h2 class="van-doc-demo-block__title">
                  22、现在是否有其他症状（乏力、头疼、干咳、喉痛、鼻塞、流涕、寒战、气促、呼吸困难等）
                </h2>
                <div class="van-count-down">
                  {{ userinfo.isOK == 1 ? "是" : "否" }}
                </div>
              </div>
              <!-- <div class="van-doc-demo-block">
                  <h2 class="van-doc-demo-block__title">手动控制</h2>
                  <div class="van-count-down">03:000</div>               
                  </div> -->
            </section>
          </div>
        </van-cell-group>
        <div v-if="commit" class="van-doc-demo-block">
          <h2 class="van-doc-demo-block__title">审核意见</h2>
          <div class="van-hairline--top">
            <van-field
              v-model="AuditMind"
              label=""
              placeholder="请填写审核意见："
            />
          </div>
        </div>
      </div>
      <!-- <div slot="footer">
   
    <van-button v-if="B_getInfo" @click="shenhe(99)"  plain hairline type="danger">重点观察</van-button>
    <van-button v-if="B_getInfo" @click="shenhe(66)" plain hairline type="info">解除观察</van-button>
    <van-button v-if="B_getInfo" @click="shenhe(1)" plain hairline type="primary">审核通过</van-button>

  </div> -->
    </van-panel>
  </div>
</template>

<script>
import Vue from "vue";
import { Tel } from "@/store/mutation-types";
import _ from "lodash";
import {
  checkAdmin, //检测管理员
  // reportUpdate,
  getUserInfo,
  auditlog,
  // sendVerification,
  // checkCaptcha,
  // reportAdd,
  CheckTel
} from "@/api/index";
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
// import {
//   sendVerification,
//   checkCaptcha,
//   reportAdd,
//   CheckTel
// } from "@/api/index";
// import placesMap from "@/tools/map";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
// import QRCode from 'qrcodejs2' IsEdit ReportId
// import { IsshowNav} from "@/store/mutation-types"
// import Vue from 'vue'
//   import { mapState} from 'vuex'
export default {
  name: "checkLsUserinfo",
  props: {
    msg: String,
    show: {
      type: Boolean,
      default: false
    },
    userInfo: Object,
    showAdmin: {
      type: Boolean,
      default: false
    }
  },
  //   computed:{
  //   ...mapState({
  //     ReportId:state=>state.user.ReportId,
  //   })    ,
  //    isupdate() {
  //       console.log(this.show)
  //             return  this.show
  //         },
  //    isAdmin(){
  //           return this.showAdmin
  //         }

  // },
  watch: {
    // //用户导航栏
    // isnav(newValue, oldValue) {
    // console.log(oldValue)
    //     return newValue;
    // },
    // //管理员导航栏
    // isAdmin(newValue, oldValue) {
    // console.log(oldValue)
    //     return newValue;
    // },
  },

  created() {
    //  let _ReportId=this.ReportId
    //  console.log(_ReportId)//ReportId
    //  let _IsEdit=Vue.ls.get(IsEdit)
    //  console.log(_ReportId)
    //  this.isAdd=_ReportId==''?false:true
    //  this.isEdit=_IsEdit
  },
  mounted() {},
  data() {
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
    return {
      commit: false,
      B_getInfo: false,
      tel_show: true,
      userinfo: {},
      showUserInfo: false,
      AuditMind: "",
      status: ""
    };
  },
  methods: {
    goHome() {
      // this.$router.push({path:'/report'})
    },

    async shenhe(val) {
      // let admininfo=Vue.ls.get(IsAdmin)
      let tel = Vue.ls.get(Tel);
      let _admininfo = await checkAdmin({ cellphone: tel });
      let _data = _admininfo.data.html;

      this.showUserInfo = true;
      if (val != 1) {
        if (this.AuditMind == "") {
          this.$toast.fail(`请填写审核意见再提交！`);
          return false;
        }
      }
      let data = {
        AuditDepartMent: _data.DepartmentName,
        AuditTel: tel,
        AuditbyReportId: this.userinfo.ReportId,
        AuditName: _data["U.UserName"],
        AuditMind: this.AuditMind,
        status: val, //重点观察的标志
        UserPhone: this.userinfo.tel,
        ActionCode: val
      };

      auditlog(data)
        .then(res => {
          if (res.data.result.code == 1000) {
            this.B_getInfo = false;
            this.$toast.success("记录提交成功");
            this.showUserInfo = false;
            this.commit = false;
            this.tel_show = true;
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("记录提交失败");
        });
    },
    phoneValidator(val) {
      return /^1\d{10}$/.test(val);
    },
    checkTels: _.debounce(function(val) {
      CheckTel({ tel: val }).then(async res => {
        console.log(res);
        if (val == "") {
          this.$toast("手机号不能为空");
          return false;
        }
        if (!this.phoneValidator(val)) {
          this.$toast("请输入正确的手机号");
          return false;
        } else {
          let result = await getUserInfo({ tel: val });
          console.log(result);
          let data = result.data.html;
          console.log(data);

          if (data.code != -1) {
            //        if(data.status==99)
            // {
            //   this.$toast.fail(`该用户已经审核通过，不需重复审核。`);
            //   return false
            // }

            this.$toast("拉取用户数据成功");
            this.B_getInfo = true;
            this.tel_show = false;
            this.commit = true;
            this.showUserInfo = true;

            let userinfo = {
              A_class: data.A_class,
              A_class_dataLkhbDate: data.A_class_LkhbDate,
              B_class: data.B_class,
              C_class: data.C_class,
              C_class_jiechuDate: data.C_class_jiechuDate,
              C_class_jiechu_type: data.C_class_jiechu_type,
              CunSheQu: data.CunSheQu,
              D_class: data.D_class,
              D_class_LkwhDate: data.D_class_LkwhDate,
              FJquxian: data.FJquxian,
              FJsheng: data.FJsheng,
              FJshi: data.FJshi,
              LS_14_before: data.LS_14_before,
              LS_muDi: data.LS_muDi,
              LS_workArea: data.LS_workArea,
              LS_workType: data.LS_workType,
              ReportId: data.ReportId,
              carNum: data.carNum,
              fangHao: data.fangHao,
              hangBan: data.hangBan,
              idcard: data.idcard,
              isOK: data.isOK,
              jieShudi: data.jieShudi,
              xiaoQu: data.xiaoQu,
              xiangZhen: data.xiangZhen,
              tel: data.tel,
              sex: data.sex,
              name: data.name,
              juzhuType: data.juzhuType,
              kaiShidi: data.kaiShidi,
              louDong: data.louDong,
              muDidi: data.muDidi,
              status: data.status
            };
            console.log(userinfo);
            this.userinfo = userinfo;
          } else {
            this.$toast(`${data.msg},未找到该返邵人员`);
          }
        }
      });
    }, 1000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-doc-demo-block {
  left: 10px;
  padding: 0px 10px 0px 8px;
  border-bottom: 1px solid #ebedf0;
}
.van-doc-demo-block__title {
  font-size: 16px !important;
}
.van-panel__content {
  text-align: left;
}
.van-doc-demo-section {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
}
.demo-count-down .van-count-down {
  margin-left: 16px;
}
.van-count-down {
  color: #323233;
  font-size: 14px;
  line-height: 20px;
}
.van-doc-demo-block:first-of-type .van-doc-demo-block__title {
  padding-top: 20px;
}
.van-doc-demo-block__title {
  margin: 0;
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.demo-nav__back {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.demo-nav__title {
  font-weight: 500;
  font-size: 17px;
  text-transform: capitalize;
}
.demo-nav {
  position: relative;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background-color: #fff;
}
.telclass {
  padding: 5px;
  color: #2b2b2b;
  line-height: 40px;
  font-size: 16px;
  margin-left: 20px;
}

.checkInput {
  padding: 20px 0 20px 0;
}

.topArrow {
  padding: 5px 8px;
  font-size: 18px;
  text-align: left;
  /* float: left; */
  margin-top: 8px;
  /* margin-left: 40px; */
}
.van-cell__title {
  background-color: #409eff;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  text-align: left;
}
.van-field {
  font-size: 28px;
  color: #2b2b2b;
}
/* .van-field__body{
    background-color: beige !important;
    line-height: 40px !important;
} */
.mytitle {
  color: #fff;
  padding: 8px;
  font-size: 12px;
  text-align: left;
}
.van-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px;
  overflow: hidden;
  color: #2b2b2b;
  font-size: 16px;

  background-color: #fff;

  text-align: left;
  line-height: 28px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 4px;
}

.footer {
  margin-top: 20px;
  padding: 10px;
  color: #2b2b2b;
  background-color: #d7d7d7;
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
