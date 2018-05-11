import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class TextInANest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    onPressTitle(){
        // alert('翻牌了！')
        console.log('翻牌了')
    }

    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.titleText}>
                    {this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text numberOfLines={5} onPress={this.onPressTitle}>
                    {this.state.bodyText}
                </Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'serif',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
