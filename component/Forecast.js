import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';


export default class Forecast extends React.Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.ff}>{this.props.main}</Text>
                <Text style={styles.ff}>{this.props.description}</Text>
                <Text style={styles.ff}>{this.props.temp}</Text>
                <Text style={styles.ff}>°C</Text>
                <ImageBackground source={require('../bg.jpeg')} style={styles.ff}>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    ff: {
        flexDirection:
            'column',

        justifyContent:
            'center',
        alignItems:
            'center'
    },
    f:{

    }
});
