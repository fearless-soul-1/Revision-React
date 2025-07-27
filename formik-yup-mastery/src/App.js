import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  // Hint: Define the validation schema using Yup to validate email and password
  // Hint: Email should be a valid email format and required
  // Hint: Password should be at least 6 characters and required

  const initialValues = {
    // Hint: Set initial values for email and password fields (empty strings to start with)
    email: "",
    password:"",

  };
  
  const validationSchema = Yup.object({
    // Add your Yup validation here
    email: Yup.string().email("Invalid email format").required("Email is required."),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")

  });

  

  // Hint: Create an onSubmit function that logs form values to the console when submitted

  const onSubmit = (values, { resetForm }) => {
    console.log("form values: ", values);
    alert("Form submitted!");
    resetForm();
  }
 

  return (
    <div>
      <h1>Simple Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // Hint: Pass the initialValues, validationSchema, and onSubmit function here
      >
        {() => (
          <Form>
            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              {/* Hint: Display ErrorMessage for email if validation fails */}
              <ErrorMessage name="email" component="p" style={{color:"red"}} />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              {/* Add the field type password  */}
              <Field type="password" id="password" name="password"/>
              {/* Hint: Display ErrorMessage for password if validation fails */}
              <ErrorMessage name="password" component="p" style={{color:"red"}} />
            </div>

           
            <button type="submit">Submit</button> 
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
