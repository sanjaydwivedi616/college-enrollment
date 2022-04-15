

import { useDispatch, useSelector } from 'react-redux';
import Login from "../../components/login/Login"

const LoginContainer = () => {
    const dispatcher = useDispatch()
    const { errorMsg } = useSelector(state => state.user);
    return (
        <Login dispatcher={dispatcher} errorMsg={errorMsg} />
    )

}

export default LoginContainer;