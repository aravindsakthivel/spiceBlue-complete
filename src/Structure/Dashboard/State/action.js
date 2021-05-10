import { taskConstants } from "./actionTypes";
import axios from "axios";

const SLOVI_API = process.env.API_BASE_URL;

const addNewTaskRequest = () => ({
  type: taskConstants.ADD_NEW_TASK_REQUEST,
});

const addNewTaskFailure = (payload) => ({
  type: taskConstants.ADD_NEW_TASK_FAILURE,
  payload,
});

const addNewTaskSuccess = () => ({
  type: taskConstants.ADD_NEW_TASK_SUCCESS,
});

const addNewTaskProcess = (data) => async (dispatch) => {
  dispatch(addNewTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "post",
    url: `https://stage.api.sloovi.com/lead_58be137bfde045e7a0c8d107783c4598`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const res = await axios(config);
    console.log(res)
    return dispatch(addNewTaskSuccess());
  } catch (err) {
    return dispatch(addNewTaskFailure(err.response));
  }
};


const udpateTaskRequest = () => ({
  type: taskConstants.UPDATE_TASK_REQUEST,
});

const udpateTaskFailure = (payload) => ({
  type: taskConstants.UPDATE_TASK_FAILURE,
  payload,
});

const udpateTaskSuccess = () => ({
  type: taskConstants.UPDATE_TASK_SUCCESS,
});

const udpateTaskProcess = ({data, id}) => async (dispatch) => {
  dispatch(udpateTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "put",
    url: `https://stage.api.sloovi.com/lead_58be137bfde045e7a0c8d107783c4598/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const res = await axios(config);
    console.log(res);
    return dispatch(udpateTaskSuccess());
  } catch (err) {
    return dispatch(udpateTaskFailure(err.response));
  }
};

const deleteTaskRequest = () => ({
  type: taskConstants.DELETE_TASK_REQUEST,
});

const deleteTaskFailure = (payload) => ({
  type: taskConstants.DELETE_TASK_FAILURE,
  payload,
});

const deleteTaskSuccess = () => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
});

const deleteTaskProcess = ({ data, id }) => async (dispatch) => {
  dispatch(deleteTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "delete",
    url: `https://stage.api.sloovi.com/lead_58be137bfde045e7a0c8d107783c4598/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const res = await axios(config);
    console.log(res);
    return dispatch(deleteTaskSuccess());
  } catch (err) {
    return dispatch(deleteTaskFailure(err.response));
  }
};

const getAllTaskRequest = () => ({
  type: taskConstants.DELETE_TASK_REQUEST,
});

const getAllTaskFailure = (payload) => ({
  type: taskConstants.DELETE_TASK_FAILURE,
  payload,
});

const getAllTaskSuccess = () => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
});

const getAllTaskProcess = ({ data, id }) => async (dispatch) => {
  dispatch(getAllTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "delete",
    url: `https://stage.api.sloovi.com/lead_58be137bfde045e7a0c8d107783c4598/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const res = await axios(config);
    return dispatch(getAllTaskSuccess(res.result));
  } catch (err) {
    return dispatch(getAllTaskFailure(err.response));
  }
};

export const taskActions = {
  addNewTaskProcess: addNewTaskProcess,
  udpateTaskProcess: udpateTaskProcess,
  deleteTaskProcess: deleteTaskProcess,
  getAllTaskProcess: getAllTaskProcess,
};