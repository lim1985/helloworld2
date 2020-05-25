<template>
  <div class="hello">
    <!-- <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe> -->
   
    <!-- src="https://img.yzcdn.cn/vant/cat.jpeg" -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <van-cell-group>
  <van-field v-model="text" placeholder="请输入用户名" />
</van-cell-group> -->

 <!-- required
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误" -->
    <van-panel  v-show="loginPanl" title="请先输入手机号验证">
      <div>
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
      </div>
    </van-panel>
    <navigations  @ok="backReport" :AdminUserInfo="adminInfo" @check="check_LS_User" ref="nav" :showAdmin="isAdmin" :show="isnav" msg="我的导航组件" />
   <!-- <van-panel v-show="loginPanl" title="">
      <div>
 <van-grid clickable :column-num="3">
  <van-grid-item icon="qr" text="生成二维码" to="/" />
  <van-grid-item icon="comment-o" text="登记信息" url="/vant/mobile.html" />
    <van-grid-item icon="records" text="修改登记信息" url="/vant/mobile.html" />
</van-grid>
      </div>
    </van-panel> -->



    <van-panel v-show="isshowReport" class="panel-title" title="请填写个人信息">
      <div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.name"
            label="姓名："
            required
            @input="checkUsername"
            placeholder="请正确输入姓名"
            :rules="userNameRules"
          />
        </div>
        <div class="van-hairline--top">
          <van-field name="radio" label="性别：">
            <van-radio-group
              v-model="Report.sex"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="1" checked-color="#07c160">男</van-radio>
              <van-radio name="0" checked-color="#07c160">女</van-radio>
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.idcard"
            label="身份证："
            required
            @input="checkUserIDcard"
            placeholder="请填写身份证"
            :rules="IdCardRules"
          />
        </div>
        <van-field
          readonly
          clickable
          label="户籍地址"
          :value="value"
          v-model="Report.FJaddress"
          placeholder="选择城市"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </div>
    </van-panel>

    <van-panel v-show="isshowReport" title="请填行程信息">
      <div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.hangBan"
            label="车次/航班号："
            placeholder="请正确输入返/来邵车次、航班"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.kaiShidi"
            label="始发地："
            placeholder="请填写始发地"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.jieShudi"
            label="途经地："
            placeholder="请填写途经地"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.muDidi"
            label="目的地："
            placeholder="请填写目的地"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.carNum"
            label="车牌号"
            placeholder="请填写乘车返/来邵车牌号"
          />
        </div>
      </div>
    </van-panel>

    <van-panel v-show="isshowReport" title="请填写在邵居住信息">
      <div>
        <div class="van-hairline--top">
          <van-field name="radio" label="居住类别：">
            <van-radio-group
              v-model="Report.juzhuType"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="集体宿舍" checked-color="#07c160"
                >集体宿舍</van-radio
              >
              <van-radio name="在外租房" checked-color="#07c160"
                >在外租房</van-radio
              >
              <van-radio name="居家" checked-color="#07c160">居家</van-radio>
              <van-radio name="其他" checked-color="#07c160">其他</van-radio>
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.xiangZhen"
            label="返邵后住所地址："
            placeholder="返邵后住乡镇街道（或园区、企业）"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.CunSheQu"
            label="村社区："
            placeholder="请填写村社区"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.xiaoQu"
            label="小区名称："
            placeholder="请填写小区名称"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.louDong"
            label="楼栋号"
            placeholder="请填写楼栋号"
          />
        </div>
        <div class="van-hairline--top">
          <van-field
            v-model="Report.fangHao"
            label="门牌号"
            placeholder="请填写门牌号"
          />
        </div>
      </div>
    </van-panel>

    <van-panel v-show="isshowReport" title="请填写来邵目的信息">
      <div>
        <div class="van-hairline--top">
          <van-field name="radio" label="用工类型或目的：">
            <van-radio-group
              v-model="Report.LS_muDi"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="企业返岗" checked-color="#07c160"
                >企业返岗</van-radio
              >
              <van-radio name="门店务工" checked-color="#07c160"
                >门店务工</van-radio
              >
              <van-radio name="求职" checked-color="#07c160">求职</van-radio>
              <van-radio name="其它" checked-color="#07c160">其它</van-radio>
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <van-field name="radio" label="返/来邵工作单位：">
            <van-radio-group
              @change="showWorkArea"
              v-model="Report.LS_workType"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="园区" checked-color="#07c160">园区</van-radio>
              <van-radio name="乡镇街道" checked-color="#07c160"
                >乡镇街道</van-radio
              >
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <van-field
            v-show="isshowWorkArea"
            v-model="Report.LS_workArea"
            label="园区/乡镇街道："
            placeholder="请填写园区/乡镇街道名称"
          />
        </div>
      </div>
    </van-panel>

    <!-- 15.2020年2月1日至今来自除湖北以外省市的来邵人员（D）
  16.是否为湖北武汉返邵人员,或者与确诊病例者有过密切接触（A）
   17.与湖北有密切接触的人员（即2月1日以后有接触，接触未解除仍需监测的湖北人员）（C）。
                                
                                  
                                19.现在是否有发热症状（B）  -->

    <van-panel v-show="isshowReport" title="请填写健康调查">
      <!-- A类人员 -->
      <div>
        <div class="van-hairline--top">
          <span class="van-cell" style="text-align: left;"
            >2020年2月1日至今,来自除湖北以外省市的来邵人员(D)</span
          >
          <van-field name="radio" label="">
            <van-radio-group
              @change="isLkhb"
              v-model="Report.D_class"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="1" checked-color="#07c160">是</van-radio>
              <van-radio name="0" checked-color="#07c160">否</van-radio>
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <van-field
            v-show="isshowTimeInput"
            :readonly="is_class_readonly"
            v-model="Report.D_class_LkwhDateString"
            label="离开日期："
            placeholder="请填写离开武汉日期："
          />
        </div>
        <div v-show="isshowLKHBtime" class="van-hairline--top">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            @confirm="lkhbconfirm"
            @cancel="lkhbcancel"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
          />
        </div>
        <div>
          <!-- A类人员end -->
          <!-- B类人员 -->
          <div class="van-hairline--top">
            <span class="van-cell" style="text-align: left;"
              >湖北武汉返邵人员,或者与确诊病例者有过密切接触(A)</span
            >
            <van-field name="radio" label="">
              <van-radio-group
                @change="LkwhFS"
                v-model="Report.A_class"
                direction="horizontal"
                slot="input"
              >
                <van-radio name="1" checked-color="#07c160">是</van-radio>
                <van-radio name="0" checked-color="#07c160">否</van-radio>
              </van-radio-group>
            </van-field>
          </div>

          <div class="van-hairline--top">
            <van-field
              v-show="isshowisLkwhFSTimeInput"
              :readonly="is_class_readonly"
              v-model="Report.A_class_LkhbDateString"
              label="离开日期："
              placeholder="请填写离开湖北日期："
            />
          </div>
          <div v-show="isshowisLkwhFSTime" class="van-hairline--top">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              @confirm="lkWHconfirm"
              @cancel="lkWHcancel"
              :min-date="minDate"
              :max-date="maxDate"
              :formatter="formatter"
            />
          </div>
        </div>
        <!-- C类人员 -->
        <div>
          <div class="van-hairline--top">
            <span class="van-cell" style="text-align: left;"
              >与湖北有密切接触的人员(即2月1日以后有接触，接触未解除仍需监测的湖北人员)(C)</span
            >
            <van-field name="radio" label="">
              <van-radio-group
                @change="isJCWH"
                v-model="Report.C_class"
                direction="horizontal"
                slot="input"
              >
                <van-radio name="1" checked-color="#07c160">是</van-radio>
                <van-radio name="0" checked-color="#07c160">否</van-radio>
              </van-radio-group>
            </van-field>
          </div>
          <van-radio-group
            v-show="isshowC_class"
            @change="C_class"
            v-model="Report.C_class_jiechu_type"
            direction="horizontal"
            slot="input"
          >
            <!-- 
   确诊病例
