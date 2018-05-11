import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = { showText: true };

        setInterval(()=> {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }
    render(){
        let display = this.state.showText ? this.props.text : ' ';
        return(
            <Text>{display}</Text>
        )
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
