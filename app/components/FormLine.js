import React from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View } from 'react-native';
import NumberTextInput from './NumberTextInput.js';

const FormLine = ({label, value, valueUpdateCB}) => {
    //console.log('VALUE UPDATE CB IN FORM LINE ' + valueUpdateCB);
    //console.log('VALUE UPDATE CB IN FORM LINE ' + typeof valueUpdateCB);
    const removeNonNumericValues = (label, value) => {
        if (!value) {
            return;
        }

        const regexNotNumberOrDot = /[^0-9.]/g;
        const regexLeadingNumber = /^0+/;

        value.replace(regexNotNumberOrDot, '');
        value.replace(regexLeadingNumber, '');

        valueUpdateCB(label, value);
    };

    const inputStyle = StyleSheet.create({
        inputContainer: {
            position:           'relative',
            display:            'flex',
            flexDirection:      'row',
            backgroundColor:    'white',
            width:              '70%',
            marginBottom:       10,
            paddingTop:         6,
            paddingBottom:      6,
            paddingLeft:        '3.333%',
            paddingRight:       '3.333%',
        },

        textContainer:
        {
            paddingTop:         15,
            paddingBottom:      15,
            marginLeft:         10,
            width:              '70%',
            overflow:           'scroll',
        },
    });

    return (
        <View style={inputStyle.inputContainer}>
            <Text style={inputStyle.textContainer}>
                {label}
            </Text>
            <NumberTextInput
                label={label}
                value={value}
                valueUpdateCB={removeNonNumericValues}
            />
        </View>
    );
};

FormLine.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    valueUpdateCB: PropTypes.func.isRequired
};

export default FormLine;