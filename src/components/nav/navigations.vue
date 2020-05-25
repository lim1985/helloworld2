<template>
  <div class="hello">
  
  <!-- {{ msg}}
  {{ show}} -->
    <div id="qrcode" class="qrCode-div"></div>
     <!-- v-show="show" status=""-->
  <!-- <van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />

  </div>
</van-overlay> -->
  <div v-if="isAdmin" >
    <van-row>
        <van-col span="5"  offset="9">
           <van-button plain type="primary" style="margin-top: 7px;" v-if="IsAddBtn"  @click="AddKako" size="small">新增卡口</van-button>
       </van-col>
           <van-col span="9"  offset="0">
           <van-button plain type="info" style="margin-top: 7px;" v-if="IsAddBtn"  @click="addnewPerson" size="small">邀请同事成为审核员</van-button>
       </van-col>
         <!-- <van-col span="6"  offset="6">
           <van-button plain type="info" hairline style="margin-top: 7px;" v-if="IsAddBtn"  @click="AddKako" size="small">邀请小伙伴</van-button>
       </van-col> -->
     </van-row>
<!-- <van-button plain hairline type="info">细边框按钮</van-button> -->
      <van-panel v-if="kakoAdd_panl" title="选择街道、社区填写卡口名，如：金鹏佳苑卡点" >
      <div>
        <van-form validate-first @submit="submitKako" >
        <!-- // @failed="onFailed" -->
          <van-row>
            <van-col span="24">
          <div>
            <van-field
                readonly
                clickable
                label="当前卡口位："
                required
                :value="SQ_value"
                v-model="Report.SQaddress"
                placeholder="请选择街道/社区或村"
                @click="showPickerSq = true"
                :rules="cityRules"
              />
              <!-- :rules="SQ_Rules" -->
              <van-popup v-model="showPickerSq" position="bottom">
                <van-picker
                  show-toolbar           
                  :columns="kak_List"
                  @change="showpicker"
                  @cancel="showPickerSq = false"
                  @confirm="onConfirmSq"
                />
              </van-popup>
              </div>
          </van-col>
      
      
      </van-row>
        <van-row>
        <van-col span="16">
          <div>
            <van-field      
               
                clickable
                label="新卡口名称："
                required        
                v-model="Report.addkkname"
                placeholder="请输入卡口名称"
                :rules="kakoNameRules"
              />
            </div>
      </van-col>
        <van-col span="6"  offset="2">
    <van-button plain type="primary" v-if="IsBtnshow" style="margin-top: 7px;" size="small">提交添加</van-button>
  </van-col>
       </van-row>
</van-form>


      </div>
    </van-panel>

       <van-panel :title="`审核员：${AdminUserInfo.DepartmentName}-${AdminUserInfo['U.UserName']}`" >
   
      <van-form validate-first @submit="submitKako" >
        <!-- // @failed="onFailed" -->
    
   
      <van-row>
  <van-col span="24">
    <div>
       <van-field
          readonly
          clickable
          label="当前卡口位："
          required
          :value="SQ_value"
          v-model="Report.SQaddress"
          placeholder="请选择街道/社区或村"
          @click="showPickerSq = true"
          :rules="cityRules"
        />
         <!-- :rules="SQ_Rules" -->
        <van-popup v-model="showPickerSq" position="bottom">
          <van-picker
            show-toolbar           
            :columns="kak_List"
            @change="showpicker"
            @cancel="showPickerSq = false"
            @confirm="onConfirmSq"
          />
        </van-popup>
         </div>
    </van-col>
 
 
</van-row>
   <van-row>
  <!-- <van-col span="16">
     <div>
      <van-field      
          v-if="isshowKako"   
          clickable
          label="卡口名称："
          required        
          v-model="Report.kkname"
          placeholder="请输入卡口名称"
          :rules="kakoNameRules"
        />
      </div>
      </van-col> -->
        <!-- <van-col span="6"  offset="2">
    <van-button plain type="primary" v-if="IsBtnshow" style="margin-top: 7px;" size="small">提交添加</van-button>
  </van-col> -->
       </van-row>
