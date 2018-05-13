开发环境：
夜神模拟器  + expo + CRNA(create-react-native-app)
npm install -g create-react-native-app
create-react-native-app HelloCRNA
cd HelloCRNA
npm start

如果模拟器连接不上：
1.下载夜神模拟器最新版
http://www.yeshen.com/
2.打开夜神模拟器
3.打开cmd,执行以下代码连接设备
 adb connect 127.0.0.1:62001

后台接口：
切到file_server目录运行 node app.js
