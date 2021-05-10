import { taskConstants } from "./actionTypes";

export { taskConstants } from "./actionTypes";

const initState = {
  isAddingTask: false,
  isErrorAddingTask: false,
  isUpdatingTask: false,
  isErrorUpdatingTask: false,
  isDeletingTask: false,
  isErrorDeletingTask: false,
  isGettingAllTask: false,
  isErrorGettingAllTask: false,
  allTasks: [],
  errorMessage: "",
};

const task = (state = initState, { type, payload }) => {
  switch (type) {
    case taskConstants.ADD_NEW_TASK_REQUEST:
      return {
        ...state,
        isAddingTask: true,
      };
    case taskConstants.ADD_NEW_TASK_FAILURE:
      return {
        ...state,
        isErrorAddingTask: true,
        errorMessage: payload,
        isAddingTask: false,
      };
    case taskConstants.ADD_NEW_TASK_SUCCESS:
      return {
        ...state,
        isAddingTask: false,
      };
    case taskConstants.UPDATE_TASK_REQUEST:
      return {
        ...state,
        isUpdatingTask: true,
      };
    case taskConstants.UPDATE_TASK_FAILURE:
      return {
        ...state,
        isErrorUpdatingTask: true,
        errorMessage: payload,
        isUpdatingTask: true,
      };
    case taskConstants.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isUpdatingTask: false,
      };
    case taskConstants.DELETE_TASK_REQUEST:
      return {
        ...state,
        isDeletingTask: true,
      };
    case taskConstants.DELETE_TASK_FAILURE:
      return {
        ...state,
        isErrorDeletingTask: true,
        errorMessage: payload,
        isDeletingTask: true,
      };
    case taskConstants.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isDeletingTask: false,
      };
    case taskConstants.GET_ALL_TASK_REQUEST:
      return {
        ...state,
        isGettingAllTask: true,
      };
    case taskConstants.GET_ALL_TASK_FAILURE:
      return {
        ...state,
        isErrorGettingAllTask: true,
        errorMessage: payload,
        isGettingAllTask: false,
      };
    case taskConstants.GET_ALL_TASK_SUCCESS:
      return {
        ...state,
        isGettingAllTask: false,
        allTasks: payload,
      };
    default:
      return state;
  }
};

export { task };
