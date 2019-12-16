import React from 'react'
import PropTypes from "prop-types";
import FormLine from '../components/FormLine'
import {StyleSheet, Text, View} from 'react-native';
import { formUpdate } from '../actions/index'
import { connect } from 'react-redux'


const MortgageFormContainer = ({ formData, formUpdate }) => {

    const valueUpdateCB = (label, value) => {
        if (!isNaN(value)) {
            formUpdate(label, value);
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <FormLine
                label={formData.mortgageAmount.label}
                value={formData.mortgageAmount.value}
                valueUpdateCB={valueUpdateCB}
            />
            <FormLine
                label={formData.interestRate.label}
                value={formData.interestRate.value}
                valueUpdateCB={valueUpdateCB}
            />
            <FormLine
                label={formData.mortgagePeriod.label}
                value={formData.mortgagePeriod.value}
                valueUpdateCB={valueUpdateCB}
            />
        </View>
    );
};

const formPropType = PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
});

MortgageFormContainer.propTypes = {
    formData: PropTypes.shape({
        mortgageAmount: formPropType,
        interestRate: formPropType,
        mortgagePeriod: formPropType,
    }).isRequired,
    formUpdate: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    console.log('state: ' + state);
    console.log('state: ' + JSON.stringify(state));
    return {
        formData: state.formData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        formUpdate: (label, value) => dispatch(formUpdate(label, value))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MortgageFormContainer);