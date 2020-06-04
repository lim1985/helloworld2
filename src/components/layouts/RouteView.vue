<template>
  <div>
    <van-image
      width="100%"
      height=""
      fit="contain"
      src="http://info.dxzc.gov.cn/Images/fs.png"
    />
    <keep-alive v-if="keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
    <van-row>
      <van-col span="24">
        <div class="footer">
          湖南泛深智能科技有限公司技术支持(公益赞助)
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "RouteView",
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    }
  }
};
</script>
