// import Vue from 'vue'
import axios from "axios";
// var root =process.env.API_ROOT
// import store from '@/store'
// import VueAxios from 'vue-axios'
// import notification from 'ant-design-vue/es/notification'
// import { ACCESS_TOKEN } from "@/store/mutation-types"

// 创建 axios 实例
// axios.defaults.withCredentials=true;
const service = axios.create({
  baseURL: "https://wx.daxiang.gov.cn/api/", // https://wx.daxiang.gov.cn/api/ api base_url http://127.0.0.1:3001/api //http://api.dxzc.gov.cn:3000/api"
  timeout: 60000 // 请求超时时间
});
//https://wx.daxiang.gov.cn/api/
//   const err = (error) => {
//     if (error.response) {
//       if (error.status === 403) {
//         notification.error({ message: '拒绝访问', description: '无权限，拒绝访问' })
//       }
//       if (error.status === 401) {
//         notification.error({ message: '未授权', description: '授权验证失败' })
//         store.dispatch('Logout').then(() => {
//           location.reload()
//         })
//       }
//     }
//     return Promise.reject(error)
//   };

// request 拦截器
//   service.interceptors.request.use(config => {
//     // const token = Vue.ls.get(ACCESS_TOKEN)

// //     if (token) {
// //    // console.log('本地有token')
// //    // console.log(token)
// //    config.headers.common['Authorization'] = 'Bearer ' + token;
// //       //console.log(config) // 让每个请求携带自定义 token 请根据实际情况自行修改
// //     }
//     return config
//   }, err)

// response 拦截器
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
//   service.interceptors.response.use((response) => {
//    // console.log(response.data)
//       return response.data
//     }, err)

//   const installer = {
//     vm: {},
//     install (Vue, router = {}) {
//       Vue.use(VueAxios, router, service)
//     }
//   }

export {
  // installer as VueAxios,
  service as axios
};
