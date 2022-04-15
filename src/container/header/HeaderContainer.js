import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header"


const HeaderContainer = () => {
    const { loginStatus } = useSelector(state => state.user);
    const state = useSelector(state => state.user);
    const userName = state?.userInfo[0]?.userName;
    const dispatch = useDispatch();
    
    return (
        <Header loginStatus={loginStatus} userName={userName} dispatch={dispatch}/>
    )
}

export default HeaderContainer;