import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Button from 'vant/lib/button';
import md5 from "js-md5";
import Storage from "vue-ls";
//  Grid, GridItem } from 'vant';
import store from "./store/";
// Vue.use(Grid);
// Vue.use(GridItem);
import VueClipboard from "vue-clipboard2";
import { UserInfo, NodeID } from "@/store/mutation-types";

// 全局注册
// import { Tag } from 'vant';
// import { Swipe, SwipeItem } from 'vant';

// Vue.use(Swipe);
// Vue.use(SwipeItem);
// import { Tabbar, TabbarItem } from 'vant';


import {
  SwipeCell,
  Search,
  Tag,
  DropdownMenu, DropdownItem,
  ImagePreview,
  ActionSheet,
  List,
  Uploader,
  Calendar,
  Tab,
  Tabs,
  Form,
  Cell,
  Dialog,
  Grid,
  GridItem,
  Image,
  Lazyload,
  Swipe,
  SwipeItem,
  Popup,
  Picker,
  Col,
  Row,
  Button,
  Field,
  CellGroup,
  Panel,
  Toast,
  RadioGroup,
  Radio,
  DatetimePicker,
  Icon,
  Overlay,
  NavBar,
  Divider,
  NoticeBar,
  Collapse,
  CollapseItem,
  Loading,
  Card
} from "vant";

import "./assets/iconfont/iconfont.css";
import "vant/lib/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import moment from "moment";
import config from "@/defaultConfig";
router.beforeEach((to, form, next) => {
  const nextRoute = ["Uflist", "UfAdd", "index"]; //需要验证的页面
  let node = Vue.ls.get(NodeID) || false;
  let _UserInfo = Vue.ls.get(UserInfo) || false;

  if (to.name == "Uflogin") {
    if (!node || !_UserInfo) {
      next();
      return;
    }
    console.log(`到这里了`);
    next({ name: "index" });
    return;
  }
  if (nextRoute.indexOf(to.name) >= 0) {
    //判断该页面是否需要登陆
    console.log(!node);
    if (!node || !_UserInfo) {
      //判断登陆状态
      next({ name: "Uflogin" }); //如果未登录，则跳转到登录页
    } else {
      next(); //如果已经登陆，那就可以跳转
    }
  } else {
    //其他的无需登陆的页面不做验证
    next();
  }
});

// name:'Uflogin',
// name:'Uflist',
// name:'UfAdd',
// router.beforeEach((to,from,next)=>{
//   let node=Vue.ls.get(NodeID)||false

//    if(!node){  //取不到登录信息
//     console.log(`9`)
//       return next({name:'Uflogin'})
//    }else{  //取得到登录信息，进行下一步
//      return next();
//    }

// })

// router.beforeEach((to,form,next)=>{

//   let node=Vue.ls.get(NodeID)||false
//   console.log(node)
//   let nextRoute=['/qm','/Uniformlist','/Uniformadd']
//   console.log(to.path)
//   if(nextRoute.indexOf(to.path)>-1)
//   {
//     console.log(`11111`)
//       if(!node)
//       {
//         console.log(node)
//         console.log(`到这里了么？？？`)
//         router.push({name:'Uflogin'})

//       }
//   }
//   if (to.name === 'Uflogin') {
//     if (node) {
//       router.push({ name: 'Uflist' });
//     }
//   }
// console.log(`到这里了？`)
//   next();
// })


Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment; //赋值使用
Vue.prototype.$md5 = md5; //MD5
Vue.prototype.$store = store; //MD5
Vue.use(Lazyload, {
  lazyComponent: true
});

Vue.use(SwipeCell);
Vue.use(Card);
Vue.use(Search);
Vue.use(Tag);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(ImagePreview);
Vue.use(ActionSheet);
Vue.use(List);
Vue.use(Loading);
Vue.use(Calendar);
Vue.use(VueClipboard);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Divider);
Vue.use(NoticeBar);
Vue.use(Cell);
Vue.use(Form);
Vue.use(NavBar);
Vue.use(Overlay);
Vue.use(CellGroup);
Vue.use(Storage, config.storageOptions);
Vue.use(Icon);
Vue.use(GridItem);
Vue.use(Grid);
Vue.use(Dialog);
Vue.use(Image);
Vue.use(router);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(moment);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Picker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Toast);
Vue.use(Button);
Vue.use(Panel);
Vue.use(Col);
Vue.use(CellGroup);
Vue.use(Row);
Vue.use(Field);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.use(Uploader);

new Vue({
  router,
  store,
  mounted () {
    let _UserInfo = Vue.ls.get(UserInfo);
    store.commit("SET_Userinfo", _UserInfo);
  },
  render: h => h(App)
}).$mount("#app");
