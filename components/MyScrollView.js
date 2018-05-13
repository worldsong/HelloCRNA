import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

class MyScrollView extends React.Component{
    renderChild = ()=>{
        const colors = ['red','green','blue','yellow'];
        return colors.map((item,i)=>{
            return <View key={`key${i}`} style={{backgroundColor:item,width:ScreenWidth,height:200}}>
                <Text>{i}</Text>
            </View>;
        });
    }
    render(){
        return <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}>
            {this.renderChild()}
        </ScrollView>;
    }
}

module.exports = MyScrollView;