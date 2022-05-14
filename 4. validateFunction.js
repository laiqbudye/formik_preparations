formik allows a way to validate inputs added by users.

it takes 3rd argument as "validate" which is a function.

e.g

import React from 'react'
import { useFormik } from 'formik'

function YouTubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: (values) => {             
            console.log("Submisssion", values)
        },
        validate: (values) => {             // to validate user inputs, this function should return an error obj
            let errors = {}

            if (!values.name) {
                errors.name = "Required"     
            }

            if (!values.email) {
                errors.email = "Required"     // here prop name must be same as name prop of html element.  i.e email is the name of email i/p element
            }

            if (!values.channel) {
                errors.channel = "Required"
            }

            return errors;   // validate function must return an object 
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

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YouTubeForm
