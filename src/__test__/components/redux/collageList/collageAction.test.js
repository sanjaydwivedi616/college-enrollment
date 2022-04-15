import { FAILD_GET, FETCH_COLLAGE_LIST } from "../../../../redux/collageList/actionType";
import { collageList, faildToGetData, getCollageList } from "../../../../redux/collageList/collageAction";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe('Whene fetch collage list based on city', () => {

    const collagesData = {
        collageName: "Indian Institute of Technology Delhi",
        rating: "4",
        location: "delhi",
        id: 1
    }

    let mock;
    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    it('Should Get collage list successfully done', () => {
        const res = {
            data: [{
                collageName: "Indian Institute of Technology Delhi",
                rating: "4",
                location: "delhi",
                id: 1
            }]
        };

        mock.onGet("http://localhost:3333/collageList/?location=delhi").reply(200, res);
        let actionfn = getCollageList(res.data);
        let dispatch = jest.fn();
        // actionfn(dispatch);
        collageList(res.data);
        //expect(dispatch).toHaveBeenCalled();
        //expect(dispatch).toHaveBeenCalledTimes(1);
        let response = actionfn(dispatch);
        expect(dispatch.mock.calls).toEqual(res.data)
        expect(dispatch.mock.calls).toEqual([getCollageList(res)])
    })

    it('When we are fetching collage list based on city.', () => {

        const action = {
            type: FETCH_COLLAGE_LIST,
            payload: collagesData
        }
        const result = collageList(collagesData);
        expect(result).toEqual(action);
    })

    it('When fetching collage list faild', () => {
        const data = "No data found......";
        const action = {
            type: FAILD_GET,
            massage: data
        }
        const result = faildToGetData();
        expect(result).toEqual(action);
    })
})
