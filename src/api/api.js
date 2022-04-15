import axios from "axios";

/**
 * this base URL comming from .env file
 */
export const baseUrl = process.env.REACT_APP_BASE_URL;

/**
 * @baseurl {"http://localhost:3333/"} 
 * @param {*string} //url like studentRagistration, userlist
 * @param //url like "userlist, dataList"
 * based on url fatching the record
 */
export const getDataApi = (url) => {
    return axios.get(`${baseUrl}/${url}`)
}


/**
 * @param {*postData}
 * @param {*Object}
 * /postData sending post data based on post data
 */
export const postDataApi = (url, postData) => {
    return axios.post(`${baseUrl}/${url}`, postData)
}

/**
 * @param {*updateData}
 * @param {*Object}
 * /postData sending post data based on post data
 */
export const updateDataApi = (url, updatedData) => {
    return axios.patch(`${baseUrl}/${url}`, updatedData)
}