import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import FindScreen from  './components/wechat/FindScreen'
import DynamicScreen from  './components/wechat/DynamicScreen'
import ContactsScreen from  './components/wechat/ContactsScreen'
import MyScreen from  './components/wechat/MyScreen'
import DynamicDetailScreen from  './components/wechat/DynamicDetailScreen'

const RootTabs = createMaterialTopTabNavigator(
    {
        dynamic: {
            screen: DynamicScreen,
        },
        contacts: {
            screen: ContactsScreen,
        },
        find: {
            screen: FindScreen,
        },
        my:{
            screen:MyScreen,
        }
    },
    {
        initialRouteName: 'contacts',
        tabBarPosition: 'bottom',//选项卡位置
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#28a745',//选中颜色
            inactiveTintColor:'#232323',//未选中颜色
            //设置选项卡的背景颜色
            style: {
                backgroundColor: '#F2F2F2'
            },
            //去掉安卓点击之后的小黄线
            indicatorStyle: {
                height: 0
            },
            //是否显示icon图标
            showIcon:true,
            //选项卡样式
            tabStyle:{
                height:46,
            },
            //icon样式
            iconStyle:{
                marginBottom:-6,
                marginTop:10
            }
        }
});

// myapp路由
const MyApp = createStackNavigator({
    dynamicStack: {
        screen: RootTabs
    },
    dynamicDetail: {
        path: 'people/:name',
        screen: DynamicDetailScreen,
    },
});

export default MyApp;