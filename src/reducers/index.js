import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import patientReducer from "./patientReducer";

export default combineReducers({
  //
  errors: errorsReducer,
  patients: patientReducer
});
