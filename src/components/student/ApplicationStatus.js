import { Done, Clear } from '@material-ui/icons';
import React from 'react';
import StudentListData from './StudentListData';

/**
 * Studant can chack ragistration status
 * if admin in approve 
 * studant can get the admission 
 */

const ApplicationStatus = ({ ragistartionData, ApproveIsClicked, RejectIsClicked, userType }) => {

    return (
        <StudentListData>
            {ragistartionData.length > 0 ?
                ragistartionData.map((data, index) => {
                    const { id, firstName, lastName, email, contact, tenthPercentage, twelvePercentage, status, selectCourse } = data;
                    return (
                        <tr key={id}>
                            <td>{index + 1}.</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{contact}</td>
                            <td>{tenthPercentage}</td>
                            <td>{twelvePercentage}</td>
                            <td>{selectCourse}</td>
                            <td>{status === 'Pending' && userType === "admin" ?
                                <>
                                    <Done onClick={() => ApproveIsClicked(data)} />
                                    <Clear onClick={() => RejectIsClicked(data)} />
                                </> :
                                <span className={status === "Approved" ? "success-msg" : status === "Rejected" ? "error-msg" : "info-msg"}> {status}</span>}
                            </td>
                        </tr>
                    )
                })
                : <tr className="text-center"><td colSpan="9"><b>No data in this list</b></td></tr>}
        </StudentListData>
    )
}

export default ApplicationStatus;
