import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { postDataApi } from '../../api/api';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

/**
 * Student ragistration form
 * its have many feild like  firstName, lastName, email,contact, 10% , 12%, select course
 * all are required
 */

const StudentRagistrationForm = (props) => {
    const history = useHistory();
    const [msg, setMsg] = useState('');

    const formik = useFormik({
        initialValues: {
            userName: props.userName,
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            tenthPercentage: "",
            twelvePercentage: "",
            selectCourse: ""
        },
        validationSchema: Yup.object({

            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First name is required'),

            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Last name is required'),

            email: Yup.string().email('Invalid email id')
                .required('Email id is Required'),

            contact: Yup.string()
                .max(10, 'contact should be 10 characters').min(10)
                .required('Contact number is Required'),

            tenthPercentage: Yup.string()
                .required('10TH Percentage is Required'),

            twelvePercentage: Yup.string()
                .required('12TH Percentage is Required'),
        }),

        onSubmit: values => {
            const studentRagistration = {
                ...values, status: "Pending"
            }
            try {
                postDataApi(`studentRagistration`, studentRagistration).then(res => {
                    if (res.status === 201) {
                        setMsg("Ragister successfully");
                        setTimeout(() =>{
                            history.push("/application-status")
                        }, 2000)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <>
            <h2>Student ragistration form</h2>
            <hr />
            <h3>{msg}</h3>
            <form className="ragistrationForm" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label className="control-label">User Name : </label>
                    <input id="userName" type="text" className="form-control" value={props.userName} disabled
                        {...formik.getFieldProps('userName')} />
                </div>
                <div className="form-group">
                    <label className="control-label">First Name : </label>
                    <input id="firstName" type="text" className="form-control" {...formik.getFieldProps('firstName')} />
                    <div className="error-msg">{formik.errors.firstName}</div>
                </div>
                <div className="form-group">
                    <label className="control-label">Last Name : </label>
                    <input id="lastName" className="form-control" type="text" {...formik.getFieldProps('lastName')} />
                    <div className="error-msg">{formik.errors.lastName}</div>
                </div>
                <div className="form-group">
                    <label className="control-label">Email Address : </label>
                    <input id="email" className="form-control" type="email" {...formik.getFieldProps('email')} />
                    <div className="error-msg">{formik.errors.email}</div>
                </div>
                <div className="form-group">
                    <label className="control-label">Contact : </label>
                    <input id="contact" className="form-control" type="text" {...formik.getFieldProps('contact')} />
                    <div className="error-msg">{formik.errors.contact}</div>
                </div>

                <div className="form-group">
                    <label className="control-label">10th % : </label>
                    <input id="tenthPercentage" className="form-control" type="text" {...formik.getFieldProps('tenthPercentage')} />
                    <div className="error-msg">{formik.errors.tenthPercentage}</div>
                </div>
                <div className="form-group">
                    <label className="control-label">12th % : </label>
                    <input id="twelvePercentage" className="form-control" type="text" {...formik.getFieldProps('twelvePercentage')} />
                    <div className="error-msg">{formik.errors.twelvePercentage}</div>
                </div>
                <div className="form-group">
                    <label className="control-label">Select Course : </label>
                    <select name="course" className="form-control" {...formik.getFieldProps('selectCourse')}>
                        <option value="" label="Select Course" />
                        {props.courseBranch?.map((course,index) => {
                            return <option key={index} value={course} label={course} />
                        })
                        }
                    </select>
                    <div className="error-msg">{formik.errors.timeSlot}</div>
                </div>
                {props.children}
                <Button size='small' color="primary" variant="contained" type="submit">Submit</Button>
            </form>
        </>
    )
}

export default StudentRagistrationForm;
