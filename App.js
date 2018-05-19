import React from 'react';
import { FlatList, StyleSheet,View, Text,Button,Image } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//头部公共组件
class HeadScreen extends React.Component {
    render() {
        return (
            <View style={{height:35,backgroundColor:'#242529',padding:10}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#ffffff'}}>微信</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text><Icon name="md-add" color="#fff" size={18} /></Text>
                    </View>
                </View>
            </View>
        );
    }
}

//动态组件
const DynamicScreen = () => (
    <View style={styles.container}>
        <HeadScreen></HeadScreen>
        <View style={styles.container}>
            <FlatList
                data={[
                    {key:'1',name:'张三',text:'我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',time:'2017-01-02 10:20:33'},
                    {key:'2',name:'xiongshi1998',text:'出生无法选择，但人生可以选择',time:'2017-01-02 10:20:33'},
                    {key:'3',name:'2222',text:'过多的关注和曝光会不会对孩子的正常生活有影响？一阵风似的离开后，孩子会不会有点失落？',time:'2017-01-02 10:20:33'},
                    {key:'4',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'},
                    {key:'5',name:'2222',text:'说真的没有媒体的报道 谁知道大山深处的苦难啊 希望媒体多多关注社会弱势群体 大山深处还有很多很多的冰花男孩呢',time:'2017-01-02 10:20:33'}
                ]}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <View style={{flex:1}}>
                            <Text><Icon name="ios-chatboxes-outline" color="#000" size={30} /></Text>
                        </View>
                        <View style={{flex:9}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.text}>{item.text}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    </View>
);
//通讯录组件
const ContactsScreen = () => (
    <View style={[styles.container,styles.findBody]}>
        <HeadScreen title="通讯录"></HeadScreen>
        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="md-person-add" color="#51BBE5" size={22} />
            <Text style={styles.findViewText}>新的朋友</Text>
        </View>

        <View style={[styles.findView,styles.findMT]}>
            <Icon style={styles.findViewIcon} name="ios-people-outline" color="#51BBE5" size={22} />
            <Text style={styles.findViewText}>群聊</Text>
        </View>

        <View style={[styles.findView,styles.findMT]}>
            <Icon style={styles.findViewIcon} name="ios-bookmark-outline" color="#BAEE44" size={22} />
            <Text style={styles.findViewText}>标签</Text>
        </View>

        <View style={[styles.findView,styles.findMT]}>
            <Icon style={styles.findViewIcon} name="ios-contact-outline" color="#3399FF" size={22} />
            <Text style={styles.findViewText}>公众号</Text>
        </View>
        <View style={{ marginTop:15}}>
            <Text>我的企业</Text>
        </View>
        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-color-filter-outline" color="#55C1E7" size={22} />
            <Text style={styles.findViewText}>奔驰集团</Text>
        </View>
        <View style={{ marginTop:10}}>
            <Text>A</Text>
        </View>
        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-cloud-outline" color="#55C1E7" size={22} />
            <Text style={styles.findViewText}>阿里云</Text>
        </View>
        <View style={{ marginTop:10}}>
            <Text>B</Text>
        </View>
        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-basketball-outline" color="#55C1E7" size={22} />
            <Text style={styles.findViewText}>B.乔丹</Text>
        </View>

    </View>
);
//发现组件
const FindScreen = () => (
    <View style={[styles.container,styles.findBody]}>
        <HeadScreen title="发现"></HeadScreen>
        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-contacts-outline" color="#3399FF" size={22} />
            <Text style={styles.findViewText}>朋友圈</Text>
        </View>


        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-crop-outline" color="#51BBE5" size={22} />
            <Text style={styles.findViewText}>扫一扫</Text>
        </View>

        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-search-outline" color="#51BBE5" size={22} />
            <Text style={styles.findViewText}>搜一搜</Text>
        </View>

        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-tablet-portrait" color="#BAEE44" size={22} />
            <Text style={styles.findViewText}>购物</Text>
        </View>

        <View style={[styles.findView,styles.findMT]}>
            <Icon style={styles.findViewIcon} name="ios-game-controller-b-outline" color="#3399FF" size={22} />
            <Text style={styles.findViewText}>游戏</Text>
        </View>

        <View style={styles.findView}>
            <Icon style={styles.findViewIcon} name="ios-code" color="#55C1E7" size={22} />
            <Text style={styles.findViewText}>小程序</Text>
        </View>

    </View>
);
//我的组件
const MyScreen = () => (
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
);

const RootTabs = createMaterialTopTabNavigator({
    dynamic: {
        screen: DynamicScreen,
        navigationOptions: ({navigation}) => ({
            title: '动态',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-text-outline" size={26} color={tintColor} />
            ),
        }),
    },
    contacts: {
        screen: ContactsScreen,
        navigationOptions: ({navigation}) => ({
            title: '通讯录',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-contacts-outline" size={26} color={tintColor} />
            ),
        }),
    },
    find: {
        screen: FindScreen,
        navigationOptions: ({navigation}) => ({
            title: '发现',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-compass-outline" size={26} color={tintColor} />
            ),
        }),
    },
    my:{
        screen:MyScreen,
        navigationOptions: ({navigation}) => ({
            title: '我的',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-person-outline" size={26} color={tintColor} />
            ),
        })
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

export default RootTabs;