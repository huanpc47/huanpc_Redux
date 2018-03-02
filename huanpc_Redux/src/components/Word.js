import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleMemorized, toggleShow } from '../redux/actionCreators';

class Word extends Component {

    render() {
        const { en, vn, memorized, isShow, id } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'Forget' : 'Memorized';
        const displayVN = isShow  ? vn : '----------';
        const showButtonText = isShow ? 'Hide' : 'Show';

        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}>{ en }</Text>
                <Text>{ displayVN }</Text>
                <View style={styles.controller}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={ () => this.props.toggleMemorized(id) }
                    >
                        <Text>{ memorizedButtonText }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={ () => this.props.toggleShow(id) }
                        >
                        <Text>{ showButtonText }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10
    },

    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    button: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10
    },
});

export default connect(null, { toggleMemorized, toggleShow })(Word);
