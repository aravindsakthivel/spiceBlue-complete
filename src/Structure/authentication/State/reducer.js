import { authConstants } from "./actionTypes";

const initState = {
  isLoggingIn: false,
  loginError: false,
  loginErrorMessage: "",
  isGettingInfo: false,
  isErrorGettingInfo: false,
  userId: localStorage.getItem("userId") || "",
  userEmail: localStorage.getItem("userEmail") || "",
  gettingUserInfoErr: "",
};

const authentication = (state = initState, { type, payload }) => {
  switch (type) {
    case authConstants.USERS_LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case authConstants.USERS_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loginError: false,
      };
    case authConstants.USERS_LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginError: true,
        loginErrorMessage: payload,
      };
    case authConstants.GET_USER_INFO_REQUEST:
      return{
        ...state,
        isGettingInfo: true,
      }
    case authConstants.GET_USER_INFO_SUCCESS:
      return{
        isGettingInfo: false
      }
    case authConstants.GET_USER_INFO_FAILURE:
      return{
        isErrorGettingInfo: true
      }
    default:
      return state;
  }
};

export { authentication };
