import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from './src/actions';

let styles
const App = (props) => {
    const {
        container,
        text,
        button,
        buttonText
} = styles
    return (
        <View style={container}>
            <Text style={text}>Redux Example</Text>
            <TouchableHighlight style={button}>
                <Text style={buttonText}>Load data</Text>
            </TouchableHighlight>
        </View>
    )
}
styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    }
})
function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}
function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

