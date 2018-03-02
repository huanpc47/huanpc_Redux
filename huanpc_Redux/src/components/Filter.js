import React, { Component } from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { showAll, showAMemorized, showNeedPractice, filterStatus } from '../redux/actionCreators';

class Filter extends Component {
    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === this.props.myFilterStatus)
            return { color: 'yellow', fontWeight: 'bold' };
        return styles.buttonText;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }

    render() {
        return (
            <View style={ styles.container }>
                    <TouchableOpacity onPress={() => this.props.showAll()}>
                        <Text style={ this.getTextStyle('SHOW_ALL') }>SHOW ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.filterStatus('FILTER_MEMORIZED')}>
                        <Text style={ this.getTextStyle('MEMORIZED') }>MEMORIZED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
                        <Text style={ this.getTextStyle('NEED_PRACTICE') }>NEED PRACTICE</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        myFilterStatus: state.filterStatus,
    };
}

export default connect(mapStateToProps, {
    showAll, 
    showAMemorized, 
    showNeedPractice,
    filterStatus
})(Filter);

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#583C3C',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    buttonText: {
        color: 'white',
    },
});