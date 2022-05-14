useFormik
  is a hook provided by formik library.
  
  import { useFormik } from 'formik'
  
  const formik = useFormik({
    initialValues: {   // properties inside this obj must match name attribute of html element
      name: '',     // we can assign default values here
      email: ''
    }
  })
  
  
  e.g

import React from 'react'
import { useFormik } from 'formik'

function YouTubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',    // this should be same as name property of input i.e (name="name")
            email: ''
        },

    });

    console.log(formik.values)  // it contains all the latest values of form...
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        onChange={formik.handleChange}   // it will automatically update name 
                        value={formik.values.name}    // here .name is because of name property of an input

                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}

                    />
                </div>