</van-form>
     <van-row>
  <van-col span="18">
    <div>
       <van-field
           v-if="isshowKD"  
          readonly
          clickable
          label="卡口名称："
          required
          :value="kako_value"
          v-model="kako_title"
          placeholder="请选择卡口"
          @click="showPickerkako = true"        
        />
      
        <van-popup v-model="showPickerkako" position="bottom">
          <van-picker
            show-toolbar           
            :columns="KD_List"
            @change="change_KD"
            @cancel="cancel_KD = false"
            @confirm="onConfirm_KD"
          />
        </van-popup>
         </div>
    </van-col> 
</van-row>

      <div>
 <van-grid clickable :column-num="2">
  <van-grid-item icon="qr" @click="showchooicePersonType()" text="获取卡点二维码" />
  <van-grid-item icon="comment-o" @click="shenheUser()" text="审核上报信息" />
   <van-grid-item icon="records" @click="addRecords()" text="手工添加/修改记录" />
   <!-- <van-icon name="newspaper-o" /> <van-icon name="records" />-->
  <van-grid-item icon="bar-chart-o" @click="dateSummary()" text="数据汇总" />
  <!-- <van-grid-item icon="comment-o" @click="sqKD()" text="申请卡点" />info="0" 
    <van-grid-item icon="comment-o" @click="SHList()"  text="审核列表" /> <van-icon name="bar-chart-o" /> -->
  <!-- <van-grid-item v-show="isupdate" icon="records" @click="toUpdate()" text="修改登记信息" /> -->
  </van-grid>
      </div>
    </van-panel>
    </div>
   <van-panel v-show="isupdate" :title="`个人信息：${personInfo.name==undefined?'暂未录入数据':personInfo.personTitle+'-'+personInfo.name+'-'+personInfo.CunSheQu}`" >
      <div>
 <van-grid clickable :column-num="2">
  <!-- <van-grid-item icon="qr" @click="goQr()" text="生成二维码供审核人员扫码" /> -->
  <van-grid-item icon="friends" class="Lim_ICon" style="color:#F56C6C;"  @click="showReport(1)" text="返邵来邵人员（登记）" />
  <van-grid-item icon="manager" class="Lim_ICon" style="color:#67C23A;" @click="showReport(2)" text="本地常住居民（登记）" />
  <!-- <van-icon name="friends" /> -->
  <!-- <van-icon name="manager" /> -->
  <!-- style="color:#F56C6C;font-size:100px !important;" -->
  <!-- style="color:#67C23A;font-size:40px !important;" -->
  <!-- <van-grid-item v-show="isupdate" icon="records" @click="toUpdate()" text="修改登记信息" /> -->
</van-grid>
      </div>
    </van-panel>

<van-dialog v-model="showchooicePersonTypePanle" @confirm="goKDQr" title="标题" show-cancel-button>
 
   <div class="van-hairline--top">
          <span class="van-cell" style="text-align: left;"
            >请选择人员类型为返邵来邵人员或者为本地居民</span>
          <van-field name="radio" label="">
            <van-radio-group
              @change="chooicePersonType"
              v-model="personType"
              direction="horizontal"
              slot="input"
            >
              <van-radio name="1" checked-color="#07c160">返邵来邵人员</van-radio>
              <van-radio name="0" checked-color="#07c160">本地居民</van-radio>
            </van-radio-group>
          </van-field>
        </div>

 
</van-dialog>

  </div>
</template>

<script>
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
import Vue from 'vue'
import {
  kakoAdd,
  kakoselect
} from "@/api/index";
// import placesMap from "@/tools/map";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
// import QRCode from 'qrcodejs2' IsEdit ReportId
    import { Kako_address} from "@/store/mutation-types"
  // import Vue from 'vue'
 import { mapState} from 'vuex'
