import React, { useEffect, useState } from 'react'

/** 
 * @param {parameter 1,2,3,4,5} param 
 * Getting rating values as param
 * besed oon param its ganerating the rating list 
 */

const Rating =({ rating })=> {
    const [star, setStart] = useState([])
    
    useEffect(() => {
        let startArr = [];

        for (let i = 0; i < 5; i++) {
          let  setClass = i < rating ? 'active-star' : 'default-start'
            startArr.push(<span key={i} className={setClass }>&#x02605;</span>)
        }
        return setStart(startArr)
    }, [rating])

    return (
        <div>
            {star}
        </div>
    )
}


export default Rating;