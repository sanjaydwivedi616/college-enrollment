import { FETCH_COLLAGE_LIST, FAILD_GET } from "./actionType";
import { getDataApi } from '../../api/api';

export const getCollageList = (cityName) => {
    return (dispatch => {
        try {
            getDataApi(`collageList/?location=${cityName}`).then(res => {
                if (res.status === 200 && res.data.length > 0) {
                    dispatch(collageList(res.data))
                } else {
                    dispatch(faildToGetData())
                }
            })
        } catch (error) {
            console.log(error)
        }
    })   
}

export const collageList = (collages) => {
    return {
        type: FETCH_COLLAGE_LIST,
        payload : collages
    }
}

export const faildToGetData = () => {
    return {
        type: FAILD_GET,
        massage: "No data found......"
    }
}