疑似病例
湖北暴露史人员 -->
            <van-radio name="确诊病例" checked-color="#07c160"
              >确诊病例</van-radio
            >
            <van-radio name="疑似病例" checked-color="#07c160"
              >疑似病例</van-radio
            >
            <van-radio name="湖北暴露史人员" checked-color="#07c160"
              >湖北暴露史人员</van-radio
            >
          </van-radio-group>

          <div class="van-hairline--top">
            <van-field
              v-show="isshow_C_timeInput"
              :readonly="is_class_readonly"
              v-model="Report.C_class_jiechuDateString"
              label="接触日期："
              placeholder="请填写接触日期："
            />
          </div>
          <div v-show="isshow_C_time" class="van-hairline--top">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              @confirm="c_confirm"
              @cancel="c_cancel"
              :min-date="minDate"
              :max-date="maxDate"
              :formatter="formatter"
            />
          </div>
        </div>
        <!-- end -->
        <!-- A类人员 -->
        <!-- <div> -->
        <div class="van-hairline--top">
          <span class="van-cell" style="text-align: left;"
            >现在是否有发热症状(B)</span
          >
          <van-field name="radio" label="">
            <van-radio-group
              @change="is_B_class"
              v-model="Report.B_class"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="1" checked-color="#07c160">是</van-radio>
              <van-radio name="0" checked-color="#07c160">否</van-radio>
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <span class="van-cell" style="text-align: left;"
            >返/来邵前14天内是否已经居家/集中医学观察满14天</span
          >
          <van-field name="radio" label="">
            <van-radio-group
              @change="is_14_day"
              v-model="Report.LS_14_before"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="1" checked-color="#07c160">是</van-radio>
              <van-radio name="0" checked-color="#07c160">否</van-radio>
            </van-radio-group>
          </van-field>
        </div>
        <div class="van-hairline--top">
          <span class="van-cell" style="text-align: left;"
            >现在是否有其他症状（乏力、头疼、干咳、喉痛、鼻塞、流涕、寒战、气促、呼吸困难等）</span
          >
          <van-field name="radio" label="">
            <van-radio-group
              @change="is_ok"
              v-model="Report.isOK"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="1" checked-color="#07c160">是</van-radio>
              <van-radio name="0" checked-color="#07c160">否</van-radio>
            </van-radio-group>
          </van-field>
        </div>

        <van-button
          :disabled="buttondisabled"
          @click="sumitreport"
          type="primary"
          >{{submit}}</van-button
        >
          </div>
    </van-panel>
        <!-- <div class="van-hairline--top"> 
           <van-field v-show="isshowlkhbTimeInput" v-model="Report.D_class_LkwhDate" label="离开日期："  placeholder="请填写离开武汉日期：" /> 
      </div>  
    <div v-show="isshowLKHBtime" class="van-hairline--top"> 
          <van-datetime-picker
          v-model="currentDate"
          type="date"
          @confirm="lkhbconfirm"
          @cancel="lkhbcancel"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
        />
      </div>      -->
        <!-- <div> -->    
    <!-- <van-row>
      <van-col span="24">
        <div class="footer">
          湖南泛深智能科技有限公司技术支持
        </div>
      </van-col>
    </van-row> -->

    <!-- confirm	
