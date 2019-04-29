import { NativeModules, NativeEventEmitter, Platform } from "react-native"
const { AMapGeolocation } = NativeModules
const eventEmitter = new NativeEventEmitter(AMapGeolocation)

export default class Geolocation {
  init(key) {
    AMapGeolocation.init(Platform.select(key))
  }
  setOptions(options) {
    AMapGeolocation.setOptions(options)
  }
  start() {
      AMapGeolocation.start()
  }
  stop() {
      AMapGeolocation.stop()
  }
  getLastLocation() {
      AMapGeolocation.getLastLocation()
  }
  addLocationListener(listener) {
    eventEmitter.addListener("AMapGeolocation", listener)
  }
}
