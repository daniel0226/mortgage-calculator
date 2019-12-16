import * as constants from '../constants/constants'

const initialState = {
    formData: {
        mortgageAmount: {
            label: constants.MORTGAGE_AMOUNT,
            value: 0
        },
        interestRate: {
            label: constants.MORTGAGE_INTEREST,
            value: 0
        },
        mortgagePeriod: {
            label: constants.MORTGAGE_YEARS,
            value: 0
        }
    }
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FORM_UPDATE:
            console.log('FORM UPDATE CALLED');
            break;
        default:
            console.log('UNKNOWN ACTION: ' + JSON.stringify(action));
            break;
    }
    // For now, don't handle any actions
    // and just return the state given to us.
    console.log('state: ' + JSON.stringify(state));
    return state
}