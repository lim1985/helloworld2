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
   
  
   <!-- <van-panel v-show="isPhone" title="">
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
            label="返邵后住所："
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
         v-if="isok"        
          @click="isupdate"
          type="primary"
          >确认修改</van-button>  
      <!-- <div v-if="isConfirm" class="van-hairline--top">
          <van-field
            @input="check"
            v-model="Report.ck"
            label="验证码"
            placeholder="请填写收到的验证码"
          />
        </div> -->
        <!-- <van-button
          :disabled="buttondisabled"
          @click="updateReport"
          type="primary"
          >修改个人资料</van-button
        > -->
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
      </div>
    </van-panel>
    <!-- <van-row>
      <van-col span="24">
        <div class="footer">
          湖南泛深智能科技有限公司技术支持
        </div>
      </van-col>
    </van-row> -->

    <!-- confirm	
cancel -->
  </div>
</template>

<script>
  import { mapState} from 'vuex'
import Vue from 'vue'
import { Tel ,MD5Tel ,IsEdit,ReportId} from "@/store/mutation-types"//ReportId
// import { navigations } from "@/components/nav";
  // import navigations from '@/components/nav/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
import {
  reportUpdate,
  checkCaptcha,
  sendVerification,
  getUserInfo,
  reportAdd,
  CheckTel
} from "@/api/index";
import placesMap from "@/tools/map";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "update",
    components: {    
    //  navigations
    },
  props: {
    msg: String
  },
  mounted() {
    this.init_palceMap();
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
    this.IdCardRules = [
      { required: true, message: "请输入身份证" },
      { validator: this.IdCardValidator, message: "请正确输入身份证" }
    ];

    return {
      
    
      isshowReport:true,
      buttonType: "info",
      buttonloading: false,
      smsloading: "",
      isshowTimeInput: false,
      is_class_readonly: true,
      smsdisabled: true,
      buttondisabled: false,
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
      isPhone: true,
      text: "",
      sms: "",
      smsaction: "发送短信验证码",
      Report: {
        ck:'',       
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
        isOK: "0",
        EditCount:0,
        EditTime:null
      },
      mytel:'',
      EditCount:0,
      MD5TEL:'',
      isok:true,
    
    };
  },
       computed:{    
      ...mapState({
        VXReportId:state=>state.user.ReportId,        
      })    
    },
  methods: {
      check: _.debounce(function(val) {
      checkCaptcha({ mobile: this.Report.tel, captcha: val }).then(async res => {
        console.log(res);
        if (res.data.code == -1) {
          this.$toast.fail("验证码无效无法操作");
          return;
        }
        if (res.data.result.code == 1000) {
          // this.buttondisabled = false;
          console.log(`收到`)

          let result=await reportUpdate(this.Report);
          console.log(result)
          if(result.data.html==true)
          {
              this.$toast.success("记录修改成功");
              this.$router.push({path:'/report'})
          }
          else
          {
              this.$toast.fail(result.data.msg);
                Vue.ls.set(IsEdit,false);
          }
          
          // let mymd5=this.$md5(this.Report.tel+''+val);
          // Vue.ls.set(MD5Tel, mymd5, 7 * 24 * 60 * 60 * 1000);
          // Vue.ls.set(Tel, this.Report.tel, 7 * 24 * 60 * 60 * 1000);
          // // localStorage
          // // ls.setitem(mymd5,)
          //   console.log(mymd5)
          // //  this.$message.success(res.data.result.msg)
          // this.$toast.success("验证成功");
          // this.isPhone = false;
          // this.isnav=false;
        }
      });
    }, 1000),
    async getSms() {
      console.log("获取短信");


      setTimeout(() => {
        sendVerification({ mobile: this.Report.tel }).then(res => {
          console.log(res.data._result);
          //     buttonloading :false,
          // smsloading:'短信发送中...',
          let data = res.data._result;
           console.log(data)
          // this.smsdisabled = true;
          // if (data.rspcod == "success" && data.success == true) {

        
          //   this.$refs.nav.go(this.Report.tel);         
          //   this.$toast.success("短信发送成功请等待!");
          //   this.buttonloading = false;
          //   this.buttonType = "primary";
          //   this.Report.RealTel
          //   this.smsaction = "短信发送成功";

          // } else {
          //   this.$toast.fail("手机号不正确请重新输入");
          //   this.buttonloading = false;
          //   this.smsloading = "";
          // }
        });
      }, 2000);

      console.log(this.Report);
    },
    isupdate(){
      this.$dialog.confirm({
  title: '修改个人信息',
  message: `确认修改么？您还有${this.EditCount}次修改权限。`
}).then(async() => {

  this.isok=false
  
  // this.getSms();
   let result=await reportUpdate(this.Report);
          console.log(result)
          if(result.data.html==true)
          {
              this.$toast.success("记录修改成功");
              this.$router.push({path:'/report'})
          }
          else
          {
              this.$toast.fail(result.data.msg);
                Vue.ls.set(IsEdit,false);
          }
         
}).catch(() => {
  // on cancel
});
    },
    backReport()
    {
      console.log('回来了')
      this.isshowReport=true
      this.isPhone=true
     },
    auth(){
       this.mytel=Vue.ls.get(Tel)
       this.MD5TEL=Vue.ls.get(MD5Tel)    
      if(this.MD5TEL)
      {
           this.getUserInfo();         
      }
      else
      {
         this.$router.push({path:'/'})  
         return false   
      }
    },
    IdCardValidator(val) {
      return /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(val);
    },
    userNameValidator(val) {
      return /^[\u0391-\uFFE5]{0,4}$/.test(val);
    },
    phoneValidator(val) {
      return /1\d{10}/.test(val);
    },

    getUserInfo()
    {
      let id
      // let id=  Vue.ls.get(ReportId)    
      // let id=this.VXReportId;
      this.VXReportId?id=this.VXReportId:id=Vue.ls.get(ReportId)  
      setTimeout(() => {
        getUserInfo({ ReportId: id }).then(res => {
        console.log(res);
     
        let data=res.data.html
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

        console.log(this.Report)
     
     
      });
      }, 500);      
    },

    checkTels: _.debounce(function(val) {
      //  console.log(val)
      CheckTel({ tel: val }).then(res => {
        console.log(res);
        if (res.data.html) {
          this.$toast.fail("您已经提交成功，请不要重复提交记录");
          this.buttondisabled = true;
          this.smsdisabled = true;
          return false;
        } else {
          this.smsdisabled = false;
        }
      });
    }, 1000),

    updateReport() {
      this.Report.inputTime = this.$moment().format("YYYY-MM-DD");
      reportAdd(this.Report).then(res => {
        console.log(res);
        if (res.data.html.ReportId > 0) {
          this.$toast.success("提交成功,谢谢您的参与！");
          this.buttondisabled = true;
        }
      });
      console.log(this.Report);
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
      //  FJsheng: '',
      //     FJshi: '',
      //     FJquxian:'',

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
  
    //   check:_.debounce(function(val){

    //   checkCaptcha(val).then(res=>{
    // //      console.log(res)
    // //    })
    //   },1000),

    
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-cell__title {
  background-color: #dcdfe6;
  color: #303133;
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
