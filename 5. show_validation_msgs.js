all the validation related error msgs we can get through "formik.errors"

import React from 'react'
import { useFormik } from 'formik'

function YouTubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
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

            if (!values.channel) {
                errors.channel = "Required"
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
                    />            // we can add a condition like below to show validation msg on screen
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}  /
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
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YouTubeForm
