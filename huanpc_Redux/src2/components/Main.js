import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import '../api/getTemp';
import getTemp from '../api/getTemp';
import * as actionCreators from '../redux/actionCreators'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherMessage() {
        const { error, isLoading, cityName, temp } = this.props;
        if (isLoading) return '...Loading';
        if (error) return 'Vui lòng thử lại!';
        if (!cityName) return 'Nhập tên thành phố của bạn:';
        
        return `${cityName} hiện tại là ${temp}oC`;
    }

    getTempByCityName() {
        const cityName = this.state.cityName;

        this.props.fetchDataThunk(cityName);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.message }>
                    { this.getWeatherMessage() }
                </Text>
                <TextInput
                    style = { styles.textInput }
                    value = { this.state.cityName }
                    onChangeText = { text => this.setState({ cityName: text })}
                />
                <TouchableOpacity 
                    style={ styles.button }
                    onPress={this.getTempByCityName.bind(this)}>
                    <Text style={ styles.buttonText }>
                        Lấy nhiệt độ
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        temp: state.temp,
        error: state.error,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, actionCreators)(Main);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue', 
        alignSelf: 'stretch', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    message: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
    },
    
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50,
    },

    buttonText: {
        color: 'white',
    },

    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 40,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        color: 'white',
    },
});