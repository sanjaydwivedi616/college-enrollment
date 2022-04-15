import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, useHistory } from "react-router-dom";

import Loader from '../loader/Loader';
const LoginContainer = lazy(() => import("../../container/login/LoginContainer"));
const SelectCity = lazy(() => import("../collage/SelectCity"));
const CollageList = lazy(() => import("../collage/CollageList"));
const CollageDetailsContainer = lazy(() => import("../../container/collage/CollageDetailsContainer"));
const StudentRagistrationFormContainer = lazy(() => import("../../container/student/StudentRagistrationFormContainer"));
const ApplicationStatusContainer = lazy(() => import("../../container/student/ApplicationStatusContainer"));
const Collage = lazy(() => import("../collage/Collage"));
const Registration = lazy(() => import("../registration/Registration"));

const PageRouter = () => {

  const history = useHistory();
  const { loginStatus } = useSelector(state => state.user)

  if (loginStatus) {
    history.push("/select-city")
  }

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={LoginContainer}></Route>
        <Route path="/user-registration" component={Registration}></Route>
        {loginStatus === true ?
          <>
            <Route path="/select-city" component={SelectCity}></Route>
            <Route path="/collage-list" component={CollageList}></Route>
            <Route path="/collage-details/:id" component={CollageDetailsContainer}></Route>
            <Route path="/studant-ragistration-form/:id" component={StudentRagistrationFormContainer}></Route>
            <Route path="/application-status" component={ApplicationStatusContainer}></Route>
            <Route path="/collage" component={Collage}></Route>
          </> : null}
      </Switch>
    </Suspense>
  );
}
export default PageRouter;