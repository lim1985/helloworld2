<template>
  <transition name="van-slide-up">
    <div v-if="show" class="selectCommunity">
      <template>
        <van-search
          v-model="searchValue"
          shape="round"
          background="#4fc08d"
          placeholder="请输入搜索关键词"
        />
        <div v-for="(item,index) in arrlist" :key="index">
          <div>
            <van-row>
              <van-col span="12">
                <h2>{{ item.townstreetsName }}</h2>
              </van-col>
            </van-row>
            <van-row>
              <div
                class="villagediv"
                v-for="(villages,villageindex) in item.villageList"
                :key="villageindex"
              >
                <van-col
                  class="villages"
                  span="7"
                  @click="choice(villages.communityvillageCode,villages.communityvillageName,villages.gridList)"
                >{{ villages.communityvillageName }}</van-col>
              </div>
            </van-row>
          </div>
        </div>
      </template>
      <!-- <van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
      </van-grid>-->
    </div>
  </transition>
</template>

<script>
import Vue from "vue";

// import { mapState} from 'vuex'
// import navigations from '@/components/nav/'
// Vue.filter('dateformat',function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){return moment(dataStr).format(pattern)})
import {
  allxzqh
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
  name: "CommunityList",
  components: {
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
  create () {
    // console.log(Vue.ls.get(IsshowNav));
    // this.isnav = Vue.ls.get(IsshowNav);
  },
  mounted () {
    this.SelectXzqh();
    // this.init_palceMap();
    // this.auth();
  },
  data () {

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
      show: false,
      searchValue: '',
      arrlist: [],
      msg: '登陆后主页'
    };
  },
  methods: {
    choice (code, villageName, gridId) {
      let _arr = []
      console.log(gridId);
      gridId.map(item => {

        _arr.push(item.gridCode)

      })
      console.log(_arr);
      this.show = false;
      let villageObj = {
        gridId: _arr,
        code: code,
        villageName: villageName
      }
      console.log(villageObj)
      this.$emit('iscolse', villageObj);
      // console.log(code);
    },
    go () {
      console.log(`子组件`)
      this.show = true;
    },
    // 辉哥写的函数
    getGroupWithData (data) {
      var index = 0;
      var townstreets = {};
      var communityvillages = {};
      return data.reduce(function (ret, item) {
        // 如果乡不存在，则创建乡
        if (!(item.townstreetsName in townstreets)) {
          let obj = {
            id: index++,
            townstreetsId: item.id,
            townstreetsCode: item.townstreetsCode,
            townstreetsName: item.townstreetsName,
            villageList: []
          };
          townstreets[item.townstreetsName] = obj
          // console.log(townstreets[item.townstreetsName]);
          ret.push(obj);
        }
        let obj = townstreets[item.townstreetsName]
        // 修正 code 为 null 的情况
        if (item.townstreetsCode) {
          obj.townstreetsCode = item.townstreetsCode;
        }
        let vcode = item.communityvillageCode;
        if (vcode) {
          // 如果村不存在，则创建村
          if (!(vcode in communityvillages)) {
            communityvillages[vcode] = {
              communityvillageCode: vcode,
              communityvillageName: item.communityvillageName,
              gridList: []
            };
            obj.villageList.push(communityvillages[vcode])
          }
          var gridList = communityvillages[vcode].gridList;
          // 添加网点数据

          if (item.gridCode) {

            gridList.push({

              gridCode: item.gridCode,
              gridName: item.gridName,
              gridAlias: item.Gridalias
            });
          }
        }
        return ret;
      }, []);
    },
    async SelectXzqh () {
      let xzqh = await allxzqh();
      console.log(xzqh)
      let _xzqh = xzqh.data.result.rows
      this.arrlist = this.getGroupWithData(_xzqh);
      console.log(this.arrlist)
      //  for(let x=0;x<_xzqh.length;x++)
      //  {
      //    if(JSON.stringify(townlist).indexOf(_xzqh[x].townstreetsName)==-1)
      //   {
      //     let townobj=new Object()
      //     let villageobj=new Object()
      //     townobj.id=_xzqh[x].id;
      //     townobj.townstreetsName=_xzqh[x].townstreetsName;
      //     townobj.townstreetsCode=_xzqh[x].townstreetsCode;

      //     // villageobj.villageName=_xzqh[x].communityvillageName
      //     // _villageList.push(villageobj)
      //     townobj.villageList=_villageList;
      //     townlist.push(townobj)
      //   }
      //     for(let y=0;y<townlist.length;y++)
      //     {

      //       if(_xzqh[x].townstreetsName==townlist[y].townstreetsName)
      //       {
      //         _villageList.push(_xzqh[x].communityvillageName)
      //       }
      //     }
      //  }


      //  console.log(townlist);
      //  let xzqhlist=  xzqh.data.result.rows.map(item=>{


      //       if(JSON.stringify(townlist).indexOf(item.townstreetsName)==-1)
      //       {
      //         let townobj=new Object()
      //         townobj.townstreetsName=item.townstreetsName;
      //         townobj.townstreetsCode=item.townstreetsCode;
      //         townlist.push(townobj)
      //       }
      //     return townlist
      // let obj=new Object();
      // obj.id=item.id;
      // obj.townstreetsName=item.townstreetsName;
      // obj.townstreetsCode=item.townstreetsCode;

      // if( JSON.stringify(obj.townstreetsCode).indexOf(item.townstreetsCode)>0 && JSON.stringify(_villageList).indexOf(item.communityvillageCode)==-1)
      // {
      //   _villageList.push(item.communityvillageCode)
      //   _villageList.push(item.communityvillageName)
      // }
      // obj.villageList=_villageList;
      // return obj;
      // {
      //   id:1000,
      //   townstreetsName:'',
      //   townstreetsCode:'',
      //   villageList:[
      //     {
      //       communityvillageCode: "430503202101",
      //       communityvillageName: "蔡锷村",
      //       gridList:[
      //         {
      //         gridCode: "430503202101001",
      //         gridName: "蔡锷村1网格"
      //         }
      //         ...                    
      //       ]
      //     }
      //     ...
      //   ]
      // }
      // })
      // console.log(xzqh.data.rows)
      // console.log(xzqhlist)
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.villagediv {
  margin-inline-start: 1.8em;
  margin-inline-end: 0em;
}
.villages {
  border-radius: 5px;
  padding: 3px;
  margin: 4px;
  border: 1px solid #ccc;
}
h2 {
  text-align: left;
  padding: 0px 20px;
}
.selectCommunity {
  position: absolute;
  /* position: absolute; */
  top: 0;
  background: #fff;
  width: 100%;
}
</style>
