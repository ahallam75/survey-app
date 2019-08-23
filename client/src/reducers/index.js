import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form"; // 'as' allow you to rename the variable, i.e. - 'reducer' to 'reduxForm'.
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
