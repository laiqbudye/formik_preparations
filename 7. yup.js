we have created a validate function in previous files but 'yup' is a library which simplifies that thing for us.

e.g

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values) => {             // this func will call on submit, here values get all latest form field values
    console.log("Submisssion", values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required").min(4).max(8)
})


function YouTubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema           // instead of creating a validate function we can pass validationSchema created using yup library
    });

    console.log(formik.values)
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
                        onBlur={formik.handleBlur}   // this checks of this field is touched or not by user
                    />
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

                <div className="form-control">
                    <label htmlFor="channel"></label>
                    <input
                        type="text"
                        name="channel"
                        id="channel"
                        placeholder="Enter Channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>
                <button type="submit">Submit</button>
                <button type="submit" onClick={(e) => formik.resetForm()}>Reset</button>
            </form>
        </div>
    )
}

export default YouTubeForm
