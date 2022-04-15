import { getDataApi, postDataApi, updateDataApi } from "../../api/api"


describe("When API call is render", () => {

    const url = 'userList';
    const fullURL = `http://localhost:3333/userList`;

    it("Should get api call is render", () => {
        const result = getDataApi(url);
        expect(fullURL).toBe('http://localhost:3333/userList')
    });

    it("Should post api call is render with post data", () => {

        const result = postDataApi(url);
        expect(fullURL).toBe('http://localhost:3333/userList')
    })

    it("Should post api call is render with post data", () => {

        const result = updateDataApi(url);
        expect(fullURL).toBe('http://localhost:3333/userList')
    })
})