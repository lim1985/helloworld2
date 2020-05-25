<template>
  <!-- <div v-if="isRealUrl" class="hello"> -->
 <!-- <img alt="Vue logo" width="100%" src="../assets/bg.jpg"> -->




 <div style="padding:5px 5px 5px 5px">
   <van-nav-bar 
  left-text="返回" 
  title="稿件上传"
  left-arrow
  @click-left="onClickLeft" 
/>

 <van-row v-if="showform">
  <van-col span="24">   
  <van-form @submit="onSubmit">
    <van-row>
  <van-col span="24">   
 <span style="font-size: 16px;
    float: left;
    padding: 4px;
    color: #606266;">稿件标题</span>
  </van-col>
</van-row>
  <van-field
    v-model="form.title"
    name="标题"
   
    placeholder="请填写稿件标题"
    :rules="[{ required: true, message: '请填写稿件标题' }]"
  />
   <van-row>
  <van-col span="24">   
 <span style="font-size: 16px;
    float: left;
    padding: 4px;
    color: #606266;">稿件描述</span>
  </van-col>
</van-row>
  <van-field
    v-model="form.intors"
    rows="3"
    autosize
    type="textarea"
    maxlength="200"
    placeholder="输入概要描述"
    show-word-limit
    style="font-size:14px;"
    
    :rules="[{ required: true, message: '请填写稿件简介' }]"
  />
  <van-row>
  <van-col span="24">   
 <span style="font-size: 16px;
    float: left;
    padding: 4px;
    color: #606266;">图片</span>
  </van-col>
</van-row>
 <van-field name="uploader">
  <template #input>
   <van-uploader  v-model="filesList" preview-size="100" capture="camera" lazyLoad multiple @delete="deleteimg" :after-read="afterread" :before-delete="beforedelete" :before-read="asyncBeforeRead" :max-count="9">

     <!-- v-model="filesList"  -->
     <!-- <template>
        <van-row >
          <van-col span="8"  v-for="(item,index) in filesList" :key="index">
            <div class="van-uploader__wrapper">
            <div class="van-uploader__preview">
            <div class="van-uploader__preview-image">
                  <img style="object-fit: cover;" width="100%" :src="item.content" alt="图片" class="imgPreview" />      
            </div>
            </div>
            </div>
          </van-col>
      </van-row>
     </template> -->
      <van-button  plain hairline style="color:#C0C4CC;fontsize:14px;width: 105px;height: 105px;" icon="photo-o" >添加</van-button>
     
    </van-uploader>
  </template>
</van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
  </van-col>
</van-row>
<!-- <div v-if="showimgView" class="list_bg">
  <van-row>
    <van-col span="24">  
        <van-row>
          <van-col span="8" v-for="(item, nn) in fileList" :key="nn">
            <div class="posting-uploader-item">
                  <img width="100%" :src="item.content" alt="图片" class="imgPreview" />      
            </div>
          </van-col>
      </van-row>
    </van-col>
  </van-row>
</div> -->

<!-- <van-row>
  <van-col span="24">   
    <van-uploader multiple v-model="fileList" @delete="deleteimg" :after-read="afterread" :before-delete="beforedelete" :before-read="beforeRead"  :max-count="9">
    
    </van-uploader>
  </van-col>
</van-row>-->
<van-panel v-if="showimgview" class="perimgview" >
  <div>
 <van-row>
  <van-col span="24">   
   <img  width="100%" :src="imgurl"/>
  </van-col>
</van-row>
 <van-row>
  <van-col span="24">   
 <span style="font-size: 16px;
    float: left;
    padding: 4px;
    color: #606266;">描述文字</span>
  </van-col>
</van-row>
 <van-row>
  <van-col span="24">   
    <van-field
  v-model="imgText"
  rows="3"
  autosize

  type="textarea"
  maxlength="200"
  placeholder="图片描述"
  show-word-limit
  style="font-size:14px;"
/>
  
  </van-col>
</van-row>

</div>
  <template #footer>
    <van-button style="margin:0 8px;" size="small">取消</van-button>
    <van-button size="small" @click="imgSubmit" type="danger">添加</van-button>
  </template>
