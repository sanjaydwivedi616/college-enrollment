import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ collageList, updateNewDataPerPage }) => {
    
    const perPageSelect = [2, 4, 6]
    const [offset, setOffset] = useState(0);
    const [paginatiomData, setpaginatiomData] = useState([]);
    const [perPage, setPerPagelength] = useState(perPageSelect[0]);
    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        const slice = collageList.slice(offset, parseInt(offset) + parseInt(perPage))
        setpaginatiomData(slice)
        setPageCount(Math.ceil(collageList.length / perPage))
    }, [collageList, offset, perPage])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * perPage)
    };
    const updatePerPage = (e) => {
        setPerPagelength(e.target.value)
        setOffset(0)
    }
    updateNewDataPerPage(paginatiomData);

    return (
        <div className="pagination-posion">
            <label><b>Per Page</b></label>
            <select className="perPageSelect" name="perPageSelect" onChange={(event) => updatePerPage(event)}>
                {perPageSelect.map((perPage, index) => {
                    return <option key={index} value={perPage}>{perPage}</option>
                })}
            </select>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    )
}


export default Pagination;