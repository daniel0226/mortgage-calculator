import * as constants from "../constants/constants";

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

function getLabelToUpdate(labelArray, labelStr) {
  switch (labelStr) {
    case constants.MORTGAGE_AMOUNT:
      return labelArray[1];
    case constants.MORTGAGE_INTEREST:
      return labelArray[0];
    case constants.MORTGAGE_YEARS:
      return labelArray[2];
    default:
      console.log("Nani?");
      break;
  }
  return "";
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FORM_UPDATE:
      let label = getLabelToUpdate(
        Object.keys(state.formData).sort(),
        action.label
      );
      return {
        ...state,
        formData: {
          ...state.formData,
          [label]: {
            ...state.formData[label],
            value: parseInt(action.value)
          }
        }
      };
    default:
      console.log("UNKNOWN ACTION: " + JSON.stringify(action));
      break;
  }
  // For now, don't handle any actions
  // and just return the state given to us
  console.log("state: " + JSON.stringify(state));
  return state;
}
