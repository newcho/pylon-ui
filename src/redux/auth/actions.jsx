const actions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",

  login: (email, password, callback) => ({
    type: actions.LOGIN_REQUEST,
    payload: { email, password, callback },
  }),
  logout: (callback) => ({
    type: actions.LOGOUT,
    payload: { callback },
  }),
};

export default actions;
