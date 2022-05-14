Formik provides 4 components:-
  1. Formik
  2. Form
  3. Field
  4. ErrorMessage
  
  
  1. Formik - its a replacement to useFormik hook. it accepts same params as props which we pass to useFormik hook.
  
  2. Form - we need to replace normal form element with Form component & then we can remove onSubmit prop from form element.
            this is possible because Form component is a small wrapper around normal form element & automatically hooks into formik's handleSubmit method.
            in short it automatically links onSubmit method of Formik component.
            
            
 3. Field - we need to replace input elements with Field component from Formik. at last it renders input element only on the DOM.
            when we use Field component we dont need to add onChange, onBlur & value, Field component takes care of all these internally.
            
 4. ErrorMessage - we can replace "formik.errors" with ErrorMessage component. it takes only on prop which is a name of element.
                   behind the scenes it checks if the Field is visited & there is invalid value then only it will show the error msg.
                   
                   
                   
  e.g  (example from previous page with above changes)

import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Submisssion", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required").min(4).max(8),
});

function FormikComponent() {
  return (
    <Formik           // replaced useFormik with Formik component
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>       // removd onSubmit as Form component will do that automatically
        <div className="form-control">
          <label htmlFor="name"></label>
          <Field type="text" name="name" id="name" placeholder="Enter Name" />     // replaced input with Field & removed events like onChange, onBlur
          <ErrorMessage name="name" />      // replaced formik.errors with ErrorMessage components
        </div>

        <div className="form-control">
          <label htmlFor="email"></label>
          <Field type="email" name="email" id="email" placeholder="Enter Email" />  
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel"></label>
          <Field type="text" name="channel" id="channel" placeholder="Enter Channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikComponent;