</van-panel> 
<div class="lodingDiv">
  <van-overlay :show="showloding">
  <div class="wrapper" @click.stop>
    <div class="block">
      <div style="height: 120px;
    width: 120px;
    margin-top: 35px;">
      <van-loading color="#1989fa" size="24px" vertical>上传中...</van-loading>
      </div>
    </div>
  </div>
</van-overlay>

</div>
</div>
 
 



   
  <!-- </div> -->
</template>


<script>
 import Vue from 'vue'
//  import eruda from 'eruda'
 import { NodeID ,UserInfo} from "@/store/mutation-types"//MD5Tel AdminInfo
// import eruda from 'eruda'
import {
  // seletDepCount,\
  // singlelupload,
 getTopId,
  // adddxrm,
  // finduserByTel,
  // getdeplist,
  // checkAdmin,//检测管理员
  // getUserInfo,
//  uploads,
 singleImageUpload,
 AddnewsByApp
 
  // CheckTel
} from "@/api/index";
// import placesMap from "@/tools/map";
// import xzsqoptions from "@/tools/xzsq";
// import _ from "lodash";
//  import moment from 'moment'
//  var moment = require('moment');
export default {
  name: "HelloWorld",
    components: {    
   
    },
  watch:{
   
  },
  props: {
    msg: String
  },
   created()
   {
     console.log(window.document.referrer)
     console.log(this.$route)
     console.log(`created`)
   },
  mounted() {    
    this.GetGenernID();
    //  eruda.init()
    // this.isFormUrl()
    // let a=this.check_useragent()
    // console.log(a)
    // eruda.init()
    // let ismobile=this.isMobile()
    // if(!ismobile)
    // {
    //   alert(`来自红网APP`)      
    // }
    // else
    // {
    //   alert(`来自网页客户端`)
    // }
    // console.log(ismobile)
//  this.auth()
  },

  data() 
  {    
    // let NowInputTimes=moment().format('YYYY-MM-DD HH:mm:ss')
   
    this.phoneRules = [
      { required: true, message: "请输入手机号" },
      // { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
      { validator: this.phoneValidator, message: "手机号格式错误" }
    ];
    this.userNameRules = [
      { required: true, message: "请输入姓名" },
      { validator: this.userNameValidator, message: "姓名只能输入中文" }
    ]; 

    return {
      showloding:false,
      showform:true,
      showimglist:true,
      imgText:'',
      showimgview:false,
      imgurl:'',
      formdata:[],
     form:{
      title:'',
      intors:'',     
      files:[],
      imgtext:[],
      GeneralID:''
    },
      filesList: [],
      i:1,
      imgData:[]
      // personTitle:''
    };
  },
  methods: {
   async GetGenernID()
    {
      let result=await getTopId()
     return result.data.result.ID+1
    },
     
    compress(base64String, w, quality) {
      var getMimeType = function(urlData) {
        var arr = urlData.split(",");
        var mime = arr[0].match(/:(.*?);/)[1];
        // return mime.replace("image/", "");
        return mime;
      };
      var newImage = new Image();
      var imgWidth, imgHeight;

      var promise = new Promise(resolve => (newImage.onload = resolve));
      newImage.src = base64String;
      return promise.then(() => {
        imgWidth = newImage.width;
        imgHeight = newImage.height;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
          if (imgWidth > imgHeight) {
            canvas.width = w;
            canvas.height = (w * imgHeight) / imgWidth;
          } else {
            canvas.height = w;
            canvas.width = (w * imgWidth) / imgHeight;
          }
        } else {
          canvas.width = imgWidth;
          canvas.height = imgHeight;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
         var base64 = canvas.toDataURL(getMimeType(base64String), quality);
       // var base64 = canvas.toDataURL("image/jpeg", quality);
       
        return base64;
      });
    },
        
         
              Getfilesname(ext)
              {
                  var myDate = new Date();
                  var myYear = myDate.getFullYear();
                  var myMonth = myDate.getMonth() + 1;
                  var mydate = myDate.getDate();                 
                  var myHour = myDate.getHours();
                  var myMinute = myDate.getMinutes();
                  var mySecond = myDate.getSeconds();
                  var mytMilliSecond = myDate.getMilliseconds();
                  return '' + myYear + myMonth + mydate + myHour + myMinute + mySecond + mytMilliSecond+'.'+ext
              },
  

   async imgSubmit()
    {      
      
    
      this.showform=true;
      this.showimgview=false
   
      console.log(this.filesList)
      //  let Picindex=this.form.files.length-1        
      this.form.imgtext.push(this.imgText)
      this.imgText='' 
      console.log(this.form.imgtext)
    },
     getRandomNum() {
        let Min = 100000000;
        let Max = 999999999;
        let Range = Max - Min;
        let Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    },


    deleteimg(file,detail,upindex)
    {
      console.log(file,detail)
      
      this.filesList.splice(upindex,1);
    },
    beforedelete(file,detail)
    {
      let upindex=detail.index
      console.log(upindex)
     this.deleteimg(file,detail,upindex);
    },
 
 
   async afterread(file,detail)
    {
       
   
      if(file.content)
      {
        // console.log(this.filesList[detail.index])
        // console.log(file.content.length)
      let newbase64= await this.compress(file.content,650,50)
      console.log(newbase64);
      this.filesList[detail.index].content=newbase64;
        //http://172.20.8.28:3002/api/uploads
        // this.formdata.push(file)
      //  console.log(this.formdata)

          // let fd = new FormData();   
          // fd.append('file',file.file);//传文件        
          // await uploads(fd);
    this.form.files.push(file.file)
    // console.log(this.filesList)
    this.showimgview=true;
    this.showimglist=false
    this.showform=false
    this.imgurl= this.filesList[detail.index].content
       
      }
      
    },
 
        asyncBeforeRead(file,detail) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            this.$toast('请上传 jpg 或 png 格式图片');
            reject(false)
          }
        else {         
              console.log(detail)
              console.log(file)
              let ext=file.name.split('.')[1]
              console.log(ext)
              console.log(this.getRandomNum())
          let img = new File([file],this.getRandomNum(), {
           type:file.type
          });
          this.formdata.push(img)
          console.log(img)
          resolve(img);
        }
      });
    },
     PostImg(imgText,file)
    { 
      return new Promise(async(resolve)=>{
           let files = new FormData();
           files.append('file',file)
           files.append('imgtext',imgText)
            let res=await singleImageUpload(files)
            if(res.data.result.code==10000)
            {
              console.log(`上传成功`)
              
              setTimeout(() => {
               resolve(res.data.result)  
              }, 100);              
            }
          
      })
    },
   async onSubmit(){
      console.log(`OK`)
    
   this.showloding=true    
  //  let fd = new FormData();
   let _nodeid=Vue.ls.get(NodeID)
   let userinfo=Vue.ls.get(UserInfo)
   let fileslength=this.form.files.length;
   let defaultPic=''
          //  fd.append('title',this.form.title);//传文件   
          //  fd.append('intors',this.form.intors);//传文件         
          //  fd.append('GeneralID',this.form.GeneralID);//传文件  
          //  fd.append('NodeID',_nodeid);//传文件  
          //  fd.append('UserName',userinfo.UserName);//nodeID    
   console.log(fileslength)
    let _content=`<p>${this.form.intors}</P>`
      for(let i=0;i<this.form.files.length;i++)
      {
        //  status: 'uploading',
        //   message: '上传中...',
        this.filesList[i].status='uploading'
        this.filesList[i].message='上传中'
        
        
          // this.form.imgtext=[]  
        
          // fd.append('imgtext',this.form.imgtext[i])         
            let res=await this.PostImg(this.form.imgtext[i],this.form.files[i])
                // let res=await singleImageUpload(filesFd)
                if(res.code===10000)
                {
                  console.log(`1111111111111`)
                  
                  this.filesList[i].status='done'
                  this.filesList[i].message='上传成功'
                  _content+=res.res.imgs.content
                  this.imgData.push(res.res.imgs) 
                  
                    console.log(res)
                }          
      }
        this.imgData.forEach(async (item,index) => {          
          item.GeneralID=await this.GetGenernID()
          if(index==0)
          {
            defaultPic=`${item.localhost}${item._newfilePath}`
          }
        });
     let formObj=new Object()
     formObj.content=_content
     formObj.imges= this.imgData 
     formObj.title= this.form.title
     formObj.intors= this.form.intors
     formObj.NodeID= _nodeid
     formObj.UserName=userinfo.UserName
     formObj.defaultPic=defaultPic
     formObj.GeneralID= await this.GetGenernID()
    console.log(formObj)
    let res=  await AddnewsByApp(formObj);
    console.log(res)
           if(res.data.code==10000)
            {
              this.$toast.success('上传成功')
              this.showloding=false              
            }
              this.$router.push({path:'/Uniformlist'})
// 老的
          // let fd = new FormData();   
          //  fd.append('title',this.form.title);//传文件   
          //  fd.append('intors',this.form.intors);//传文件  
          //  fd.append('imgtext',this.form.imgtext.join('@@@'));//传文件  
          //  fd.append('GeneralID',this.form.GeneralID);//传文件  
          //  fd.append('NodeID',_nodeid);//传文件  
          //  fd.append('UserName',userinfo.UserName);//nodeID                
          // this.form.files.forEach(item => {
          //    fd.append('file',item)
          // });

          // // fd.append('file',file.file);//传文件  
          // setTimeout(async() => {
          //   let _result=await uploads(fd)
          //   console.log(_result)
          //   if(_result.data.result.code==10000)
          //   {
          //     this.$toast.success('上传成功')
          //     this.showloding=false              
          //   }
          //     this.$router.push({path:'/Uniformlist'})
          // }, 1000);      
        // 老的结束
       
       
      
    },
    onClickLeft()
    {
      let vm=this
      vm.$router.push({path:'/Uniformlist'})
    },
  //  auth(){
  //   let userinfo=Vue.ls.get(UserInfo)
  //   let node=Vue.ls.get(NodeID)
 
  //   },
  //     GetVerificatCodeAdSmssecret,
  // checkCaptchatoken,
   
 

    // 校验函数返回 true 表示校验通过，false 表示不通过
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
.title h1
{
  font-size: 18px;
    font-family: fantasy;
    color: #606266;
}
.list_bg
{
  background-color: #F2F6FC;
  margin: 6px;
}
.text_dialog{
    font-size: 16px;
    padding-bottom: 10px;
    text-indent: 2em;
    margin: 15px;
    text-align: left;
    line-height: 26px;
}
.dialogDiv img
{
 width: 33%;
}
.Isperson_panel{
  margin: 0px !important;
}
.footer {
    padding:0px !important;
    margin: 0px !important;
    position: fixed;
    width: 100%;
    background-color: #fff !important;
    bottom: -2px;
}
.van-panel
{
      margin: 0px 4px;
}
.van-panel >>> .van-panel__header
{
  display: none !important;
}
.van-panel >>>.van-panel__footer
{
  float:right;
}
.login_panel
{
 background-image: url(../../assets/login_bg.jpg);
}



