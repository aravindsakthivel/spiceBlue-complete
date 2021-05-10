import { authConstants } from "./actionTypes";
import axios from "axios";


const getUserInfoRequest = () => ({
  type: authConstants.GET_USER_INFO_REQUEST,
});

const getUserInfoSuccess = (payload) => ({
  type: authConstants.GET_USER_INFO_SUCCESS,
  payload,
});

const getUserInfoFailure = (payload) => ({
  type: authConstants.GET_USER_INFO_FAILURE,
  payload,
});
const getUserInfoProcess = () => async (dispatch) => {
  dispatch(getUserInfoRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "get",
    url: `https://stage.api.sloovi.com/user`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios(config);
    const { name, phone, id } = res.data.results;
    localStorage.setItem("userName", JSON.stringify(name));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("userId", JSON.stringify(id));
    return dispatch(getUserInfoSuccess(res));
  } catch (err) {
    return dispatch(getUserInfoFailure(err.response));
  }
};

const userLoginRequest = () => ({
  type: authConstants.USERS_LOGIN_REQUEST,
});

const userLoginSuccess = (payload) => ({
  type: authConstants.USERS_LOGIN_SUCCESS,
  payload,
});

const userLoginFailure = (payload) => ({
  type: authConstants.USERS_LOGIN_FAILURE,
  payload,
});

const userLoginProcess = (data) => async (dispatch) => {
  dispatch(userLoginRequest());

  const config = {
    method: "post",
    url: `https://stage.api.sloovi.com/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const res = await axios(config);
    const { token, icon } = res.data.results;
    localStorage.setItem("userEmail", JSON.stringify(data.email));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("icon", JSON.stringify(icon));
    return dispatch(userLoginSuccess(res));
  } catch (err) {
    console.log(err)
    return dispatch(userLoginFailure(err.response));
  }
};



export const authActions = {
  userLoginProcess: userLoginProcess,
  getUserInfoProcess: getUserInfoProcess,
};
