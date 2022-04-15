import React from 'react'

const StudentListData = (props) =>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sl.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>10%</th>
                    <th>12%</th>
                    <th>Course</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>

        </table>
    )
}

export default StudentListData;