.van-button--normal >>> .van-button__text
{
  font-size: 14px; 
}
.van-cell__title
{
  text-align: left;
    padding-left: 20px;
    line-height: 40px;
}


  .van-uploader >>> .van-uploader__preview-image
  {
      /* width: 100px;
    height: 100px; */
    border-radius:0px;
  }

   .van-uploader >>> .van-uploader__wrapper
   {
     margin:5px;
   }
.van-cell >>> .van-field__label
{
     width:50px;
     font-size:14px;
     float:left;
     padding-right: 5px;
}
/* .van-cell__value >>> .van-field__body{
      font-size:999px;
} */
/* .van-cell__value
{
 
  background-color: #42b983 !important;
} */
.van-icon
{
  font-size: 25px !important;
}
.van-grid-item__icon{
  font-size: 38px !important;
}
.van-cell__value{
  border: #42b983 1px solid  !important;
  font-size: 20px !important;
    background-color: aliceblue !important;
}

.login_input{
  font-size:14px !important;
}
.van-cell{
    color: #2b2b2b;
    font-size: 16px;
    line-height: 28px;
    padding: 5px 5px;
    margin:5px 0px;
    background-color: #F2F6FC;
}

.van-grid-item__text
{
    color: #646566;
    font-size:18px !important;
    word-wrap: break-word;
}
.van-cell__title {
  background-color: #9BCD9B;
  color: #fff;
}
.footer {
  margin-top: 20px;
  padding: 10px;

  color: #2b2b2b;
  background-color: #d7d7d7;
}
.title_5
{
  font-size:17px;
  padding:10px;
  background-color: red;
  color: #fff;
  font-weight: 600;
  
}
.title_6
{
  font-size:17px;
  padding:10px;
  background-color: #9bcd9b;
  color: #fff;
  font-weight: 600;
  
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
