import React from 'react';
import { FlatList, StyleSheet,View, Text,Button } from 'react-native';
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
        <Text style={styles.news}>新闻列表</Text>
        <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
);
//发现组件
const FindScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);
//我的组件
const MyScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootTabs = createMaterialTopTabNavigator({
    dynamic: {
        screen: DynamicScreen,
        navigationOptions: ({navigation}) => ({
            title: '动态',

        }),
    },
    find: {
        screen: FindScreen,
        navigationOptions: ({navigation}) => ({
            title: '发现',
        }),
    },
    my:{
        screen:MyScreen,
        navigationOptions: ({navigation}) => ({
            title: '我的'
        })
    }
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#28a745',
        inactiveTintColor:'#232323',
        style: {
            backgroundColor: '#F2F2F2'
        },
        indicatorStyle: {
            height: 0
        }
    }
});
//组件样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color:'#232323',
    },
    news:{
        fontSize:20,
        paddingLeft:10,
        borderBottomColor:'#dadada',
        borderBottomWidth:1,
        justifyContent:'center',
    }
});

export default RootTabs;
