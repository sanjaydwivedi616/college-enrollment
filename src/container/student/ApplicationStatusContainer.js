import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDataApi, updateDataApi } from '../../api/api';
import ApplicationStatus from '../../components/student/ApplicationStatus';

const ApplicationStatusContainer = () => {

    const state = useSelector(state => state.user)
    const userName = state.userInfo[0].userName;
    const userType = state.userInfo[0].userType;
    const [ragistartionData, setRagistrationData] = useState([]);

    const getUpdatedData = () => {
        if (userType === "admin") {
            getDataApi(`studentRagistration`).then(res => {
                setRagistrationData(res.data)
            })
        } else {
            getDataApi(`studentRagistration/?userName=${userName}`).then(res => {
                setRagistrationData(res.data)
            })
        }
    }

    useEffect(() => {
        getUpdatedData()
    }, [])
    const ApproveIsClicked = (data) => {
        let newData = { ...data, status: "Approved" }
        updateDataApi(`studentRagistration/${data.id}`, newData).then(res => {
            setRagistrationData(res.data)
            getUpdatedData()
        })
    }
    const RejectIsClicked = (data) => {
        let newData = { ...data, status: "Rejected" }
        updateDataApi(`studentRagistration/${data.id}`, newData).then(res => {
            setRagistrationData(res.data)
            getUpdatedData()
        })
    }

    return (
        <ApplicationStatus ragistartionData={ragistartionData} ApproveIsClicked={ApproveIsClicked}
            RejectIsClicked={RejectIsClicked} userType={userType} />
    )
}
export default ApplicationStatusContainer;