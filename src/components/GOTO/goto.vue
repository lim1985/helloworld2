<template>
  <div>
    <!-- <div @click="goHome"  class="topArrow">
      返回首页
    
    </div> -->
  <!-- <router-link to="/GETDXRM">go</router-link> -->


  </div>
</template>

<script>

import Vue from 'vue'
import { fromUrl } from "@/store/mutation-types"//MD5Tel AdminInfo
export default {  
  name: "checkLsUserinfo",
  props: {
    msg: String,
    show:{
        type: Boolean,
        default:false
    },   
    userInfo:Object,
    showAdmin:{
      type: Boolean,
      default:false
  },   
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
    //   $route(to,from)
    // {
    //   console.log(to)
    //   console.log(from)
      
    // },
},

  created() {
   
  },
  mounted() {     
       console.log(this.$route)
       console.log(`跳转了`)
       console.log(this.$route.fullPath)
         let urlmd5=this.$md5(this.$route.fullPath);
        console.log(urlmd5)
         Vue.ls.set(fromUrl, this.$route.fullPath);
        // $route.push('/GETDXRM')
        // window.location.href="/#/goto/GETDXRM"
      this.$router.push({name: 'GETDXRM',query:{secretKey:urlmd5}});
  },
  data() {
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
   return {
  
    };
  },
  methods: {

  
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-doc-demo-block{
    
    left: 10px;
    padding:0px 10px 0px 8px;
    border-bottom: 1px solid #ebedf0;
}
.van-doc-demo-block__title
{
  font-size:16px !important;
}
.van-panel__content{
  text-align:left;
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
  .telclass{
    padding: 5px;
    color: #2b2b2b;
    line-height: 40px;
    font-size: 16px;
    margin-left:20px;
  }

.checkInput{
      padding: 20px 0 20px 0;
}

.topArrow{
  padding: 5px 8px;
    font-size: 18px;
    text-align: left;
    /* float: left; */
    margin-top: 8px;
    /* margin-left: 40px; */
}
.van-cell__title {
  background-color: #409EFF;
  color: #fff;
  padding:10px;
  font-size:16px;
  text-align:left;
}
.van-field{
  font-size:28px;
  color:#2b2b2b;
}
/* .van-field__body{
    background-color: beige !important;
    line-height: 40px !important;
} */
.mytitle{
   
    color: #fff;
    padding: 8px;
    font-size:12px;
    text-align: left;
}
.van-cell {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 12px;
    overflow: hidden;
    color:#2b2b2b;
    font-size: 16px;
 
    background-color: #fff;
  
    text-align: left;
    line-height: 28px ;
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
