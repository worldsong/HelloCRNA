import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadScreen from './HeadScreen';

export default class DynamicScreen extends React.Component {
    static navigationOptions = {
        title: '我的',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-person-outline" size={26} color={tintColor} />
        ),
    }
    render(){
        return (
            <View style={[styles.container,styles.findBody]}>
                <HeadScreen title="我的"></HeadScreen>
                <View style={styles.findView}>
                    <Icon style={[styles.findViewIcon,{flex:2}]} name="ios-contacts-outline" color="#3399FF" size={60} />
                    <View style={[styles.findViewText,{flex:8,justifyContent:'center'}]}>
                        <Text>worldsong</Text>
                        <Text style={{color:'gray'}}>微信号：songfens.club</Text>
                    </View>

                </View>

                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-cash-outline" color="#3399FF" size={22} />
                    <Text style={styles.findViewText}>钱包</Text>
                </View>

                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-add-circle-outline" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>收藏</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-images-outline" color="#51BBE5" size={22} />
                    <Text style={styles.findViewText}>相册</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-tablet-portrait" color="#BAEE44" size={22} />
                    <Text style={styles.findViewText}>卡包</Text>
                </View>

                <View style={[styles.findView,styles.findMT]}>
                    <Icon style={styles.findViewIcon} name="ios-sad-outline" color="#3399FF" size={22} />
                    <Text style={styles.findViewText}>表情</Text>
                </View>

                <View style={styles.findView}>
                    <Icon style={styles.findViewIcon} name="ios-settings-outline" color="#55C1E7" size={22} />
                    <Text style={styles.findViewText}>设置</Text>
                </View>

            </View>
        )
    }
}

//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex:1,
        flexDirection:'row',
        borderBottomWidth:6,
        borderBottomColor:'#F2F2F2',
        padding:10
    },
    name:{
        color:'#388BFF',
        fontSize:16
    },
    text:{
        color:'#232323',
        fontSize:16
    },
    time:{
        color:'gray',
        fontSize:12,
        marginTop:8
    },
    //发现组件样式
    findView:{
        backgroundColor:'#fff',
        marginTop:15,
        padding:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    findViewIcon:{
        flex:1
    },
    findViewText:{
        flex:9,
        marginTop:1
    },
    findBody:{
        backgroundColor:'#EBEBEB'
    },
    findMT:{
        marginTop:0,
        borderTopWidth:1,
        borderTopColor:'#EBEBEB'
    }
});
