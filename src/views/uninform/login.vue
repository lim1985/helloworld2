<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
  <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->

  <div v-show="loginPanl">
    <van-row>
      <van-col style="padding:5px 5px 0px 5px;border-radius:5px;" span="24">
        <img alt="Vue logo" width="100%" src="../../assets/login_bg_top.png" />
      </van-col>
    </van-row>
    <div :style="setBackground">
      <van-panel title="请输入手机号验证身份">
        <div class="van-hairline--top">
          <van-field
            class="login_input"
            required
            right-icon="question-o"
            @click-right-icon="$toast('必须输入手机号')"
            v-model="Report.tel"
            @input="checkTels"
            label="您的手机号："
            placeholder="请正确输入手机号"
            :rules="phoneRules"
          />
        </div>
        <van-field
          class="login_input"
          v-model="sms"
          center
          @input="check"
          clearable
          label="短信验证码："
          placeholder="请输入短信验证码"
        >
          <!-- <van-button loading type="info" loading-text="加载中..." />  -->
          <van-button
            slot="button"
            :disabled="smsdisabled"
            @click="getSms"
            size="small"
            :loading="buttonloading"
            :loading-text="smsloading"
            :type="buttonType"
            >{{ smsaction }}</van-button
          >
        </van-field>
      </van-panel>
    </div>
     <van-row class="nowfooter">
      <van-col span="24">
        <div >
         湖南泛深智能科技有限公司技术支持
        </div>
      </van-col>
    </van-row>
  </div>

  <!-- </div> -->
</template>

