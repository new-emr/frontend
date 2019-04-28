import { GET_ALL_PATIENT } from "../actions/types";

const initialState = {
  patients: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PATIENT:
      return {
        ...state,
        patients: action.payload
      };

    default:
      return state;
  }
}
