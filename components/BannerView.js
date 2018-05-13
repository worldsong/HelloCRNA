import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

const JsonData = require('../data/test2.json');

const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

const BaseUrl = 'http://192.168.56.1:3000/images/';

class BannerView extends React.Component {
    static defaultProps = {
        duration : 1000
    }

    constructor(props){
        super(props);
        this.state = {
            currentPage:0 //当前页面
        };
    }

    //banner图片
    renderImages = ()=> {
        return JsonData.data.map((item, i)=> {
            return <Image key={`image${i}`} source={{uri:BaseUrl+item.img}} style={styles.imageStyle}/>;
        });
    }
    //画圆
    renderCircles = () =>{
        return JsonData.data.map((item,i)=>{
            let style = {};
            if(i === this.state.currentPage){
                style = {color:'orange'};
            }
            return <Text key={`circle${i}`} style={[styles.circleText,style]}>&bull;</Text>
        });
    }

    //滑动结束
    handleScrollEnd = (e)=>{
        //获取水平滑动的距离
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / ScreenWidth);
        this.setState({currentPage:currentPage});
    }
    //开启定时器
    startTimer = ()=>{
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(()=>{
            let page = ++this.state.currentPage == JsonData.data.length ? 0 : this.state.currentPage;
            this.setState({currentPage:page});
            console.log('page:'+page);
            let offsetX = this.state.currentPage * ScreenWidth;
            scrollView.scrollTo({x:offsetX, y:0, animated:true});

        },this.props.duration);
    }

    //开始拖拽，停止定时器
    handleDragBegin = ()=>{
        clearInterval(this.timer);
    }
    //停止拖拽
    handleDragEnd = ()=> {
        this.startTimer();
    }

    render() {
        return <View style={styles.container}>
            <ScrollView
                ref="scrollView"
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={this.handleScrollEnd}
                onScrollBeginDrag={this.handleDragBegin}
                onScrollEndDrag={this.handleDragEnd}>
                {this.renderImages()}
            </ScrollView>
            <View style={styles.circleContainer}>
                {this.renderCircles()}
            </View>
        </View>;
    }
    //开启定时任务，不断翻页
    componentDidMount = ()=> {
        this.startTimer();
    }

    componentWillUnmount =() =>{
        clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    imageStyle: {
        width: ScreenWidth,
        height: 120
    },
    circleContainer:{
        flexDirection:'row',
        //relative：生成相对定位的元素，相对于其正常位置进行定位。
        position:'absolute',
        bottom:0,
        left:10
    },
    circleText:{
        fontSize:25,
        color:'#FFF'
    }
});

module.exports = BannerView;