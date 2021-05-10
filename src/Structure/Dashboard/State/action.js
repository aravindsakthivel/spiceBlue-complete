import { taskConstants } from "./actionTypes";
import axios from "axios";

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
    url: `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const res = await axios(config);
    console.log(res);
    dispatch(addNewTaskSuccess());
    return { output: true };
  } catch (err) {
    dispatch(addNewTaskFailure(err.response));
    return { output: false };
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

const udpateTaskProcess = ({ data, id }) => async (dispatch) => {
  dispatch(udpateTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "put",
    url: `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const res = await axios(config);
    console.log(res);
    dispatch(udpateTaskSuccess());
    return { output: true };
  } catch (err) {
    dispatch(udpateTaskFailure(err.response));
    return { output: false };
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

const deleteTaskProcess = (id) => async (dispatch) => {
  dispatch(deleteTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "delete",
    url: `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios(config);
    console.log(res);
    dispatch(deleteTaskSuccess());
    return { output: true };
  } catch (err) {
    dispatch(deleteTaskFailure(err.response));
    return { output: false };
  }
};

const getAllTaskRequest = () => ({
  type: taskConstants.GET_ALL_TASK_REQUEST,
});

const getAllTaskFailure = (payload) => ({
  type: taskConstants.GET_ALL_TASK_FAILURE,
  payload,
});

const getAllTaskSuccess = (payload) => ({
  type: taskConstants.GET_ALL_TASK_SUCCESS,
  payload,
});

const getAllTaskProcess = () => async (dispatch) => {
  dispatch(getAllTaskRequest());
  const token = JSON.parse(localStorage.getItem("token"));
  const config = {
    method: "get",
    url: `https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios(config);
    // console.log(res.data.results);
    return dispatch(getAllTaskSuccess(res.data.results));
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