<script>
import Vue from "vue";
// fromUrl,
import {
  Tel,
  ReportId,
  IsAdmin,
  Version,
  AdminInfo,
  UserInfo,
  NodeID
} from "@/store/mutation-types"; //MD5Tel AdminInfo
// import eruda from 'eruda'
import {
  seletDepCount,
  adddxrm,
  finduserByTel,
  getdeplist,
  checkAdmin, //检测管理员
  getUserInfo,
  GetVerificatCodeAdSmssecret,
  checkCaptchatoken,
  GetNodeID

  // CheckTel
} from "@/api/index";
import placesMap from "@/tools/map";
import xzsqoptions from "@/tools/xzsq";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
  components: {},
  watch: {
    // $route(to,from)
    // {
    //   console.log(to)
    //   console.log(from)

    // },
    //    $route: {
    //   handler: function(from, to){
    //     console.log(to);
    //     console.log(from)
    //   },
    //   // 深度观察监听
    //  immediate: true, deep: true
    // },

    //    '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   console.log(toDepth)
    //   console.log(fromDepth)
    //   // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    // },
    //  "$route.path":function(newval){
    //       if(newval === '/home'){
    //        console.log(false)
    //       }else{
    //         console.log(true)
    //       }
    //     },

    //  $route: function(newRouter,oldRouter) {
    //   console.log(newRouter)
    //   console.log(oldRouter)
    //   //{fullPath:"/goods/goodslist"，
    //   //hash:{}，
    //   //meta:{}，
    //   //name:"goodslist"，
    //   //params:{}，
    //   //path:"/goods/goodslist"，
    //   //query:{}
    //   //}
    //   this.activeIndex = newRouter.path//侧边栏选中
    //   },
    //    '$route'(to, from) {
    //   const toDepth = to.path.split('/').length
    //   console.log(toDepth)
    //   const fromDepth = from.path.split('/').length
    //   console.log(fromDepth)
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    // },
    DepCount(val) {
      setTimeout(() => {
        this.DepCount = val;
      }, 500);
    }
  },
  props: {
    msg: String
  },
  created() {
    console.log(window.document.referrer);
    console.log(this.$route);
    console.log(`created`);
  },
  mounted() {
    // this.isFormUrl()
    // let a=this.check_useragent()
    // console.log(a)
    // eruda.init()
    // let ismobile=this.isMobile()
    // if(!ismobile)
    // {
    //   alert(`来自红网APP`)
    // }
    // else
    // {
    //   alert(`来自网页客户端`)
    // }
    // console.log(ismobile)
    this.auth();
  },

  data() {
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')

    this.phoneRules = [
      { required: true, message: "请输入手机号" },
      // { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
      { validator: this.phoneValidator, message: "手机号格式错误" }
    ];
    this.userNameRules = [
      { required: true, message: "请输入姓名" },
      { validator: this.userNameValidator, message: "姓名只能输入中文" }
    ];

    return {
      isRealUrl: false,
      // :style="{backgroundImage:`url(${img})`}"
      showdialog: false,
      setBackground: {
        "min-height": "285px",
        backgroundImage:
          "url(" + require("../../assets/login_bg_down.png") + ")",
        backgroundRepeat: "round"
      },

      // login_bg:require('../assets/login_bg.jpg'),
      form: {
        UserName: "",
        DepName: "",
        Tel: "",
        status: 0,
        Abbreviation: ""
      },
      arrow: "down",
      wasSubmit: false,
      cellphone: "",
      ischeck: false,
      DepName: "",
      Deplist: [],
      pattern: /\d{6}/,
      isAdmin: false,
      buttonType: "info",
      buttonloading: false,
      smsloading: "",

      smsdisabled: true,
      buttondisabled: true,

      showPicker: false,
      columns: [],
      isPerson: false,
      loginPanl: true,
      text: "",
      sms: "",
      smsaction: "发送短信验证码",
      status: 1,
      Report: {
        name: "",
        // tel	nvarchar(14),
        tel: "",
        RealTel: "",
        // sex bit,
        isOK: "0"
      },
      isok: true,
      adminInfo: {},
      smschecktokens: {},
      myVersion: "",
      DepCount: 0

      // personTitle:''
    };
  },
  methods: {
    //  isFormUrl(){
    //    let _fromUrl=Vue.ls.get(fromUrl)
    //    console.log(_fromUrl)
    //    if(_fromUrl==null)
    //    {
    //     window.location.href='https://daxiang-wap.rednet.cn/app/index.html?contentId=6966421&contentType=1'
    //    }
    //    else
    //    {
    //      this.isRealUrl=true
    //    }
    //  },
    //   isMobile(){
    //       //获取到userAgent 使用正则表达式解析 若是移动端返回的flag将不为null，反之为null
    //           console.log(navigator)
    //             if (window.document.referrer === '') {// 当没有上一级url链接的时候，返回上一级按钮的链接改成项目首页url链接地址，这也是很符合项目逻辑的

    //           console.log(`没有上一级`)
    //       }
    //       else
    //       {
    //         console.log(this.$route)
    //         console.log(window.document.referrer)
    //         console.log(`有上一级`)
    //       }
    //           console.log(window.history.length)
    //           let flag = navigator.userAgent.match(
    //             /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    //           );
    //           return flag != null;
    // },
    showintroduce() {
      console.log(this.arrow);

      this.arrow = this.arrow == "down" ? "up" : "down";
      this.showdialog = true;
    },
    showPM() {
      console.log(this.arrow);

      this.arrow = this.arrow == "down" ? "up" : "down";
      this.$toast("排行榜即将开放");
      // this.arrow=this.arrow=='down'?'up'
    },
    onConfirm(val) {
      console.log(val);
      this.form.DepName = val.text;
      this.form.DepID = val.code;
      console.log(this.form);
      this.showPicker = false;
    },
    asyncGetdeplist: _.debounce(async function(val) {
      console.log(val);
      if (val == "") {
        this.Deplist = [];
        this.showpicker = false;
        return;
      }
      const result = await getdeplist({ DepName: val });
      console.log(result);
      if (result.status == 200 && result.data.code != -1) {
        this.Deplist = result.data.Deplist.map(item => {
          return { text: item.DepartmentName, code: item.DepartmentId };
        });
        console.log(val);
        this.showPicker = true;
      } else {
        this.$toast(``);
        return false;
      }
    }, 800),
    //  500),
    async onSubmit(values) {
      console.log("submit", values);
      console.log(this.form);
      let vm = this;
      const toast = vm.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "倒计时 2 秒,数据提交中..."
      });
      let second = 2;
      const timer = setInterval(async () => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒,数据提交中...`;
        } else {
          clearInterval(timer);
          let res = await adddxrm(this.form);
          console.log(res);
          if (res.data.isok) {
            let count = await seletDepCount({ DepID: this.form.DepID });
            console.log(count);
            this.DepCount = count.data.count;
            this.isPerson = false;
            this.wasSubmit = true;
            vm.$toast.success("提交成功");
          } else {
            this.isPerson = false;
            this.wasSubmit = true;
          }
          // 手动清除 Toast
          toast.clear();
        }
      }, 1000);
    },
    checkUserNamevalidator(val) {
      console.log(val);
      if (!val) {
        return false;
      }
      console.log(/^[\u0391-\uFFE5]{0,20}$/.test(val));
      return /^[\u0391-\uFFE5]{0,20}$/.test(val);
      // return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise(resolve => {
        this.$toast.loading("验证中...");

        setTimeout(() => {
          this.$toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },

    onFailed(errorInfo) {
      this.$toast.fail(errorInfo.errors[0].message);
    },

    async getUser(
      tel //判断是不是系统里的人
    ) {
      let userinfomation = await finduserByTel({ cellphone: tel });

      console.log(userinfomation);
      if (userinfomation.data.code == 1) {
        this.form.UserName = userinfomation.data.userinfo.UserName;
        this.form.Tel = tel;
        this.form.Abbreviation = userinfomation.data.userinfo.Abbreviation;
        this.form.DepName = userinfomation.data.userinfo.DepartmentName;
        this.form.DepID = userinfomation.data.userinfo.DepartmentId;
        this.form.status = 1;
        Vue.ls.set(UserInfo, this.form); //设置本地缓存
        this.$store.commit("SET_Userinfo", this.form);
        console.log(this.form);
        this.GetNodeID(this.form.DepID);
      } else {
        alert(`您不是报送系统内部成员，请联系：0739-5396272申请注册`);
        this.$router.push({ name: "Uflogin" });
      }
    },
    async GetNodeID(DepID) {
      let nodeID = await GetNodeID({ DepID: DepID });
      console.log(nodeID);
      let _nodeid = nodeID.data.code == -1 ? 1076 : nodeID.data.result.NodeID;

      Vue.ls.set(NodeID, _nodeid);
      this.$router.push({ name: "Uflist" });
      // return nodeID.data.result.NodeID
    },
    async auth() {
      //  let version=Vue.ls.get(Version)
      //  let tel=Vue.ls.get(Tel)
      //    this.cellphone=tel
      //    if(tel)
      //    {
      //      this.form.Tel=tel
      //      this.loginPanl=false
      //      this.isPerson=true
      //      this.ischeck=true
      //    }
      //    this.getUser(tel)
      //    let result=await isDXRM({cellphone:tel})
      //    console.log(result)
      //    if(!result.data.isok)
      //    {
      //      console.log(`到这里了`)
      //      this.wasSubmit=true;
      //      this.isPerson=false;
      //      this.form.UserName=result.data.userinfo.UserName
      //      this.form.DepName=result.data.userinfo.DepartmentName
      //      this.form.DepID=result.data.userinfo.DepID
      //    }
      //  let count =await seletDepCount({DepID: this.form.DepID})
      //  console.log(count)
      //  this.DepCount=count.data.count
    },
    IdCardValidator(val) {
      return /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(val);
    },
    userNameValidator(val) {
      return /^[\u0391-\uFFE5]{0,4}$/.test(val);
    },
    phoneValidator(val) {
      return /^1\d{10}$/.test(val);
    },
    checkTels: _.debounce(function(val) {
      //  console.log(val)
      // CheckTel({ tel: val }).then(res => {
      if (this.Report.tel == "") {
        this.smsdisabled = true;
        this.$toast("手机号不能为空");
        return false;
      }
      if (!this.phoneValidator(val)) {
        this.smsdisabled = true;
        this.$toast("请输入正确的手机号");
        return false;
      } else {
        this.smsdisabled = false;
        return true;
      }
      // });
    }, 1000),
    getUserInfo() {
      let id;
      let tel;

      id = Vue.ls.get(ReportId);
      tel = Vue.ls.get(Tel);

      setTimeout(() => {
        getUserInfo({ ReportId: id, tel: tel }).then(res => {
          // {code: -1, msg: "查无记录"}
          let data = res.data.html;
          console.log(data);
          if (data.code != -1) {
            this.Report.tel = data.tel;
          }
          this.personInfo = this.Report;
        });
      }, 500);
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },

    // D类人员

    //    @confirm="lkhbconfirm"
    // @cancel="lkhbcancel"
    onChangeFJaddress(val) {
      console.log(val);
    },
    init_palceMap() {
      this.columns = placesMap;
      this.xzsqoptions = xzsqoptions;
    },

    //     GetVerificatCodeAdSmssecret,
    // checkCaptchatoken,
    check: _.debounce(function(val) {
      if (/^1\d{10}$/.test(this.Report.tel) && /^\d{4}$/.test(val)) {
        checkCaptchatoken({
          cc_token: this.smschecktokens.cc_token,
          mobile: this.Report.tel,
          captcha: val
        }).then(async res => {
          console.log(res);
          if (res.data.code == -1) {
            this.$toast.fail("验证码无效");
            return;
          }
          if (res.data.result.code == 1000) {
            //短信验证成功/手机号输入正确

            let _admininfo = await checkAdmin({ cellphone: this.Report.tel }); //检查是不是管理员
            this.getUser(this.Report.tel);

            Vue.ls.set(
              IsAdmin,
              _admininfo.data.Isadmin,
              15 * 24 * 60 * 60 * 1000
            ); //设置本地缓存
            Vue.ls.set(
              Version,
              _admininfo.data.version,
              15 * 24 * 60 * 60 * 1000
            ); //设置本地版本
            this.myVersion = _admininfo.data.version;
            if (_admininfo.data.Isadmin == true) {
              this.adminInfo = _admininfo.data.html;
              Vue.ls.set(AdminInfo, this.adminInfo, 15 * 24 * 60 * 60 * 1000); //设置本地缓存
              this.isAdmin = true; //如果是管理员，显示管理员栏目
            }
            this.form.Tel = this.Report.tel;
            Vue.ls.set(Tel, this.Report.tel);

            console.log(Vue.ls.get(NodeID));
            console.log(`谁前谁后`);
            this.isPerson = true;
            this.ischeck = true;
            this.$toast.success("验证成功");
          }
        });
      } else {
        this.$toast.fail("验证码或手机输出错误");
      }
      // console.log(this.smschecktokens)
    }, 2000),

    async getSms() {
      console.log("获取短信");

      this.buttonloading = true;
      this.smsloading = "短信发送中...";
      setTimeout(() => {
        GetVerificatCodeAdSmssecret({
          contents:
            "输入验证码后即可进入大祥融媒统一线上报送平台，谢谢您的使用。可致电：0739-5396272多提宝贵意见",
          mobile: this.Report.tel
        }).then(res => {
          console.log(res.data._result);
          this.smschecktokens = res.data._result;
          let data = res.data._result;
          this.smsdisabled = true;
          if (data.rspcod == "success" && data.success == true) {
            // this.$refs.nav.go(this.Report.tel);
            this.$toast.success("短信发送成功请等待!");
            this.buttonloading = false;
            this.buttonType = "primary";
            this.Report.RealTel;
            this.smsaction = "短信发送成功";
          } else {
            this.$toast.fail("手机号不正确请重新输入");
            this.buttonloading = false;
            this.smsloading = "";
          }
        });
      }, 2000);
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text_dialog {
  font-size: 16px;
  padding-bottom: 10px;
  text-indent: 2em;
  margin: 15px;
  text-align: left;
  line-height: 26px;
}
.dialogDiv img {
  width: 33%;
}
.Isperson_panel {
  margin: 0px !important;
}

.van-panel {
  margin: 0px 25px;
}
.login_panel {
  background-image: url(../../assets/login_bg.jpg);
}
.myIcon {
  float: right;
  margin-top: 4px;
}
.myIcon >>> .van-icon {
  float: left;
  font-size: 16px !important;
}
.text_result {
  font-size: 14px;
  padding-bottom: 10px;
}
.bottom_button {
  padding-top: 10px !important;
  border-bottom: 0px !important;
}
.van-button--normal >>> .van-button__text {
  font-size: 18px;
}
.van-cell__title {
  text-align: left;
  padding-left: 20px;
  line-height: 40px;
}
.my_panel {
  font-size: 16px;
  text-align: left;
  padding: 20px;
}
.my_panel >>> .van-row {
  padding: 8px;
  border-bottom: 1px solid #42b983;
}
.myinput >>> .van-cell__value {
  border: #42b983 1px solid;
  border-radius: 15px;
}
.myinput >>> .van-field__body {
  padding-left: 10px;
  font-size: 14px;
}

/* .van-cell__value >>> .van-field__body{
      font-size:999px;
} */
.van-cell__value {
  background-color: #42b983 !important;
}
.van-icon {
  font-size: 40px !important;
}
.van-grid-item__icon {
  font-size: 38px !important;
}
.van-cell__value {
  border: #42b983 1px solid !important;
  font-size: 20px !important;
  background-color: aliceblue !important;
}

.login_input {
  font-size: 14px !important;
}
.van-cell {
  color: #2b2b2b;
  font-size: 16px;
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
.nowfooter {
 
    position:absolute;
    color:#000;
    bottom:5;
    width:100%;
    height:100px;    
    text-align:center;
    background-color: #f7f7f7;
}
.title_5 {
  font-size: 17px;
  padding: 10px;
  background-color: red;
  color: #fff;
  font-weight: 600;
}
.title_6 {
  font-size: 17px;
  padding: 10px;
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
}
</style>
