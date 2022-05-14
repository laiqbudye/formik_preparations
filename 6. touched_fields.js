in the previous file we saw how to show validations msgs on screen, 
but the problm with that approach is, it will show error msgs for the fields which user havent visited yet.

to solve that issue we can use "onBlur" event, which tells if that field is visited or not.


e.g

import React from 'react'
import { useFormik } from 'formik'

function YouTubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {             // this func will call on submit, here values get all latest form field values
            console.log("Submisssion", values)
        },
        validate: (values) => {             // to validate user inputs, this function should return an error obj
            let errors = {}

            if (!values.name) {
                errors.name = "Required"
            }

            if (!values.email) {
                errors.email = "Required"
            }

            return errors;
        }

    });

    console.log(formik.errors)
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
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}   // this checks if this field is touched or not by user
                    />        // here formik.touched is an obj which contains records of field is visited or not.
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
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
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default YouTubeForm
