
# react-native-amap-geolocation

## Getting started

`$ npm install react-native-amap-geolocation --save`

### Mostly automatic installation

`$ react-native link react-native-amap-geolocation`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-amap-geolocation` and add `RNAmapGeolocation.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAmapGeolocation.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.tyanbiao.react.geolocation.RNAmapGeolocationPackage;` to the imports at the top of the file
  - Add `new RNAmapGeolocationPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-amap-geolocation'
  	project(':react-native-amap-geolocation').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-amap-geolocation/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-amap-geolocation')
  	```


## Usage
```javascript
import RNAmapGeolocation from 'react-native-amap-geolocation';

// TODO: What to do with the module?
RNAmapGeolocation;
```
  