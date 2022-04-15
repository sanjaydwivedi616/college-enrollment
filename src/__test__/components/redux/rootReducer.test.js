import rootReducer from "../../../redux/rootReducer"


describe('Root Reducer', () => {

    it('should use all of the created reducers', () => {
        const expectedReducers = {
            user,
            collage
        };
        const combineReducers = rootReducer(combineReducers(expectedReducers))
        expect(combineReducers).toEqual(expectedReducers);
    });
});
