import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

//获取屏幕的宽度
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

class LoginView extends Component {
    handlePress = ()=>{
        console.log("press");
    }
    render() {
        return <View style={styles.container}>
            <Image source={require('../images/icon3.png')} style={styles.iconStyle}></Image>
            <View style={styles.inputWrapperStyle}>
                <TextInput placeholder="输入QQ号码" style={styles.inputStyle}></TextInput>
            </View>
            <View style={styles.inputWrapperStyle}>
                <TextInput placeholder="输入密码" style={styles.inputStyle} keyboardType="numeric" secureTextEntry={true}></TextInput>
            </View>
            {/*可以用Button
             TouchableOpacity 被点击之后，透明度发生改变
             activeOpacity，被点击时的透明
            */}
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.handlePress}>
                <View style={styles.textWrapperStyle}>
                    <Text style={{color:'#fff',flex:1,textAlign:'center',alignSelf:'center'}}>登录</Text>
                </View>
            </TouchableOpacity>

        </View>;
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column', //主轴
        alignItems: 'center' //交叉轴居中对齐
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FFF',
        marginTop: 50,
        marginBottom: 30
    },
    inputWrapperStyle: {
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1, //填满父容器
        textAlign: 'center'
    },
    textWrapperStyle:{
        flexDirection:'row',
        backgroundColor:'#87CEFA',
        marginLeft:15,
        marginRight:15,
        borderRadius:8,
        height:30,
        width:ScreenWidth-30,
        marginTop:20
    }
});

module.exports = LoginView;