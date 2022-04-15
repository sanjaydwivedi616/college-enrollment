import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../redux/login/loginAction';
import { useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';

/**
 * Input feild onchange handeler using formic
 * Login form have two feild email and password with validation.
 * If validatin is feild show error massage.
 * If user name and password feils is empty and trying to login showing error massage
 * Both feils is required
 * After login redirecting to collage list page
 */
const Login = ({dispatcher, errorMsg}) => {

    // const dispatcher = useDispatch()
    // const { errorMsg } = useSelector(state => state.user)
    const history = useHistory()
    const registrationPage =() =>{
        history.push("/user-registration")
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string().required('User name is required'),
            password: Yup.string().required('Password id is Required'),
        }),
        onSubmit: values => {
            const userLoginData = { ...values }
            dispatcher(loginUser(userLoginData))
        }
    });

    return (
        <form className="form-group login-form" autoComplete="off" onSubmit={formik.handleSubmit}>
            <h2>Login</h2>
            <hr />
            <FormHelperText error id="component-error-text">{errorMsg}</FormHelperText>
            <TextField id="filled-size-normal" fullWidth type="text" label="User Name"
                name="userName" {...formik.getFieldProps('userName')} />
            <FormHelperText error id="component-error-text">{formik.errors.userName}</FormHelperText>

            <TextField id="filled-size-normal" fullWidth label="Password" type="password"
                name="password"  {...formik.getFieldProps('password')} />
            <FormHelperText error id="component-error-text">{formik.errors.password}</FormHelperText>

            <Button type="submit" size="small" variant="contained" color="primary">Login</Button>
            <Link href="#" className="float-right"  onClick={registrationPage}>Registration</Link>

        </form>
    )
}

export default Login;
