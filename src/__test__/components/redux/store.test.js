import store from "../../../redux/store"
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux'


describe('When store function is render', () => {

    it('should use all of the created reducers', () => {
        const expectedReducers = {
            user,
            collage
        };

        const combineReducers = store(createStore(expectedReducers, applyMiddleware(thunk)))
        expect(combineReducers).toEqual(expectedReducers);
    });
});
