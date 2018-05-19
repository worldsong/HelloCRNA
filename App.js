import React from 'react';
import { FlatList, StyleSheet,View, Text,Button } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

const dynamicScreen = () => (
    <View style={styles.container}>
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

const findScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const myScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootTabs = createMaterialTopTabNavigator({
    dynamic: {
        screen: dynamicScreen,
        navigationOptions: ({navigation}) => ({
            title: '动态',

        }),
    },
    find: {
        screen: findScreen,
        navigationOptions: ({navigation}) => ({
            title: '发现',
        }),
    },
    my:{
        screen:myScreen,
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