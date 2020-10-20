import AMapLoader from '@amap/amap-jsapi-loader';
import { resolve } from 'core-js/fn/promise';
//     var coordtransform=require('coordtransform');
//     var bd09togcj02=coordtransform.bd09togcj02(111.4615254, 27.23681124);//27.23681124&lon=111.4615254  430503004001001
//   console.log(bd09togcj02)
// //    111.4550556394785
// // 1: 27.230726467175653
//     var gcj02towgs84=coordtransform.gcj02towgs84(111.4550556394785, 27.230726467175653);
    // console.log(gcj02towgs84);


//baidumap key ：GUMduWzwfw4zm2G56kVETKsuXGizKSTr
class newAmap  {
  constructor () {
    super();
    this.x_pi= 3.14159265358979324 * 3000.0 / 180.0,
	//pai
  	this.pi= 3.1415926535897932384626,
	//离心率
  	this.ee= 0.00669342162296594323,
	//长半轴
  	this.a= 6378245.0
  }
  bd09togcj02(bd_lon, bd_lat)
   {
		var x = bd_lon - 0.0065;
		var y = bd_lat - 0.006;
		var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y *(3.14159265358979324 * 3000.0 / 180.0));
		var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * (3.14159265358979324 * 3000.0 / 180.0));
		var gg_lng = z * Math.cos(theta);
		var gg_lat = z * Math.sin(theta);
		return {
			lng: gg_lng,
			lat: gg_lat
		}
  }
  
  //国测局转84
  gcj02towgs84(lng, lat)
   {
    var dlat = CoordinateUtil.transformlat(lng - 105.0, lat - 35.0);
    var dlng = CoordinateUtil.transformlng(lng - 105.0, lat - 35.0);
  var radlat = lat / 180.0 * CoordinateUtil.pi;
  var magic = Math.sin(radlat);
  magic = 1 - CoordinateUtil.ee * magic * magic;
  var sqrtmagic = Math.sqrt(magic);
  dlat = (dlat * 180.0) / ((6378245.0 * (1 - CoordinateUtil.ee)) / (magic * sqrtmagic) * CoordinateUtil.pi);
  dlng = (dlng * 180.0) / (6378245.0 / sqrtmagic * Math.cos(radlat) * CoordinateUtil.pi);
  var mglat = lat + dlat;
  var mglng = lng + dlng;
  return {
    lng: lng * 2 - mglng,
    lat: lat * 2 - mglat
  };
}
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
  
  export { newAmap };