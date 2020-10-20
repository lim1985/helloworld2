import AMapLoader from '@amap/amap-jsapi-loader';


import CoordinateUtil from "@/tools/CoordinateUtil";
//     var coordtransform=require('coordtransform');
//     var bd09togcj02=coordtransform.bd09togcj02(111.4615254, 27.23681124);//27.23681124&lon=111.4615254  430503004001001
//   console.log(bd09togcj02)
// //    111.4550556394785
// // 1: 27.230726467175653
//     var gcj02towgs84=coordtransform.gcj02towgs84(111.4550556394785, 27.230726467175653);
// console.log(gcj02towgs84);


//baidumap key ：GUMduWzwfw4zm2G56kVETKsuXGizKSTr
class Amap {

  static baidutowgs84 (lat, lon) {
    return CoordinateUtil.getWgs84xy(lat, lon);
  }
  static initAmap (div) {
    return new Promise((resolve, reject) => {
      AMapLoader.load({
        "key": "246e3b746748bcf21e160e67eec5bd89",   // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": []  //插件列表
      }).then((AMap) => {
        console.log(`进来了`)
        var map = new AMap.Map(div, {
          resizeEnable: true
        });
        AMap.plugin('AMap.Geolocation', function () {
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            buttonPosition: 'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition(function (status, result) {
            //   console.log(status)
            //   console.log(result)
            if (status == 'complete') {
              //   console.log(result)
              resolve(result.position)
              // onComplete(result)
            } else {
              this.onError(result)
            }
          });
        });
      }).catch(e => {
        reject(e)
        console.log(e);
      })
    })
  }

  //https://ztclets.daxiang.gov.cn/mass/directTrainManage/getGridUserByLonAndLat.json?lat=27.225410774461416&lon=111.44161634480834
  static loginRednet (actionName, callback) {
    let ostype = function () {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag
    };
    try {
      window.transferUserTelDataToWeb = ((uuid, userid, token, nickName, tel) => {
        callback({ nickName: nickName, tel: tel })
      })

    } catch (error) {
      alert(error)
    }
    // transferUserTelDataToWeb( uuid  ,userid , token ,nickName , tel );
    // try {
    //   window.callbackUserToLogin = ((userinfo) => {
    //     callback({ userinfo: 'limannlee' })
    //   })
    // } catch (error) {
    //   alert(error)
    // }
    try {
      if (ostype()[0] === 'Android') {
        verifyJsBridge.postNotification(actionName, '{}')
      }
      else if (ostype()[0] === 'ios') {
        window.webkit.messageHandlers[actionName].postMessage({});
      }
    } catch (error) {
      alert(error)
    }

  }
  static nativeItude (actionName, callback) {
    let ostype = function () {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag
    };
    try {
      window.callbackLocationCoordinate = ((longitude, latitude) => {
        ostype()[0] === 'ios' ? (window.callbackLocationCoordinate = null) : ''
        // alert(longitude+','+latitude)
        //  alert(latitude)
        // var coordtransform=require('coordtransform');
        //   var bd09togcj02=coordtransform.bd09togcj02(longitude,latitude);//27.23681124&lon=111.4615254  430503004001001   
        //   var gcj02towgs84=coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
        //  alert(longitude+','+latitude)
        let wgc84 = Amap.baidutowgs84(latitude, longitude)
        //   alert(wgc84.lng+','+wgc84.lat)
        //callback(gcj02towgs84[0],gcj02towgs84[1])
        callback(wgc84.lng, wgc84.lat)
      })
      // window.callbackLocationCoordinate  =  function(longitude,latitude) 
      // {
      //   alert(longitude)
      //   alert(latitude)
      //   ostype()[0] === 'ios' ? (window.callbackLocationCoordinate  = null) : ''
      // let wgc84= Amap.baidutowgs84(longitude,latitude)
      //   // alert(wgc84.lng+','+wgc84.lat)
      //   callback(wgc84.lng,wgc84.lat)
      // }
    } catch (error) {
      alert(error)
    }

    try {
      if (ostype()[0] === 'Android') {
        verifyJsBridge.postNotification(actionName, '{}')
      }
      else if (ostype()[0] === 'ios') {
        window.webkit.messageHandlers[actionName].postMessage({});
      }
    } catch (error) {
      alert(error)
    }
    //     // window.jsBridge.postNotification(actionName,{})
    //   //  if (ostype()[0] == 'Android') {
    //    alert(window.verifyJsBridge)
    //  verifyJsBridge.postNotification(actionName,'{}')

    //   // }
    //   //  else if (ostype === 'ios') {
    //    // window.webkit.messageHandlers[actionName].postMessage({});
    //   // }
    // } catch (error) {
    //   alert(error)
    // }
  }
  static bd09togcj02 (bd_lon, bd_lat) {
    var x = bd_lon - 0.0065;
    var y = bd_lat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * CoordinateUtil.x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * CoordinateUtil.x_pi);
    var gg_lng = z * Math.cos(theta);
    var gg_lat = z * Math.sin(theta);
    return {
      lng: gg_lng,
      lat: gg_lat
    }
  }

  // var CoordinateUtil = {
  //   x_pi: 3.14159265358979324 * 3000.0 / 180.0,
  //   //pai
  //   pi: 3.1415926535897932384626,
  //   //离心率
  //   ee: 0.00669342162296594323,
  //   //长半轴
  //   a: 6378245.0,
  //   //百度转国测局
  //   bd09togcj02: function(bd_lon, bd_lat) {
  //     var x = bd_lon - 0.0065;
  //     var y = bd_lat - 0.006;
  //     var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * CoordinateUtil.x_pi);
  //     var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * CoordinateUtil.x_pi);
  //     var gg_lng = z * Math.cos(theta);
  //     var gg_lat = z * Math.sin(theta);
  //     return {
  //       lng: gg_lng,
  //       lat: gg_lat
  //     }
  //   },
  //   //国测局转百度
  //   gcj02tobd09: function(lng, lat) {
  //       var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * CoordinateUtil.x_pi);
  //       var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * CoordinateUtil.x_pi);
  //     var bd_lng = z * Math.cos(theta) + 0.0065;
  //     var bd_lat = z * Math.sin(theta) + 0.006;
  //     return {
  //       lng: bd_lng,
  //       lat: bd_lat
  //     };
  //   },
  //   //国测局转84
  //   gcj02towgs84: function(lng, lat) {
  //       var dlat = CoordinateUtil.transformlat(lng - 105.0, lat - 35.0);
  //       var dlng = CoordinateUtil.transformlng(lng - 105.0, lat - 35.0);
  //     var radlat = lat / 180.0 * CoordinateUtil.pi;
  //     var magic = Math.sin(radlat);
  //     magic = 1 - CoordinateUtil.ee * magic * magic;
  //     var sqrtmagic = Math.sqrt(magic);
  //     dlat = (dlat * 180.0) / ((CoordinateUtil.a * (1 - CoordinateUtil.ee)) / (magic * sqrtmagic) * CoordinateUtil.pi);
  //     dlng = (dlng * 180.0) / (CoordinateUtil.a / sqrtmagic * Math.cos(radlat) * CoordinateUtil.pi);
  //     var mglat = lat + dlat;
  //     var mglng = lng + dlng;
  //     return {
  //       lng: lng * 2 - mglng,
  //       lat: lat * 2 - mglat
  //     };
  //   },
  //   //经度转换
  //   transformlat: function(lng, lat) {
  //     var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  //     ret += (20.0 * Math.sin(6.0 * lng * CoordinateUtil.pi) + 20.0 * Math.sin(2.0 * lng * CoordinateUtil.pi)) * 2.0 / 3.0;
  //     ret += (20.0 * Math.sin(lat * CoordinateUtil.pi) + 40.0 * Math.sin(lat / 3.0 * CoordinateUtil.pi)) * 2.0 / 3.0;
  //     ret += (160.0 * Math.sin(lat / 12.0 * CoordinateUtil.pi) + 320 * Math.sin(lat * CoordinateUtil.pi / 30.0)) * 2.0 / 3.0;
  //     return ret;
  //   },
  //   //纬度转换
  //   transformlng: function(lng, lat) {
  //     var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  //     ret += (20.0 * Math.sin(6.0 * lng * CoordinateUtil.pi) + 20.0 * Math.sin(2.0 * lng * CoordinateUtil.pi)) * 2.0 / 3.0;
  //     ret += (20.0 * Math.sin(lng * CoordinateUtil.pi) + 40.0 * Math.sin(lng / 3.0 * CoordinateUtil.pi)) * 2.0 / 3.0;
  //     ret += (150.0 * Math.sin(lng / 12.0 * CoordinateUtil.pi) + 300.0 * Math.sin(lng / 30.0 * CoordinateUtil.pi)) * 2.0 / 3.0;
  //     return ret;
  //   },
  //   getWgs84xy:function(x,y){
  //     //先转 国测局坐标
  //     var doubles_gcj = CoordinateUtil.bd09togcj02(x, y); //（x 117.   y 36. ）
  //     //国测局坐标转wgs84
  //     var doubles_wgs84 = CoordinateUtil.gcj02towgs84(doubles_gcj.lng, doubles_gcj.lat);
  //     //返回 纠偏后 坐标

  //     return doubles_wgs84;
  //   }
  // }
  // validateStart (data) {
  //   const start = data.query.start;
  //   // 如果 start 为可选
  //   if (isOptional(start)) {
  //     return true;
  //   }
  //   const ok = checkDateFormat(start);
  //   if (ok) {
  //     return ok;
  //   } else {
  //     return [false, '请输入正确格式开始时间', 'start'];
  //   }
  // }

  // validateEnd (data) {
  //   if (!data.query) {
  //     return true;
  //   }
  //   const end = data.query.end;
  //   if (isOptional(end)) {
  //     return true;
  //   }
  //   const ok = checkDateFormat(end);
  //   if (ok) {
  //     return ok;
  //   } else {
  //     return [false, '请输入正确格式结束时间', 'end'];
  //   }
  // }
}

export { Amap };