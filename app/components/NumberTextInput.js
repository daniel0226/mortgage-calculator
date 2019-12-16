import React from 'react';
import PropTypes from "prop-types";
import {StyleSheet, TextInput, View } from 'react-native';

const NumberTextInput = ({label, value, valueUpdateCB}) => {
    //console.log(label + " " + value + " @ " + valueUpdateCB);
    //Label = mortgage years, value = num, valueUpdateCB = function
    function removeNonNumericValues(label, value, valueUpdateCB) {
        if (!value)return;

        const regexNotNumberOrDot = /[^0-9.]/g;
        const regexLeadingNumber = /^0+/;

        value.replace(regexNotNumberOrDot, '');
        value.replace(regexLeadingNumber, '');

        return valueUpdateCB(label, value);
    }

    const numStyle = StyleSheet.create({
        numContainer: {
            backgroundColor:    'white',
            width:              '26.333%',
            display:            'flex',
            position:           'relative',
            flexDirection:      'row',
            shadowColor:        'black',
            shadowOffset:       {width:0, height:0},
            shadowOpacity:      0.45,
            shadowRadius:       2,
        },
        numFont:{
            fontSize:           30,
            paddingLeft:        5,
            width:              '100%',
        }
    });

    return (
        <View style={numStyle.numContainer}>
            <TextInput
                style={numStyle.numFont}
                value={value.toString()}
                onChangeText={text => removeNonNumericValues(label, text, valueUpdateCB)}
                keyboardType={'numeric'}
            />
        </View>
    );
};

NumberTextInput.propTypes = {
    value: PropTypes.number.isRequired,
    valueUpdateCB: PropTypes.func.isRequired
};

export default NumberTextInput;