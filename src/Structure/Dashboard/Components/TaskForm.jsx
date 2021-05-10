import React, { useState } from "react";
import { Cancel, Save, CoverOver } from "../Styles/AddEditForm";
import { taskActions } from "../State/action";
import { useDispatch, useSelector } from "react-redux";

const AddUpdateForm = (props) => {
  const dispatch = useDispatch();
  const { setOper } = props;
  const isAddingTask = useSelector((state) => state.task.isAddingTask);
  const isUpdatingTask = useSelector((state) => state.task.isUpdatingTask);
  const isDeletingTask = useSelector((state) => state.task.isDeletingTask);
  const allTask = useSelector((state) => state.task.allTasks);
  const taskObj = {
    assigned_user: localStorage.getItem("userId"),
    task_date: "",
    task_time: "",
    is_completed: 0,
    time_zone: 1520352472,
    task_msg: "",
  };
  let time = "";
  let crnTask = {};
  if (props?.currentOper !== undefined && props.currentOper === "taskUpdate") {
    crnTask = allTask[props.crnEdit];
    let time = Number(crnTask.task_time);
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let hDisplay = h < 10 ? `0${h}` : h;
    let mDisplay = m < 10 ? `0${m}` : m;
    taskObj.task_time = `${hDisplay}:${mDisplay}`;
    taskObj.task_date = crnTask.task_date;
    taskObj.task_msg = crnTask.task_msg;
    time = crnTask.task_time;
  }
  const [taskData, setTaskData] = useState(taskObj);
  const [selTime, setTime] = useState(time);
  const handleInput = (e) => {
    if (e.target.name === "task_time") {
      let [hours, mins] = e.target.value.split(":").map(Number);
      hours = hours * 60 * 60;
      mins = mins * 60;
      setTime(hours + mins);
      setTaskData({ ...taskData, task_time: e.target.value });
    } else {
      setTaskData({ ...taskData, [e.target.name]: e.target.value });
    }
  };
  const deleteTask = () => {
    if (window.confirm(`Do you really want to delete ${crnTask.task_msg}`)) {
      let { id } = crnTask;
      dispatch(taskActions.deleteTaskProcess(id)).then((res) => {
        if (res.output) {
          setOper("tasks");
        }
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...taskData, task_time: Number(selTime) };
    if (
      props?.currentOper !== undefined &&
      props.currentOper === "taskUpdate"
    ) {
      let { id } = crnTask;
      dispatch(taskActions.udpateTaskProcess({ data, id })).then((res) => {
        if (res.output) {
          setOper("tasks");
        }
      });
    } else {
      dispatch(taskActions.addNewTaskProcess(data)).then((res) => {
        if (res.output) {
          setOper("tasks");
        }
      });
    }
  };
  const userName = JSON.parse(localStorage.getItem("userName"));
  // console.log(taskData);
  return (
    <>
      {(isAddingTask || isUpdatingTask || isDeletingTask) && <CoverOver />}
      <form onSubmit={handleSubmit}>
        <div className="form-group ml-3 mr-4">
          <label htmlFor="formGroupExampleInput">Task Description</label>
          <input
            type="text"
            className="form-control ml-1"
            id="formGroupExampleInput"
            placeholder="Task"
            name="task_msg"
            onChange={handleInput}
            value={taskData.task_msg}
          />
        </div>
        <div className="row ml-1 mr-1">
          <div className="col-6">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              className="form-control"
              name="task_date"
              onChange={handleInput}
              value={taskData.task_date}
            />
          </div>
          <div className="col-6">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              className="form-control"
              name="task_time"
              onChange={handleInput}
              value={taskData.task_time}
            />
          </div>
        </div>
        <div className="form-group ml-3 mr-4 mt-3">
          <label htmlFor="selectName">Assign User</label>
          <select className="custom-select" id="selectName">
            <option value={userName} defaultValue>
              {userName}
            </option>
          </select>
        </div>
        <div>
          {props?.currentOper !== undefined &&
            props.currentOper === "taskUpdate" && (
              <div
                className="btn-group btn-group-toggle mr-3 mt-4 ml-2"
                data-toggle="buttons"
              >
                <label className="btn btn-light border">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    onClick={deleteTask}
                  />{" "}
                  <img src="./deleteIcon.svg" alt="editIcon" />
                </label>
              </div>
            )}
          <div className="float-right m-4">
            <Cancel onClick={() => setOper("tasks")}>Cancel</Cancel>
            <Save className="bg-success" type="submit">
              Save
            </Save>
          </div>
        </div>
      </form>
    </>
  );
};

export { AddUpdateForm };
