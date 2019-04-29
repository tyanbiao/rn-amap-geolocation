# rn-amap-geolocation

React Native amap geolocation module for android

React Native高德地图定位模块，支持Android平台

## Getting started

`$ npm install rn-amap-geolocation --save`

### Mostly automatic installation

`$ react-native link react-native-amap-geolocation`

### Android

1. [get key](https://lbs.amap.com/api/android-location-sdk/guide/create-project/get-key)

2. Usage

```javascript
import { PermissionsAndroid } from "react-native"
import Geolocation from "react-native-amap-geolocation"

const granted = await PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
);

if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  await Geolocation.init({
    android: "043b24fe18785f33c491705ffe5b6935"
  })

  Geolocation.setOptions({
    interval: 2000, // 定位请求间隔，默认 2000 毫秒，仅用于 Android
    reGeocode: true, //是否返回地址信息，默认 false
    sensorEnable: true // 是否使用设备传感器，默认false,设置为true后，定位的Client将会采用设备传感器计算海拔，角度和速度。
  })

  Geolocation.addLocationListener(location => console.log(location))
  /*
    type location = {
          accuracy: number // 定位精度 (m)
          latitude: number // 经度
          longitude: number // 纬度
          altitude: number // 海拔 (m)，需要 GPS
          speed: number // 速度 (m/s)，需要 GPS
          direction: number // 移动方向，需要 GPS
          timestamp: number // 定位时间
          address?: string // 详细地址
          country?: string // 国家
          province?: string // 省份
          city?: string // 城市
          cityCode?: string // 城市编码
          district?: string // 区
          street?: string // 街道
          streetNumber?: string // 门牌号
          poiName?: string // 兴趣点
          locationType: number // 定位类型
          0 定位失败 通过AMapLocation.getErrorCode()方法获取错误码
          1 GPS定位结果 通过设备GPS定位模块返回的定位结果，精度较高，在10米－100米左右
          2 前次定位结果 网络定位请求低于1秒、或两次定位之间设备位置变化非常小时返回，设备位移通过传感器感知。
          4 缓存定位结果 返回一段时间前设备在同样的位置缓存下来的网络定位结果
          5 Wifi定位结果 属于网络定位，定位精度相对基站定位会更好，定位精度较高，在5米－200米之间。
          6 基站定位结果 纯粹依赖移动、联通、电信等移动网络定位，定位精度在500米-5000米之间。
          8 离线定位结果
          9 最后位置缓存
      }
  */
  Geolocation.start()
}
```

### API



