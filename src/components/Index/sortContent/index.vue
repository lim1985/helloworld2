<template>
  <div>
    拖动标题项可以排序
    <!-- <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col" style="width: 10%;">序号</th>

          <th scope="col" style="width: 70%;">标题</th>
          <th scope="col" style="width: 20%;">作者</th>
        </tr>
    </thead>-->

    <!-- <vuedraggable
        :component-data="getComponentData()"
        handle=".title"
        class="wrapper"
        v-model="list"
        tag="tbody"
      >
        <tr v-for="(item,index) in list" :key="item.ID">
          <van-swipe-cell :before-close="beforeClose">
        
            <template #right>
              <van-button square type="danger" text="删除" />
            </template>
            <td scope="row">{{ index+1 }}</td>

            <td class="title">{{ item.title }}</td>

            <td>{{ item.firstAuth }}</td>
          </van-swipe-cell>
        </tr>

    
    </vuedraggable>-->
    <!-- </table> -->
    <van-row class="titlethRow">
      <ul class="titleth">
        <van-col span="2">
          <li>序号</li>
        </van-col>
        <van-col span="18">
          <li>标题</li>
        </van-col>
        <van-col span="4">
          <li>作者</li>
        </van-col>
      </ul>
    </van-row>
    <vuedraggable
      :component-data="getComponentData()"
      handle=".title"
      class="wrapper"
      v-model="list"
      tag="div"
    >
      <div style="float: left;
    width: 98%;" v-for="(item,index) in list" :key="item.ID">
        <van-row class="listrow">
          <van-swipe-cell class="myswipeCell" :name="index" :before-close="beforeClose">
            <!-- <template #left>
              <van-button square type="primary" text="选择" />
            </template>-->
            <template #right>
              <van-button class="actionButton" square type="danger" text="删除" />
            </template>
            <van-col class="xuhao mycol" span="2">
              <div scope="row">{{ index+1 }}</div>
            </van-col>
            <van-col class="mycol" span="18">
              <div class="title">{{ item.title }}</div>
            </van-col>

            <van-col class="mycol" span="4">
              <div>{{ item.firstAuth }}</div>
            </van-col>
          </van-swipe-cell>
        </van-row>
      </div>
    </vuedraggable>
    <van-button v-if="showButton" @click="copytoClipboard" type="info">点击复制上述内容</van-button>
    <h3 v-if="!showButton">当前暂无记录</h3>
    <!-- <van-swipe-cell :before-close="beforeClose">
     
      <van-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>-->
    <!-- <a-modal
      :title="title"
      :width="600"
      v-model="Sortvisible"
      @ok="handleUpdataOk"       
    > 
      <span><h3>温馨提示：点击拖动即可完成排序。</h3></span>
      <a-spin :spinning="confirmLoading">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col" style="width: 10%;">序号</th>
          
              <th scope="col" style="width: 25%;">姓名</th>
              <th scope="col" style="width: 50%;">职务</th>
            </tr>
          </thead>
          <vuedraggable :component-data="getComponentData()" class="wrapper" v-model="list" tag="tbody">
            <tr v-for="(item,index) in list" :key="item.ID">
              <td scope="row">{{ index+1 }}</td>
         
              <td>{{ item.UserName }}</td>
              <td>{{ item.UJOB }}</td>
            </tr>
          </vuedraggable>
        </table>
      </a-spin>
 
    </a-modal>-->
    <div class="lodingDiv">
      <van-overlay :show="confirmLoading">
        <div class="wrapper" @click.stop>
          <div class="block">
            <div style="height: 120px;
    width: 120px;
    margin-top: 35px;">
              <van-loading color="#1989fa" size="24px" vertical>加载中...</van-loading>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>
<script>
import vuedraggable from 'vuedraggable';
import {
  // SortUserPhoneList,
  GettodayContentList
} from "@/api/index";
import { setTimeout } from 'timers';
// import { truncate } from 'fs';

export default {
  name: 'Sortcontent',
  components: { vuedraggable },
  props: {
    //  UserList: {
    //   type: Array,
    //   default: () => [] // es6的箭头函数
    // },
  },
  data () {
    return {
      showButton: false,
      disabled: false,
      list: [],
      title: '排序',
      Sortvisible: false,
      confirmLoading: false,
      param: []
    }
  },
  updated () {

    let arr = this.list.map((item, index, arr) => {
      // let _length=arr.length;        
      console.log(index)
      console.log(arr)
      return { title: item.title, firstAuth: item.firstAuth, link: item.link }
    })

    this.param = arr;
    // console.log(this.param);
  },
  mounted () {
    console.log(this.$route.params.status);
    this.getToday99List(this.$route.params.status);
  },
  create () {

    // this.list=this.UserList;

  },
  methods: {
    beforeClose ({ position, instance, name }) {

      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            this.list.splice(name, 1);
            this.param.splice(name, 1);

            instance.close();
          });
          break;
      }
    },
    copytoClipboard () {
      console.log(this.param)
      let text = ''
      this.param.forEach((item, index) => {
        text += `  ${index + 1}.${item.title}-${item.link}|                 `
      });
      console.log(text)
      let that = this;
      that.$copyText(text).then(
        function (e) {
          that.$toast.success("复制到剪切板成功！");
          console.log(e);
        },
        function (e) {
          alert("无法复制");
          console.log(e);
        }
      );
    },
    async getToday99List (_status) {
      this.confirmLoading = true
      let todayList = await GettodayContentList({ status: _status });
      if (todayList.status == 200) {
        this.confirmLoading = false
        if (todayList.data.result.length > 0) {
          this.showButton = true
          this.list = todayList.data.result.map(v => {
            return { title: v.titles, firstAuth: v.TitleIntact, link: v.link }
          })
        }


      }
      console.log(todayList)
    },
    handleChange () {

      console.log('changed');
      console.log(this.list);
    },
    inputChanged (value) {

      this.activeNames = value;
      console.log(this.activeNames);
    },
    getComponentData () {
      return {
        //  options:{draggable: '.title'},
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        attrs: {
          wrap: true
        },
        props: {
          value: this.activeNames
        }
      };
    },
    //  async handleUpdataOk()
    //   {
    //       console.log(this.param);
    //       this.confirmLoading=true;
    //       SortUserPhoneList(this.param).then(res=>{
    //           console.log(res)
    //           if(res.res=='success')
    //           {
    //             setTimeout(() => {
    //                this.$message.success('排序完成')
    //                this.confirmLoading=false;
    //                this.Sortvisible=false;
    //                this.$emit('ok')
    //             }, 1000);
    //           }
    //      })

    //   },
    show (val) {
      console.log(`过来了`)
      console.log(val)
      this.list = val;
      this.Sortvisible = true;
    }
  }
}
</script>>
<style scoped>
.mycol {
  padding: 2px 0px;
}
.myswipeCell {
  line-height: 20px;
  border-bottom: 1px #ebebeb solid;
  padding-inline-start: 5px;
}
.actionButton {
  margin-top: -0.4em;
}
.xuhao {
  line-height: 30px;
  font-weight: 600;
}
.listrow {
  padding-top: 1em;
}
.titlethRow {
  padding: 1em;
  background: #1890ff;
}
.titleth {
  text-align: center;
  color: #fff;
}
.title {
  text-align: left;
}
/* .table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}
table {
  border-collapse: collapse;
}
.table .thead-dark th {
  color: #fff;
  background-color: #1890ff;
  border-color: #fff;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

th {
  text-align: inherit;
} */
</style>