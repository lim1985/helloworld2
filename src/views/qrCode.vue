<template>
  <div>
    <van-row>
      <van-col span="12" offset="0">
        <van-nav-bar
          left-text="返回首页"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-col>
    </van-row>
    <div class="qrCode">
      <!-- <van-icon name="arrow-left" /> -->
      <div>请微信扫码进行提交您的数据</div>
      <div>
        <h3>当前卡口：{{ kako_address }}</h3>
      </div>
      <div>
        <h3>人员类别：{{ personTypeTitle }}</h3>
      </div>
      <div id="qrcode" class="qrCode-div"></div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Vue from "vue";
import { Tel, Kako_address } from "@/store/mutation-types";

export default {
  name: "qrCode",
  data() {
    return {
      personTypeTitle: "",
      qrCodeDownLoadFlag: false,
      kako_address: ""
    };
  },
  created() {},
  mounted() {
    if (this.auth()) {
      this.initQR();
    }
  },
  methods: {
    onClickLeft() {
      let vm = this;
      vm.$router.push({ path: "/" });
    },
    auth() {
      let tel = Vue.ls.get(Tel);
      let kako_address = Vue.ls.get(Kako_address);
      this.kako_address = kako_address;

      if (!tel) {
        this.$router.push({
          path: "/#/report",
          query: { redirect: this.$route.fullPath }
        });
        return false;
      }
      return true;
    },
    initQR() {
      let vm = this;
      // query:
      // jdCode:80
      // kokaID:5
      // sqCode:101
      // userID:1204
      console.log(vm.$route.query);
      let params = vm.$route.query;

      params.personType == 0
        ? (this.personTypeTitle = "本地居民")
        : (this.personTypeTitle = "返邵来邵人员");
      // let tel=Vue.ls.get(Tel)
      vm.qrCodeString =
        window.location.protocol +
        "//" +
        window.location.host +
        "/report/#/report?kokaID=" +
        params.kokaID +
        "&personType=" +
        params.personType;
      console.info("qrCodeString", vm.qrCodeString);
      vm.qrcode();
    },
    // goshenhe()
    // {
    //   this.$router.push({path:'/user/userlist'})
    // },
    qrcode() {
      this.qrcode = new QRCode("qrcode", {
        width: 222,
        height: 222,
        text: this.qrCodeString, // 二维码地址
        colorDark: "#000",
        colorLight: "#fff"
      });
    }
  }
};
</script>
<style lang="less">
.qrCode {
  display: flex;
  align-items: center;
  flex-direction: column;
  .qrCode-div {
    margin: auto;
  }
  .button {
    width: 222px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .departmentName {
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
