import React from "react";
import { Avatar } from "../Styles/AddEditForm";

const TaskCard = ({ allTask, setOper, setCrnEdit }) => {
  let icon = JSON.parse(localStorage.getItem("icon"));
  // console.log(allTask)
  const editFn = (ind) => {
    setOper("taskUpdate")
    setCrnEdit(ind)
  }
  return (
    allTask !== undefined &&
    allTask.length > 0 &&
    allTask.map(({ task_msg: task, task_date: date }, index) => (
      <div className="card m-4" key={index}>
        <div className="card-body d-flex justify-content-between">
          <div className="d-flex">
            <Avatar src={icon} alt="Avatar" className="avatar" />
            <div className="ml-2">
              <p className="m-0">{task}</p>
              <p className="m-0 text-danger">{date}</p>
            </div>
          </div>
          <div>
            <div
              className="btn-group btn-group-toggle mr-3"
              data-toggle="buttons"
            >
              <label className="btn btn-light border">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autoComplete="off"
                  onClick = {() => editFn(index)}
                />{" "}
                <img src="./editIcon.svg" alt="editIcon" />
              </label>
            </div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-light border">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autoComplete="off"
                />{" "}
                <img src="./bellIcon.svg" alt="bellIcon" />
              </label>
              <label className="btn btn-light border">
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autoComplete="off"
                />{" "}
                <img src="./checkIcon.svg" alt="checkIcon" />
              </label>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export { TaskCard };
