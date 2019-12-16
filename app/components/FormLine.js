import React from 'react';
import PropTypes from "prop-types";
import { Text, View } from 'react-native';
import NumberTextInput from './NumberTextInput.js';

const FormLine = ({label, value, valueUpdateCB}) => {
    console.log('VALUE UPDATE CB IN FORM LINE' + valueUpdateCB);
    console.log('VALUE UPDATE CB IN FORM LINE' + typeof valueUpdateCB);
    const removeNonNumericValues = (label, value) => {
        if (!value) {
            return;
        }

        console.log('Remove Vlues being called');
        console.log('gets here???');

        const regexNotNumberOrDot = /[^0-9.]/g;
        const regexLeadingNumber = /^0+/;

        value.replace(regexNotNumberOrDot, '');
        value.replace(regexLeadingNumber, '');

        valueUpdateCB(label, value);
    };

    return (
        <View style={{flexDirection:"row"}}>
            <Text style={{paddingRight: 30}}>
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