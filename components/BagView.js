import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//获取屏幕的宽度
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var boxWidth = width / 3;

var JsonData = require('../data/test.json');

var BaseUrl = 'http://192.168.56.1:3000/images/';

class BagView extends Component{
    renderBags = ()=>{
        return JsonData.data.map((item,i) => {
            return <View key={'wrapper'+i} style={styles.wrapperStyle}>
                {/*<Image source={{uri: }} style={styles.imageStyle}></Image>*/}
                <Image source={{uri: BaseUrl + item.icon + '.png'}} style={styles.imageStyle}></Image>
                <Text>{item.title}</Text>
            </View>
        });
    }
    render(){
        return <View style={styles.container}>
            {this.renderBags()}
        </View>;
    }
}

var styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap' //换行
    },
    wrapperStyle:{
        flexDirection:'column', //主轴，垂直方向
        alignItems:'center', //交叉轴，居中对齐
        width:boxWidth,
        height:100
    },
    imageStyle:{
        width:80,
        height:80
    }
});

module.exports = BagView;