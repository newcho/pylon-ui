import actions from "./actions";

const initState = {
  email: localStorage.getItem("email") ? localStorage.getItem("email") : null,
  auth: localStorage.getItem("auth") ? localStorage.getItem("auth") : false,
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        email: action.email,
        auth: action.auth,
      };
    default:
      return state;
  }
}
