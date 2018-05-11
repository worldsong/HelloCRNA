import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TextApp extends Component {
    render() {
        return (
            <View>
                <Text>First part and </Text>
                <Text>second part</Text>
            </View>
        );
    }
}