<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <report msg="大祥区返邵来邵人员登记" /> -->
     <!-- <van-image
      width="100%"
      height=""
      fit="contain"
      src="http://info.dxzc.gov.cn/Images/fs.png"
    /> -->
    
    <router-view />
       <!-- <van-row>
      <van-col span="24">
        <div class="footer">
          湖南泛深智能科技有限公司技术支持(公益赞助)
        </div>
      </van-col>
    </van-row> -->

  </div>
</template>

<script>
// import report from "./components/report.vue";

export default {
  name: "App",
  components: {
    // report
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-size:14px;
}

/* .van-cell__title {
  background-color: #dcdfe6;
  color: #303133;
} */
.footer {
  /* position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height:20px; */
      padding:10px 0px 10px 0px;
  margin-top: 20px;
 font-size:14px;

  color: #2b2b2b;
  background-color: #d7d7d7;
}
</style>
