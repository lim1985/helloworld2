<template>

 <div>
   <!-- <header class="header-appClient">

                <span class="left-1 app-logo-border">
                    <img src="https://img.rednet.cn/2020/01-10/1578625555584-mchx2l3lckggo.png">
                </span>
                <span class="left-2 footer-left-2">大祥融媒</span>
                <a class="right-1" href="https://daxiang-wap.rednet.cn/app/"></a>
        </header> -->
    <!-- <van-image
      width="100%"
      height=""
      fit="contain"
      src="http://info.dxzc.gov.cn/Images/fs.png"
    /> -->
    <!-- <keep-alive>
    <router-view></router-view>
</keep-alive> -->
    <keep-alive v-if="keepAlive">
    <router-view />
  </keep-alive>
  <router-view v-else />
    
 </div>

</template>

<script>
export default {
  name: "RouteView",
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    }
  },
 
};
</script>
