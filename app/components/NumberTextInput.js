import React from 'react';
import PropTypes from "prop-types";
import { TextInput, View } from 'react-native';

const NumberTextInput = ({label, value, valueUpdateCB}) => {
    function removeNonNumericValues(value, valueUpdateCB) {
        if (!value) {
            return;
        }

        console.log('NumberTextInput Value: ' + value);
        console.log('NumberTextInput Value: ' + value);

        const regexNotNumberOrDot = /[^0-9.]/g;
        const regexLeadingNumber = /^0+/;

        value.replace(regexNotNumberOrDot, '');
        value.replace(regexLeadingNumber, '');

        return valueUpdateCB(value);
    }

    return (
        <View>
            <TextInput
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