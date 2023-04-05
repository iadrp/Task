import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import { TodayRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProfileAction } from "../redux/actions/profileActions";
const ProfileScreen = () => {
  const dispatch = useDispatch();
  const submitHandler = ({ firstName, lastName, email }) => {
    // console.log(todo);
    dispatch(addProfileAction(firstName, lastName, email));
  };
  return (
    <div>
      <h1>Edit Profile</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
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
              label="FirstName"
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="LastName"
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              name="lastName"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              name="email"
            />
            <br />
            <br />
            <Button variant="contained" type="submit">
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileScreen;
