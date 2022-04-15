import React from 'react';
import { useSelector } from 'react-redux';
import StudentRagistrationForm from '../../components/student/StudentRagistrationForm';

export default function StudentRagistrationFormContainer() {

    const state = useSelector(state => state.user)
    const userName = state.userInfo[0].userName;
    const courseBranch = ["Civil engineering", "Electrical/electronic engineering", "Mechanical engineering", "Engineering management", "Computer engineering"]

    return (
        <StudentRagistrationForm userName={userName} courseBranch={courseBranch}/>
    )
}
