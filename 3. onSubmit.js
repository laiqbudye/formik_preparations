formik provides a onSubmit function which takes latest values as an input.

e.g

import React from 'react'
import { useFormik } from 'formik'

function YouTubeForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: (values) => {             // this func will call on submit, here values get all latest form field values
            console.log("Submisssion", values)
        }
    });

    console.log(formik.errors)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>   // here we have to specify onSubmit event on form
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