cancel -->
<checkLsinfo SH="check_LS_User" :show="showCheckInfo"  />
  </div>
</template>

<script>
import Vue from 'vue'
import { Tel ,ReportId,IsshowNav,IsAdmin ,Version} from "@/store/mutation-types"//MD5Tel AdminInfo
import { navigations } from "@/components/nav";
import { checkLsinfo } from "@/components/lsUser";
  // import { mapState} from 'vuex'
  // import navigations from '@/components/nav/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
import {
  
  checkAdmin,//检测管理员
  reportUpdate,
  getUserInfo,
  GetVerificatCodeAdSmssecret,
  checkCaptchatoken,
  reportAdd,
  CheckTel
} from "@/api/index";
import placesMap from "@/tools/map";
import xzsqoptions from "@/tools/xzsq";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
    components: {    
     navigations,
     checkLsinfo
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
    console.log(xzsqoptions)
    Vue.ls.remove(IsshowNav)
        // Vue.ls.remove(User_ID)
    // MD5Tel
    this.auth();
    this.init_palceMap();
    // this.isnav=Vue.ls.get(IsshowNav)==null?false:true
    this.isnav = !!Vue.ls.get(IsshowNav) 
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
    this.phoneRules = [
      { required: true, message: "请输入手机号" },
      // { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
      { validator: this.phoneValidator, message: "手机号格式错误" }
    ];
    this.userNameRules = [
      { required: true, message: "请输入姓名" },
      { validator: this.userNameValidator, message: "姓名只能输入中文" }
    ];
    this.IdCardRules = [
      { required: true, message: "请输入身份证" },
      { validator: this.IdCardValidator, message: "请正确输入身份证" }
    ];

    return {
   
      showCheckInfo:false,
      submit:'提交资料',
      isAdmin:false,
      isnav:false,
      isshowUpdate:false,
      isshowReport:false,
      buttonType: "info",
      buttonloading: false,
      smsloading: "",
      isshowTimeInput: false,
      is_class_readonly: true,
      smsdisabled: true,
      buttondisabled: true,
      images: ["./assets/fs.png", "https://img.yzcdn.cn/vant/apple-2.jpg"],
      //C类人员
      isshow_C_time: false,
      isshow_C_timeInput: false,
      isshowC_class: false,
      isLkwhFS: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      // D类人员
      isshowisLkwhFSTime: false,
      isshowLKHBtime: false,
      isshowlkhbTimeInput: false,
      // A类人员
      isshowisLkwhFStime: false,
      isshowisLkwhFSTimeInput: false,
      isshowWorkArea: false,
      value: [],
      showPicker: false,
      columns: [],
      isABCD: true,
      isMudi: true,
      isshaoyangjuzhu: true,
      isxingCheng: true,
      isFg: false,
      isPerson: true,
      loginPanl: true,
      text: "",
      sms: "",
      smsaction: "发送短信验证码",
      Report: {
        status:0,
        inputTime: null,
        C_class_jiechu_type: "",
        name: "",
        // tel	nvarchar(14),
        tel: "",
        RealTel:"",
        // sex bit,
        sex: "1",
        // idcard nvarchar(20),
        idcard: "",
        FJaddress: "",
        // FJsheng nvarchar(20),
        FJsheng: "",
        // FJshi nvarchar(20),
        FJshi: "",
        // FJquxian nvarchar(20)	,
        FJquxian: "",
        // hangBan nvarchar(100),
        hangBan: "",
        // kaiShidi nvarchar(100),
        kaiShidi: "",
        // jieShudi nvarchar(100),
        jieShudi: "",
        // muDidi nvarchar(100),
        muDidi: "",
        // carNum	nvarchar(20),
        carNum: "",
        // juzhuType nvarchar(20),
        juzhuType: "集体宿舍",
        // xiangZhen nvarchar(50),
        xiangZhen: "",
        // CunSheQu nvarchar(50),
        CunSheQu: "",
        // xiaoQu nvarchar(50),
        xiaoQu: "",
        // louDong	nvarchar(20),
        louDong: "",
        // fangHao nvarchar(10),
        fangHao: "",
        // LS_muDi nvarchar(10),
        LS_muDi: "企业返岗",
        // LS_workType nvarchar(10),
        LS_workType: "",
        // LS_workArea nvarchar(20),
        LS_workArea: "",
        // D_class	bit,
        D_class: "0",
        // D_class_LkwhDate datetimeoffset(2),
        D_class_LkwhDate: null,
        D_class_LkwhDateString: "",
        // A_class bit,
        A_class: "0",
        // A_class_LkhbDate datetimeoffset(2),
        A_class_LkhbDate: null,
        A_class_LkhbDateString: "",
        // C_class bit ,
        C_class: "0",
        // C_class_jiechuDate datetimeoffset(2),
        C_class_jiechuDate: null,
        C_class_jiechuDateString: "",
        // LS_14_before bit,
        LS_14_before: "0",
        // B_class bit,
        B_class: "0",
        // B_class_LkhbDate  datetimeoffset(2),
        // B_class_LkhbDate: '',
        // isOK bit
        isOK: "0"  ,
        EditCount:0,
        EditTime:null     
      },
      mytel:'',
      EditCount:0,
      MD5TEL:'',
      isok:true,
      adminInfo:{},
      smschecktokens:{},
      myVersion:''
    };
  },
  methods: {
    check_LS_User(){


 this.showCheckInfo==false? this.showCheckInfo=true: this.showCheckInfo=false
   

          console.log(`回来了`)

    },
  checkUserIDcard: _.debounce(function(val) {  
      //  console.log(val)
      if(val=='')
      {
        this.$toast("身份证不能为空");
        this.buttondisabled=true;
        return false
      }
      else
      {
        
         if(!this.IdCardValidator(val))
      {
        this.$toast("请正确输入身份证");
        this.buttondisabled=true;
        return false
      }
      }
       this.buttondisabled=false;
        console.log(val)
      return true
    }, 2000),

   checkUsername: _.debounce(function(val) { 
      //  console.log(val)
      if(val=='')
      {
        this.$toast("姓名不能为空");
        this.buttondisabled=true;
        return false
      }
      else
      {
        
         if(!this.userNameValidator(val))
      {
        this.$toast("姓名只能输入中文");
        this.buttondisabled=true;
        return false
      }
      }
       this.buttondisabled=false;
        console.log(val)
        return true
    }, 2000),
    backReport()
    {
      console.log('回来了')
      this.isshowReport==false? this.isshowReport=true: this.isshowReport=false
      console.log(this.isshowReport)
      // if(this.isshowReport==false)
  
     
      // !this.isshowReport?this.isshowReport=true:false
      // !this.isshowReport?this.showCheckInfo=true:this.showCheckInfo=false
      // !this.showCheckInfo=false?true:false
      this.loginPanl=false
      this.auth();
    
     },
  async auth(){

     let version=Vue.ls.get(Version)
     let tel=Vue.ls.get(Tel)
   
    // let version=Vue.ls.get(Version);
    // let MD5Tel=Vue.ls.get(MD5Tel);
    // console.log(version)
    // console.log(MD5Tel)
    
    // if(version==null)
    // {
    //   console.log(`当前没有版本信息`)

    // }
    
      //  let admin=Vue.ls.get(IsAdmin)
      //  if(admin)
      //  {
      //     this.isAdmin=true;
      //  }
      // console.log(telmd5);
    let admininfo =await checkAdmin({cellphone:tel})
    // console.log(admininfo.data.version==version)
      if(admininfo.data.version==version)
      {
          this.getUserInfo();    
          this.loginPanl=false;//登陆栏隐藏
          this.isnav=true;//显示导航条
          this.buttondisabled=false
       
          console.log(admininfo)
          this.isAdmin=admininfo.data.Isadmin
          this.adminInfo=admininfo.data.html
          // if(admininfo.data.html)
          // {
          //   this.isAdmin=true;
          // }
      }
      else
      {      
        this.loginPanl=true
        this.buttondisabled=true
      }
  
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
      CheckTel({ tel: val }).then(res => {
        console.log(res);
        if(this.Report.tel=='')
        {
           this.smsdisabled =true;    
          this.$toast("手机号不能为空");
          return false
        }
        if(!this.phoneValidator(val))
        {
            this.smsdisabled =true;    
           this.$toast("请输入正确的手机号");
           return false
        }
        else
        {
           console.log(this.Report)
           this.smsdisabled =false;    
           return true       
        }       
      });
    }, 1000),
  getUserInfo()
    {
      let id
      let tel
      // let id=  Vue.ls.get(ReportId)    
      // let id=this.VXReportId;
         id =  Vue.ls.get(ReportId) 
         tel = Vue.ls.get(Tel)
      setTimeout(() => {
        getUserInfo({ ReportId: id ,tel:tel}).then(res => {
        // {code: -1, msg: "查无记录"}
         let data=res.data.html
          if(data.code!=-1)
          {
                console.log(res);
            this.submit='修改资料'       
            this.EditCount=3-data.EditCount
            this.Report.A_class=!data.A_class?"0":"1"
            this.Report.A_class_LkhbDate=data.A_class_LkhbDate
            this.Report.B_class=!data.B_class?"0":"1"
            this.Report.C_class=!data.C_class?"0":"1"
            this.Report.C_class_jiechuDate=data.C_class_jiechuDate
            this.Report.C_class_jiechu_type=data.C_class_jiechu_type
            this.Report.CunSheQu=data.CunSheQu
            this.Report.idcard=data.idcard
            this.Report.D_class=!data.D_class?"0":"1"
            this.Report.D_class_LkwhDate=data.D_class_LkwhDate
            this.Report.EditCount=parseInt(data.EditCount)
            this.Report.FJaddress=data.FJsheng+","+data.FJshi+","+data.FJquxian
            this.Report.LS_14_before=!data.LS_14_before?"0":"1"
            this.Report.LS_muDi=data.LS_muDi       
            this.Report.LS_workArea=data.LS_workArea   
            this.Report.LS_workType= data.LS_workType   
            this.Report.ReportId= data.ReportId   
            this.Report.carNum= data.carNum   
            this.Report.fangHao= data.fangHao  
            this.Report.hangBan= data.hangBan  
            this.Report.isOK= !data.isOK?"0":"1"  
            this.Report.jieShudi= data.jieShudi  
            this.Report.juzhuType= data.juzhuType
            this.Report.kaiShidi=  data.kaiShidi
            this.Report.louDong= data.louDong
            this.Report.muDidi= data.muDidi
            this.Report.name= data.name
            this.Report.sex= !data.sex?"0":"1"
            this.Report.tel= data.tel
            this.Report.xiangZhen= data.xiangZhen
            this.Report.xiaoQu=data.xiaoQu
            this.Report.status=data.status
        console.log(this.Report)
          }
      });
      }, 500);      
    },


  



  async sumitreport() 
    {
      this.Report.inputTime = this.$moment().format("YYYY-MM-DD");
      this.Report.tel= Vue.ls.get(Tel);
     
      
              if(Vue.ls.get(ReportId)==null)
            {
              console.log(this.Report)
                   reportAdd(this.Report).then(res => {
                console.log(res);
                          if (res.data.html.ReportId > 0) 
                          {
                            this.$toast.success("提交成功,谢谢您的参与！");
                            let reportId=res.data.html.ReportId
                            this.buttondisabled = true;
                            Vue.ls.set(ReportId, reportId);
                            this.$store.commit('SET_ReportId',reportId)                          
                          }
                        });
            }
              else
              {
                if(this.Report.status==99)
                {
                   this.$toast.fail(`记录已经被审核，不可再修改。`);
                   return false
                }
                console.log(this.Report.status)
                  let result=await reportUpdate(this.Report);
                  console.log(result)
                        if(result.data.html==true)
                {
                    this.$toast.success("记录修改成功");
                    this.buttondisabled=true;            
                }
                else
                {
                    this.$toast.fail(result.data.msg);                    
                }
             } 
            // }    

    //  }
            // else
            // {
            //   this.$toast.fail("必填项不能为空");
            // }
    },
    is_ok(val) {
      this.Report.isOK = val;
    },
    is_14_day(val) {
      this.Report.LS_14_before = val;
    },
    is_B_class(val) {
      if (val) {
        this.Report.B_class = val;
      }
    },
    //C类人员
    c_confirm() {
      this.Report.C_class_jiechuDate = this.currentDate; // moment(this.currentDate).format('YYYY-MM-DD')
      this.Report.C_class_jiechuDateString = this.$moment(
        this.currentDate
      ).format("YYYY-MM-DD");
      this.isshow_C_time = false;
    },
    c_cancel() {
      this.isshow_C_time = false;
    },
    C_class(val) {
      if (val) {
        console.log(`选中了${val}`);
        this.isshow_C_time = true;
        this.isshow_C_timeInput = true;
      }
    },
    isJCWH(val) {
      if (val == 1) {
        this.isshowC_class = true;
        console.log(`111`);
        console.log(this.Report);
      } else {
        this.isshowC_class = false;
        this.isshow_C_timeInput = false;
        this.Report.C_class_jiechu_type = "";
        console.log(this.Report);
      }
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    // A类人员
    lkWHconfirm() {
      this.Report.A_class_LkhbDate = this.currentDate; // moment(this.currentDate).format('YYYY-MM-DD')
      this.Report.A_class_LkhbDateString = this.$moment(
        this.currentDate
      ).format("YYYY-MM-DD");
      this.isshowisLkwhFSTime = false;
      this.isshowisLkwhFSTimeInput = true;
      console.log(this.Report);
      console.log(this.currentDate);
    },
    lkWHcancel() {},

    // D类人员
    lkhbconfirm() {
      // newsinfo.add_time | dateformat('YYYY-MM-DD HH:mm:ss')

      this.Report.D_class_LkwhDate = this.currentDate; //moment(this.currentDate).format('YYYY-MM-DD')
      this.Report.D_class_LkwhDateString = this.$moment(
        this.currentDate
      ).format("YYYY-MM-DD");
      this.isshowLKHBtime = false;
      this.isshowTimeInput = true;
    },
    lkhbcancel() {
      this.isshowLKHBtime = false;
    },
    //    @confirm="lkhbconfirm"
    // @cancel="lkhbcancel"
    LkwhFS(val) {
      if (val == "1") {
        this.isshowisLkwhFSTime = true;
      } else {
        this.isshowisLkwhFSTime = false;
        this.isshowisLkwhFSTimeInput = false;
      }
    },
    isLkhb(val) {
      if (val == "1") {
        this.isshowLKHBtime = true;
      } else {
        this.Report.D_class_LkwhDateString = null;
        this.isshowLKHBtime = false;
        this.isshowTimeInput = false;
      }
      this.Report.D_class = val;
    },
    showWorkArea(val) {
      console.log(val);
      if (val) {
        this.isshowWorkArea = true;
      }
    },
    onConfirm(value) {    

      this.Report.FJsheng = value[0];
      this.Report.FJshi = value[1];
      this.Report.FJquxian = value[2];
      console.log(this.Report);
      this.Report.FJaddress = value.join(",");
      this.showPicker = false;
      // console.log(this.Report)
    },
    inputFJ() {
      this.isFg = true;
    },
    onChangeFJaddress(val) {
      console.log(val);
    },
    init_palceMap() {
      this.columns = placesMap;
      console.log(placesMap);
    },

  //     GetVerificatCodeAdSmssecret,
  // checkCaptchatoken,
    check: _.debounce(function(val) {
      if(/^1\d{10}$/.test(this.Report.tel) && /^\d{4}$/.test(val))
      {
          checkCaptchatoken({ cc_token:this.smschecktokens.cc_token, mobile: this.Report.tel, captcha: val }).then(async res => {
        console.log(res);
        if (res.data.code == -1) {
          this.$toast.fail("验证码无效");
          return;
        }
        if (res.data.result.code == 1000)
      {//短信验证成功/手机号输入正确
          let _admininfo =await checkAdmin({cellphone:this.Report.tel})

          Vue.ls.set(IsAdmin, _admininfo.data.Isadmin, 15 * 24 * 60 * 60 * 1000);  //设置本地缓存 
          Vue.ls.set(Version, _admininfo.data.version, 15 * 24 * 60 * 60 * 1000);  //设置本地版本
          this.myVersion= _admininfo.data.version
          if(_admininfo.data.Isadmin==true)
          {              

            this.adminInfo=_admininfo.data.html
            // Vue.ls.set(AdminInfo, _admininfo.data.html, 15 * 24 * 60 * 60 * 1000);  
            this.isAdmin=true;//如果是管理员，显示管理员栏目

          }
          // if(admininfo.data.Isadmin==true)//登陆的人是管理员
          // {
          //     this.isAdmin=true;
          //     Vue.ls.set(IsAdmin, admininfo.data.Isadmin, 15 * 24 * 60 * 60 * 1000);  //设置本地缓存 
          //     // Vue.ls.set(version, admininfo.data.html, 7 * 24 * 60 * 60 * 1000);  

          //     // version:'1.0'
          //     this.adminInfo= admininfo.data.html
          //     console.log(this.admininfo)
          // }
          //普通用户的情况
          let userinfo=await getUserInfo({tel:this.Report.tel})//获取原来的录入信息
          console.log(userinfo)
          // code: -1, msg: "查无记录"}
          let _data=userinfo.data.html
          // let mymd5=this.$md5(this.Report.tel);
          if(_data.code==-1)
          {
              Vue.ls.set(ReportId, null);
          }                  
            Vue.ls.set(ReportId, _data.ReportId);
            Vue.ls.set(Tel, this.Report.tel);           
            this.$store.commit('SET_ReportId', _data.ReportId)
            this.buttondisabled = false;//禁用按钮
            this.loginPanl = false;//禁用登陆框
            this.isnav=true;//显示导航条   
            Vue.ls.set(IsshowNav, this.isnav);        
            this.$toast.success("验证成功");   
        }
      
      });   
      }
      else
      {
         this.$toast.fail("验证码或手机输出错误");
      }
      // console.log(this.smschecktokens)
    
    }, 3000),
 

    async getSms() {
      console.log("获取短信");

      this.buttonloading = true;
      this.smsloading = "短信发送中...";
      setTimeout(() => {
        GetVerificatCodeAdSmssecret({ mobile: this.Report.tel }).then(res => {
          console.log(res.data._result);
          this.smschecktokens=res.data._result;        
          let data = res.data._result;
          this.smsdisabled = true;
          if (data.rspcod == "success" && data.success == true)
          {        
            this.$refs.nav.go(this.Report.tel);         
            this.$toast.success("短信发送成功请等待!");
            this.buttonloading = false;
            this.buttonType = "primary";
            this.Report.RealTel
            this.smsaction = "短信发送成功";
          } else {
            this.$toast.fail("手机号不正确请重新输入");
            this.buttonloading = false;
            this.smsloading = "";
          }
        });
      }, 2000);

      console.log(this.Report);
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.van-icon
{
  font-size: 40px !important;
}
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
    font-size: 20px;
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
