import React, { useState } from 'react';
import { postDataApi } from "../../api/api";
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Registration = () => {
    const history = useHistory()

    const [ragistrationForm, setRagistrationForm] = useState({
        userName: "",
        password: "",
        email: "",
        userType: "user"
    })
    const [error, setError] = useState({})
    const [infoMsg, setinfoMsg] = useState('')

    // input feild onchange handeler
    const onchangeHandel = (e) => {
        const { name, value } = e.target;
        setRagistrationForm(prevState => ({
            ...prevState,
            [name]: value
        }));
        handleValidation()
    }

    // input feild validation name, password email and sap id
    // if validatin is feild show error massage

    const handleValidation = () => {
        let fields = ragistrationForm;
        let errors = {};
        let formIsValid = true;

        if (!fields["userName"]) {
            formIsValid = false;
            errors["userName"] = "Name can not be empty";
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Password can not be empty";
        }

        if (typeof fields["email"] !== "undefined") {

            if (!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        setError(errors);
        return formIsValid;
    }

    // form submit handeler
    // if email and password not correct throw error
    const formSubmitHandel = (event) => {
        event.preventDefault();

        if (handleValidation()) {
            console.log(ragistrationForm)
            postDataApi("userList", ragistrationForm).then(res => {
                if (res.status === 201) {
                    setinfoMsg("Registration successfully.")
                    setTimeout(() => {
                        setinfoMsg('')
                        history.push("/")
                    }, 1500)
                }
            })
        }
    }

    // Ragistration form containing multipule feild user name, password , email, sap id with validation

    return (
        <form className="ragistrationForm">
                <h2>User Ragistration</h2>
                <hr />
                {infoMsg ? <p className="msg-success">{infoMsg}</p> : null}
                <div className="form-group">
                    <label className="control-label">Name<span className="mandatory">*</span></label>
                    <input className="form-control" type="text" name="userName" onChange={(event) => onchangeHandel(event)} />
                    <p className="error-msg">{error["userName"]}</p>
                </div>
                <div className="form-group">
                    <label className="control-label">Password<span className="mandatory">*</span></label>
                    <input className="form-control" type="password" name="password" onChange={(event) => onchangeHandel(event)} />
                    <p className="error-msg">{error["password"]}</p>
                </div>
                 <div className="form-group">
                    <label className="control-label">Email<span className="mandatory">*</span></label>
                    <input className="form-control" type="email" name="email" onChange={(event) => onchangeHandel(event)} />
                    <p className="error-msg">{error["email"]}</p>
                </div>
                <Button size='small' color="primary" variant="contained"  onClick={(event) => formSubmitHandel(event)}>Submit</Button>
        </form>
    )
}

export default Registration;
