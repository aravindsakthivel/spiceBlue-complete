import React, { useEffect } from "react";
import { authActions } from "../authentication";
import { useDispatch } from "react-redux";
import { AddUpdateForm } from "./Components/TaskForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.getUserInfoProcess());
  }, [dispatch]);
  return (
    <>
      <AddUpdateForm />
    </>
  );
};

export { Dashboard };
