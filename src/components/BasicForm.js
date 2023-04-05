import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import { TodayRounded } from "@mui/icons-material";
import { addTodo } from "../redux/actions/todoActions";
import { useDispatch } from "react-redux";
const BasicForm = () => {
  const dispatch = useDispatch();
  const submitHandler = ({ todo }) => {
    console.log(todo);
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <Formik
        initialValues={{
          todo: "",
        }}
        onSubmit={(values, { resetForm }) => {
          submitHandler(values);
          // resetForm({values:[ todo: ""] });
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form>
            <TextField
              id="outlined-basic"
              label="Add Todo"
              variant="outlined"
              value={values.todo}
              onChange={handleChange}
              name="todo"
            />
            <br />
            <br />
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;
