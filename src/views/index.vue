<template>
  <div class="hello">
    <LimGrid></LimGrid>
      {{msg}}
  </div>
</template>

<script>
import Vue from "vue";
import { Tel, MD5Tel, ReportId, IsshowNav } from "@/store/mutation-types";

// import { mapState} from 'vuex'
import LimGrid from '@/components/Index/grid/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
import {
  // getUserInfo,
  // sendVerification,
  // checkCaptcha,
  // reportAdd,
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
  components: {
    LimGrid
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
  create() {
    // console.log(Vue.ls.get(IsshowNav));
    // this.isnav = Vue.ls.get(IsshowNav);
  },
  mounted() {
    // this.init_palceMap();
    // this.auth();
  },
  data() {
  
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')

    // this.phoneRules = [
    //   { required: true, message: "请输入手机号" },
    //   // { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
    //   { validator: this.phoneValidator, message: "手机号格式错误" }
    // ];
    // this.userNameRules = [
    //   { required: true, message: "请输入姓名" },
    //   { validator: this.userNameValidator, message: "姓名只能输入中文" }
    // ];
    // this.IdCardRules = [
    //   { required: true, message: "请输入身份证" },
    //   { validator: this.IdCardValidator, message: "请正确输入身份证" }
    // ];

    return {
        msg:'登陆后主页'
    };
  },
  methods: {
   
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
