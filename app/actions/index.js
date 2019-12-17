import * as constants from "../constants/constants";

export const formUpdate = (label, value) => {
  return {
    type: constants.FORM_UPDATE,
    label,
    value
  };
};