export default {
  
  name: "Reportnav",
  props: {
    msg: String,
    personInfo:{
       type:Object
    },
    show:{
        type: Boolean,
        default:false
    },   
    AdminUserInfo:
    {
      type:Object
    },
    showAdmin:{
      type: Boolean,
      default:false
  },   
  kak_List:{
    type:Array
  }
  },
 
      computed:{    
      ...mapState({
        ReportId:state=>state.user.ReportId,        
      })    ,
       isupdate() {
          console.log(this.show)         
                return  this.show
            },
       isAdmin(){
              return this.showAdmin
            },
      AdminInfo(){               
              return this.AdminUserInfo
            }
         
    }, 
watch: {
            //用户导航栏
            isnav(newValue, oldValue) {      
            console.log(oldValue)
                return newValue;
            },    
            //管理员导航栏
            isAdmin(newValue, oldValue) {      
            console.log(oldValue)
                return newValue;
            },    
            adminInfo(newValue, oldValue) {      
            console.log(newValue)
            console.log(oldValue)
                return newValue;
            },   
},

  created() {

      //  let _ReportId=this.ReportId
      //  console.log(_ReportId)//ReportId
      //  let _IsEdit=Vue.ls.get(IsEdit)
      //  console.log(_ReportId)
      //  this.isAdd=_ReportId==''?false:true
      //  this.isEdit=_IsEdit
  },
  mounted() {     
      
  },
  
  data() {
    this.kakoNameRules=[
       { required: true, message: "卡口地址不可为空" },
    ];
      this.cityRules=[
       { required: true, message: "请选择卡口地址" },
    ];
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
   return {
        showchooicePersonTypePanle:false,
        isshowKD:false,
        kako_value:'',
        kakoAdd_panl:false,
        showPickerkako:false,
        KD_List:[],
        kako_title:'',
        kako_Id:'',
        IsAddBtn:true,
        IsBtnshow:false,
         SQ_value:'',
         isshowKako:false,
         showPickerSq:false,
         IsEdit:true,
         isAdd:false,
         qrCodeDownLoadFlag: false,
         qrCodeString: 'https://www.baidu.com',
         userInfo: {} ,
         admininfo:'',
         Report:{
           addkkname:'',
           kkname:'',
           SQaddress:'',
          JDSQ:{
         areaCode:430503, 
          jdCode:80,
          sqCode:101,
          AdminId:0
            }   
          },
          personType:'',
          Qr:{
            sqCode:'',
            jdCode:'',
            kokaID:'',
            userID:''
          }
    };
  },
//当前大祥区登记总数1000人（其中上：返邵来邵人员500人，本地居民500人），卡口50个，其中，重点跟踪的A类0人，B类20人，C类10人，D类13人，已取消观察0人。
//显示14个乡镇办的链接，点进云看详细
// 注释：A，B，C，D类
  methods: {
    dateSummary(){
// this.$toast(`功能即将开放`)
    let vm=this      
    const toast = vm.$toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '倒计时 2 秒,数据生成中...'
    });
    let second = 2;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.message = `倒计时 ${second} 秒,数据生成中...`;
      } else {
        clearInterval(timer);
          vm.$router.push({path:'/datacount'})
        // 手动清除 Toast
        toast.clear();
      }
    }, 1000);

    },
    chooicePersonType(val){
    
      this.personType=val;
      console.log(this.personType);    
    },
    addRecords(){
        let vm=this
        vm.$router.push({path:'/addUser'})       
    },
      change_KD(){},
      cancel_KD(){},
      onConfirm_KD(val){
       Vue.ls.remove(Kako_address)
        console.log(val)
        this.kako_title=val.text
        this.kako_Id=val.kakID
        this.showPickerkako=false
        this.isshowKako=false
        this.Qr={
            sqCode:this.Report.JDSQ.sqCode,
            jdCode:this.Report.JDSQ.jdCode,
            kokaID:val.kakID,
            userID:this.Report.JDSQ.AdminId
        }
        this.Report.kkname=val.text
        Vue.ls.set(Kako_address,`${this.Report.SQaddress+'-'+this.Report.kkname}` , 15 * 24 * 60 * 60 * 1000);  //设置本地缓存       
        // this.isshowKD=false
        // this.kako_value
      },


    submitKako(){
  
        this.IsBtnshow=false;
        this.isshowKako=false;
      
        console.log(this.Report)
        kakoAdd(this.Report).then(res=>{
            this.Report.kkname=''
            let result=res.data.html
            if(result.code==1000)
            {
              this.$toast.success(`添加卡点成功`)
              this.kakoAdd_panl=false                     
              this.Report.addkkname=''
            }
          console.log(res)
        })
    },
    addnewPerson(){
        // this.$toast(``)
    },
    AddKako()
    {   
       
       this.kakoAdd_panl =!this.kakoAdd_panl;
        this.isshowKako=true;
        this.IsBtnshow=true;   
        this.isshowKD=false
        // ?this.isshowKD=false:this.isshowKD=true;             
    },
    getAdminId(){     
        this.Report.JDSQ.AdminId=this.AdminUserInfo['U.ID']
    },
    onConfirmSq(sq_value) {    
        console.log(sq_value)
        this.getAdminId();
        this.showPickerSq=false
        this.Report.SQaddress=sq_value.join(",")  
        console.log(this.Report)  
      
        kakoselect(this.Report).then(res=>{
          console.log(res);
          if(res.data.html.res.length==0)
          {
              this.$toast(`该社区下暂无卡点，请新增卡点`)
              this.KD_List=[]
              this.isshowKD=false
          }
          else
          {
            this.KD_List=res.data.html.res.map(x=>{
              return {text:x.kk_name,kakID:x.kakID}
            })
            console.log(this.KD_List)
              this.isshowKako=false
              this.isshowKD=true;
          }
        })
    },
      showpicker(picker, value, index) {
        // console.log(value[0])
        // console.log(value[1])
        // console.log(value[2])
        // console.log(this.Report.JDSQ)
        this.kak_List[0].children.forEach((v,index,array) => {
          
            if(value[1]==v.text)
            {
              this.Report.JDSQ.jdCode=array[index].code             
            }          
             v.children.forEach((c_v,index,array) => {
            
                if(value[2]==c_v.text)
                {
                 this.Report.JDSQ.sqCode=array[index].code
                }
             });
        });

      

    console.log(this.Report)
      
      console.log((`当前值：${value}, 当前索引：${index}`));
    
    },
    shenheUser(){        
           this.$emit('check')  
               },
        SHList(){
            this.$toast("功能暂未开放");
        },
        sqKD(){
            this.$toast("功能暂未开放");
        },
        showchooicePersonType()
        {
            let vm=this
        if(vm.Qr.sqCode=='' || vm.Qr.jdCode==''|| vm.Qr.kokaID=='')
          {
            vm.$toast.fail(`请先选择街道社区和卡点名后再生成二维码`)
            return false
          }
          this.showchooicePersonTypePanle=true;
        },
        goKDQr(){
          let vm=this
            setTimeout(() => {
        vm.$router.push({path:'/qr',query:{kokaID:vm.Qr.kokaID,personType:this.personType}})
      }, 1000);
        
        console.log(vm.Qr)
           
        },
    goQr()
      {
         let vm=this
          vm.$router.push({path:'/qr'})
      },
    showReport(val){
       this.$emit('ok',val)        
    },
  
    toUpdate()
    {
       let vm=this
          vm.$router.push({path:'/update'})
    },

    // getUserInfo() {
    //    let vm = this      
    //        vm.qrCodeString = window.location.protocol + '//' +  window.location.host + '/user/userregister?departmentId=' 
    //       console.info('qrCodeString', vm.qrCodeString)
    //       vm.qrcode()
    //       },
    // qrcode(){
    //    let qrcode = new QRCode('qrcode', {
    //       width: 222,
    //       height: 222,
    //       text: this.qrCodeString, // 二维码地址
    //       colorDark : "#000",
    //       colorLight : "#fff",
    //     })      
    //   },
    go(data){
      console.log(data)
    },
      // getQr()
      // {
      //   console.log(this.tel)
      // }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-grid-item__icon{
  font-size:48px;
}
.van-cell__title {
  background-color: #409EFF;
  color: #fff;
  padding:10px;
  font-size:16px;
  text-align:left;
}

.van-grid-item__text
{
  font-size: 16px !important;
}
 .qrCode-div{
        margin: auto;
      }
       .button{
        width: 222px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }  
  .qrCode{
      display: flex;
      align-items: center;
      flex-direction: column;    
       
    }
/* .van-cell__title {
  background-color: #dcdfe6;
  color: #303133;
} */
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
