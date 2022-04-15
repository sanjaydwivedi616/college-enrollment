import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CollageList from './CollageList';
import { getCollageList } from '../../redux/collageList/collageAction';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../pagination/Pagination';

//http://localhost:3333/studentRagistration/?q=app
/**
 * Select your city get the collage data list
 * click more info button read all about callage 
 */

const SelectCity = () => {

    const dispatch = useDispatch();
    const { collageList } = useSelector(state => state.collageList);

    const cityName = ["select city", "bangalore", "delhi", "chennai", "mumbai"];

    const [paginatiomData, setpaginatiomData] = useState([]);

    const updateNewDataPerPage = (afterPaginationDataList) => {
        setpaginatiomData(afterPaginationDataList)
    }

    const formik = useFormik({
        initialValues: {
            selectCity: 'ALL CITY'
        },
        validationSchema: Yup.object({
            selectCity: Yup.string().required('Select City')
        }),
        onSubmit: values => {
            dispatch(getCollageList(values.selectCity))
        },
    });

    return (
        <>
            <form className='city-feild' onChange={formik.handleSubmit}>
                <label><b>CITY</b></label>
                <select className="selectCity" name="selectCity" {...formik.getFieldProps('selectCity')}>
                    {cityName.map((city, index) => {
                        return <option key={index} value={city}>{city}</option>
                    })}
                </select>
                <div className="error-msg">{formik.errors.selectCity}</div>
            </form>

            <Pagination collageList={collageList} updateNewDataPerPage={updateNewDataPerPage} />
            <CollageList collagelist={paginatiomData} />

        </>
    )
}

export default SelectCity;
