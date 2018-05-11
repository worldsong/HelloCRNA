import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class TextApp extends Component {
    render() {
        return (
            <Text>
                <Text>First part and </Text>
                <Text>second part</Text>
            </Text>
        );
    }
}