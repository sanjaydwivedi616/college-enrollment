import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LogoutUser } from "../../redux/login/loginAction"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";


/**
 * Header have login and logout button
 * If Login is true we can naviget collage list page
 * if logout go to login page
 */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ loginStatus, userName, dispatch }) => {

    const classes = useStyles();
    const history = useHistory();

    if (loginStatus) {
        history.push("/collage-list")
    } else {
        history.push("/")
    }

    const handalLogoutUser = () => {
        dispatch(LogoutUser(false));
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}> COLLAGE ENROLLMENT </Typography>
                    {loginStatus === true ?
                        <>
                            <Typography className={classes.title}>
                                <Link to="/select-city">Collage List</Link>
                                <Link to="/application-status">Application Status</Link>
                            </Typography>
                            <Typography >
                                <AccountCircle />
                                <span className="user-name">{userName}</span>
                                <Link to="/" onClick={handalLogoutUser}>Logout</Link>
                            </Typography>
                        </>
                        :
                        <Typography >
                            <Link to="/">Login</Link>
                        </Typography>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;