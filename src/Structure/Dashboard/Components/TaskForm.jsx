import React from "react";
import {
  Card,
  Title,
  TopBlock,
  AddIcon,
  BottomBlock,
  Cancel,
  Save,
} from "../Styles/AddEditForm";

const AddUpdateForm = () => {
  return (
    <Card>
      <TopBlock>
        <Title>Tasks</Title>
        <AddIcon>+</AddIcon>
      </TopBlock>
      <BottomBlock>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="title" style={{ padding: "10px" }}>
            Task description
          </label>
          <input id="title" style={{ margin: "10px", padding: "5px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="date" style={{ padding: "10px" }}>
              Date
            </label>
            <input
              id="date"
              type="date"
              style={{ margin: "10px", padding: "5px", width: "90%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="time" style={{ padding: "10px" }}>
              Time
            </label>
            <input
              id="time"
              type="time"
              style={{ margin: "10px", padding: "5px" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="title" style={{ padding: "10px" }}>
            Assign user
          </label>
          <input id="title" style={{ margin: "10px", padding: "5px" }} />
        </div>
        <div style={{float: "right", marginRight: "15px"}}>
          <Cancel>Cancel</Cancel>
          <Save>Save</Save>
        </div>
      </BottomBlock>
    </Card>
  );
};

export { AddUpdateForm };
