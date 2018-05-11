import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var BASE_URL = 'https://api.github.com/repos/facebook/react-native/events';

export default class FetchDemo extends Component {

    getEvent() {
        // 取得 BASE_URL response 的資料
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((responseData) => {
                // 單純只做 log
                console.log(responseData);
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }

    render() {
        // getEvent 只會 log 出得到的 data, 不會有任何 render
        this.getEvent();

        return (
            <View style={styles.container}>
                <Text>
                    Welcome to React Native!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})