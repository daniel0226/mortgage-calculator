import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import NumberTextInput from "./NumberTextInput.js";
import { inputStyle } from "../Styles/style";

const FormLine = ({ label, value, valueUpdateCB }) => {
  //console.log('VALUE UPDATE CB IN FORM LINE ' + valueUpdateCB);
  //console.log('VALUE UPDATE CB IN FORM LINE ' + typeof valueUpdateCB);
  const removeNonNumericValues = (label, value) => {
    if (!value) {
      value = 0;
    } else {
      const regexNotNumberOrDot = /[^0-9.]/g;
      const regexLeadingNumber = /^0+/;

      value = value.replace(regexNotNumberOrDot, "");
      value = value.replace(regexLeadingNumber, "");
    }
    valueUpdateCB(label, value);
  };

  return (
    <View style={inputStyle.inputContainer}>
      <Text style={inputStyle.textContainer}>{label}</Text>
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
