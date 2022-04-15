
import { FAILD_GET, FETCH_COLLAGE_LIST } from "../../../../redux/collageList/actionType"
import collageReducer, { initialState } from "../../../../redux/collageList/collageReducer"

describe('Whene collage list reducer is render', () => {
    describe('Whene it is called with FETCH_COLLAGE_LIST list frist time', () => {
        const data = [
            {
                collageName: "Indian Institute of Technology Delhi",
                rating: "4",
                location: "delhi",
                id: 1
            },
            {
                collageName: "Indian Institute of Technology Delhi",
                rating: "4",
                location: "delhi",
                id: 2
            }
        ]
        const stateData = {
            collageList: data,
            massage: ""
        }

        it("return updated data", () => {
            const action = {
                type: FETCH_COLLAGE_LIST,
                payload: data
            }
            const result = collageReducer(initialState, action)
            expect(result).toEqual(stateData)
        });

        it("When faild to fatch the data.", () => {
            const massage = "No data found......";
            const stateData = {
                collageList: [],
                massage: massage
            }
            const action = {
                type: FAILD_GET,
                payload: massage
            }
            const result = collageReducer(initialState, action)
            expect(result).toEqual(stateData)
        })

        it("When defult state is render", () => {
            const action = {
                type: 'DEFAULT_ACTION'
            }
            const result = collageReducer(initialState, action)
            expect(result).toEqual(initialState)
        })
    })
})