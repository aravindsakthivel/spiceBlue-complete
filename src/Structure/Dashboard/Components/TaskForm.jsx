/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Cancel, Save, CoverOver, Calender } from "../Styles/AddEditForm";
import { taskActions } from "../State/action";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/taskFormStyle.css";

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
    let mDisplay;
    let hDisplay;
    // Minute manipulation
    if (h === 0 || (h < 12 && h !== 0)) {
      if (m === 0) {
        mDisplay = `${m}0am`;
      } else {
        mDisplay = `${m}am`;
      }
    } else if (h >= 12) {
      hDisplay = h;
      if (m === 0) {
        mDisplay = `${m}0pm`;
      } else {
        mDisplay = `${m}pm`;
      }
    }
    // Hour manipulation
    if (h === 0) {
      hDisplay = 12;
    } else if (h < 12 && h !== 0) {
      hDisplay = h;
    } else if (h === 12) {
      hDisplay = h;
    } else if (h > 12) {
      hDisplay = `${h - 12}`;
    }
    taskObj.task_time = `${hDisplay}:${mDisplay}`;
    taskObj.task_date = crnTask.task_date;
    taskObj.task_msg = crnTask.task_msg;
    time = crnTask.task_time;
  }
  const [taskData, setTaskData] = useState(taskObj);
  const [selTime, setTime] = useState(time);
  const handleInput = (e) => {
    if (e.target.name === "task_time") {
      let [hours, mins] = e.target.value.split(":");
      if (mins.includes("am")) {
        mins = mins.split("am")[0];
        if (Number(hours) === 12) {
          hours = 0;
        }
      } else {
        mins = mins.split("pm")[0];
        if (Number(hours) !== 12) {
          hours = Number(hours) + 12;
        }
      }
      // console.log(hours, mins);
      hours = Number(hours) * 60 * 60;
      mins = Number(mins) * 60;
      setTime(hours + mins);
      setTaskData({ ...taskData, task_time: e.target.value });
    } else {
      setTaskData({ ...taskData, [e.target.name]: e.target.value });
    }
  };
  const deleteTask = () => {
    if (window.confirm(`Are you sure you want to delete this Task`)) {
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
  // console.log(taskData, selTime);
  return (
    <>
      {(isAddingTask || isUpdatingTask || isDeletingTask) && <CoverOver />}
      <form onSubmit={handleSubmit}>
        <div className="form-group ml-3 mr-4">
          <label htmlFor="taskDesc" className="ml-1 mt-2">
            Task Description
          </label>
          <input
            type="text"
            className="form-control ml-1"
            id="taskDesc"
            placeholder="Task"
            name="task_msg"
            onChange={handleInput}
            value={taskData.task_msg}
          />
        </div>
        <div className="row ml-1 mr-1">
          <div className="col-6 pr-1">
            <label htmlFor="date" className="ml-1">
              Date
            </label>
            <Calender
              type="date"
              id="date"
              className="form-control"
              name="task_date"
              onChange={handleInput}
              value={taskData.task_date}
              placeholder="Date"
            />
          </div>
          <div className="col-6 pl-1 timeDiv">
            <label htmlFor="time" className="ml-1">
              Time
            </label>
            <select
              className="custom-select ml-1"
              id="time"
              onChange={handleInput}
              name="task_time"
              value={taskData.task_time}
            >
              <option defaultValue>Time</option>
              {new Array(24).fill(-1).map((val, ind) => {
                if (ind === 0) {
                  return (
                    <React.Fragment key={ind}>
                      <option value={`12:00am`}>{`12:00am`}</option>
                      <option value={`12:30am`}>{`12:30am`}</option>
                    </React.Fragment>
                  );
                }
                if (ind < 12) {
                  return (
                    <React.Fragment key={ind}>
                      <option value={`${ind}:00am`}>{`${ind}:00am`}</option>
                      <option value={`${ind}:30am`}>{`${ind}:30am`}</option>
                    </React.Fragment>
                  );
                } else if (ind === 12) {
                  return (
                    <React.Fragment key={ind}>
                      <option value={`12:00pm`}>{`12:00pm`}</option>
                      <option value={`12:30pm`}>{`12:30pm`}</option>
                    </React.Fragment>
                  );
                } else if (ind >= 12) {
                  return (
                    <React.Fragment key={ind}>
                      <option value={`${ind - 12}:00pm`}>{`${
                        ind - 12
                      }:00pm`}</option>
                      <option value={`${ind - 12}:30pm`}>{`${
                        ind - 12
                      }:30pm`}</option>
                    </React.Fragment>
                  );
                }
              })}
            </select>
          </div>
        </div>
        <div className="form-group ml-3 mr-4 mt-3">
          <label htmlFor="selectName" className="ml-1">
            Assign User
          </label>
          <select className="custom-select ml-1" id="selectName">
            <option value={userName} defaultValue>
              {userName}
            </option>
          </select>
        </div>
        <div>
          {props?.currentOper !== undefined &&
            props.currentOper === "taskUpdate" && (
              <div
                className="btn-group btn-group-toggle mr-3 mt-4 ml-3"
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
            <Cancel
              onClick={() => setOper("tasks")}
              className="btn btn-light mr-3"
            >
              Cancel
            </Cancel>
            <Save className="btn btn-success" type="submit">
              Save
            </Save>
          </div>
        </div>
      </form>
    </>
  );
};

export { AddUpdateForm };
