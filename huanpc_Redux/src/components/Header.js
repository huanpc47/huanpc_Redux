import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/actionCreators';

class Header extends Component {
    
    render(){
        return (
            <View style={ styles.header }>
                <Text></Text>
                <Text>MY WORDS</Text>
                <TouchableOpacity onPress={ () => this.props.toggleIsAdding() }>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1, 
        backgroundColor: '#D9D9D9', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20
    }
});

export default connect(null, { toggleIsAdding })(Header);