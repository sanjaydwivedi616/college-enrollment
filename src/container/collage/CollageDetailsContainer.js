import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataApi } from '../../api/api';
import CollageDetails from "../../components/collage/CollageDetails";


const CollageDetailsContainer = () => {

    const state = useSelector(state => state.user)
    const userType = state.userInfo[0].userType;
    const [collage, setCollage] = useState({});
    const { id } = useParams();

    useEffect(() => {
        try {
            getDataApi(`collageList/${id}`).then(res => {
                setCollage(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <CollageDetails userType={userType} collage={collage} id={id} />
    )
}

export default CollageDetailsContainer;