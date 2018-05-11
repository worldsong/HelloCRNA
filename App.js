import React, { Component } from 'react';
import { Button  } from 'react-native';

export default class App extends Component {
    onPressLearnMore(){
        alert('Learn more about this purple button')
    }
    render() {
        return (
            <Button
                onPress={this.onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        );
    }
}