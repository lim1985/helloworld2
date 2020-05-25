import { axios } from "../tools/request";
const api = {
  sendVerification: "/sendVerification",
  checkCaptcha: "/checkCaptcha",
  reportadd: "/reportadd",
  CheckTel: "/CheckTel",
  getUserInfo:"/getUserInfo",
  reportupdate:"/reportupdate",
  checkAdmin:"/checkAdmin",
  auditlog:"/auditlog",
  addRecords:"/addRecords",//手工添加纪录/并带有操作历史记录
  checkCaptchatoken:"/checkCaptchatoken",
  GetVerificatCodeAdSmssecret:"/GetVerificatCodeAdSmssecret",
  //大祥融媒数据统计
  getAllsharelink:'/getAllsharelink',
  //卡口管理
  kakoAdd:"/kakoAdd",
  kakoselect:"/kakoselect",
  AllKakoandCounts:"/AllKakoandCounts",
  //统计数据
  getDataCounts:'/getDataCounts',
  getAllDataGroupbyJDID:'/getAllDataGroupbyJDID',
   //统计访问量
  QMCount:'/count',
   //大祥融媒安装邀请记录
   //模糊查询单位名称
  getdeplist:'/getDeplist', //like 查询部门
  finduserByTel:'/finduserByTel',//查询存在的记录
  isDXRM:'/DXRMUserinfo',//查询是否提交数据
  adddxrm:'/adddxrm',//插入登记人员记录
  seletDepCount:'/seletDepCount',
  //获取最新的ID
  getTopId:'https://wx.daxiang.gov.cn/dxzc/getTopID',//'http://59.230.230.39:3002/api/getTopID', https://wx.daxiang.gov.cn/dxzc/getTopID
  //获取部门对应工作动态节点ID
  GetNodeID:'https://wx.daxiang.gov.cn/dxzc/getnodeid',//'http://59.230.230.39:3002/api/getnodeid', 
  //上传文件
  uploads:'https://wx.daxiang.gov.cn/dxzc/uploads',//'http://59.230.230.39:3002/api/uploads' https://wx.daxiang.gov.cn/dxzc/uploads'
  singlelupload:'https://wx.daxiang.gov.cn/dxzc/singlelupload',//'http://59.230.230.39:3002/api/uploads' https://wx.daxiang.gov.cn/dxzc/uploads' singlelupload
  singleImageUpload:'https://wx.daxiang.gov.cn/dxzc/singleImageUpload',//'http://59.230.230.39:3002/api/uploads' https://wx.daxiang.gov.cn/dxzc/uploads' singlelupload
  AddnewsByApp:'https://wx.daxiang.gov.cn/dxzc/AddnewsByApp'//'http://59.230.230.39:3002/api/uploads' https://wx.daxiang.gov.cn/dxzc/uploads' singlelupload

  
  //'http://172.20.8.28:3002/dxzc/singleImageUpload'
};

export default api;
//插入上传图片后生成的数据到后台
export function AddnewsByApp(parameter) {
  return axios({
    url: api.AddnewsByApp,
    method: 'post',
    data:parameter,   
   
  })
}
//获取部门对应工作动态节点ID
export function GetNodeID(parameter) {
  return axios({
    url: api.GetNodeID,
    method: "get",
    params: parameter,   
  });
}
//单个上传图片到系统
export function singleImageUpload(parameter) {
  return axios({
    url: api.singleImageUpload,
    method: 'post',
    data:parameter,   
    headers: {
    'Content-Type': 'multipart/form-data'
    },
  })
}
//单个上传图片到系统
export function singlelupload(parameter) {
  return axios({
    url: api.singlelupload,
    method: 'post',
    data:parameter,   
    headers: {
    'Content-Type': 'multipart/form-data'
    },
  })
}
//上传图片到系统
export function uploads(parameter) {
  return axios({
    url: api.uploads,
    method: 'post',
    data:parameter,   
    headers: {
    'Content-Type': 'multipart/form-data'
    },
  })
}
//大祥融媒体发稿数据查询
export function getTopId(parameter) {
  return axios({
    url: api.getTopId,
    method: "get",
    params: parameter,
   
  });
}
//大祥融媒体发稿数据查询
export function getAllsharelink(parameter) {
  return axios({
    url: api.getAllsharelink,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
//查询部门登记总数
export function seletDepCount(parameter) {
  return axios({
    url: api.seletDepCount,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
//添加融媒登记人员
export function adddxrm(parameter) {
  return axios({
    url: api.adddxrm,
    method: "post",
    data: parameter    
  });
}
//模糊查询部门名称
export function isDXRM(parameter) {
  return axios({
    url: api.isDXRM,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
//模糊查询部门名称
export function finduserByTel(parameter) {
  return axios({
    url: api.finduserByTel,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
//模糊查询部门名称
export function getdeplist(parameter) {
  return axios({
    url: api.getdeplist,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
//清明统计数据
export function QMCount(parameter) {
  return axios({
    url: api.QMCount,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
//街道数据
export function getAllDataGroupbyJDID(parameter) {
  return axios({
    url: api.getAllDataGroupbyJDID,
    method: "get",
    params: parameter
  });
}
//卡口数据
export function AllKakoandCounts(parameter) {
  return axios({
    url: api.AllKakoandCounts,
    method: "get",
    params: parameter
  });
}
//四种类型人统计数据
export function getDataCounts(parameter) {
  return axios({
    url: api.getDataCounts,
    method: "get",
    params: parameter
  });
}
//get卡点
export function addRecords(parameter) {
  return axios({
    url: api.addRecords,
    method: "post",
    data: parameter    
  });
}
//get卡点
export function kakoselect(parameter) {
  return axios({
    url: api.kakoselect,
    method: "post",
    data: parameter,
    
  });
}
//添加卡口
export function kakoAdd(parameter) {
  return axios({
    url: api.kakoAdd,
    method: "post",
    data: parameter,
    withCredentials: true
  });
}
//get短信
export function GetVerificatCodeAdSmssecret(parameter) {
  return axios({
    url: api.GetVerificatCodeAdSmssecret,
    method: "get",
    params: parameter
  });
}
//get验证短信
export function checkCaptchatoken(parameter) {
  return axios({
    url: api.checkCaptchatoken,
    method: "get",
    params: parameter
  });
}
//审核用户信息
export function auditlog(parameter) {
  return axios({
    url: api.auditlog,
    method: "post",
    data: parameter,
    withCredentials: true
  });
}
//get管理员信息
export function checkAdmin(parameter) {
  return axios({
    url: api.checkAdmin,
    method: "get",
    params: parameter
  });
}
// update用户信息
export function reportUpdate(parameter) {
  return axios({
    url: api.reportupdate,
    method: "post",
    data: parameter,
    withCredentials: true
  });
}
//get用户信息
export function getUserInfo(parameter) {
  return axios({
    url: api.getUserInfo,
    method: "get",
    params: parameter
  });
}
//gettel
export function CheckTel(parameter) {
  return axios({
    url: api.CheckTel,
    method: "get",
    params: parameter
  });
}
// 人员报告
export function reportAdd(parameter) {
  return axios({
    url: api.reportadd,
    method: "post",
    data: parameter
  });
}
export function checkCaptcha(parameter) {
  return axios({
    url: api.checkCaptcha,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}

export function sendVerification(parameter) {
  return axios({
    url: api.sendVerification,
    method: "get",
    params: parameter,
    withCredentials: true
  });
}
