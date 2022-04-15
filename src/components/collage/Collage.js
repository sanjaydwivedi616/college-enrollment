import Rating from "../rating/Rating"
import React from 'react';

/**
 * 
 * @param {collageName, location, openYear, Scholarships, rating} props  reciving the property as object} props 
 * collage list is showing
 * with children props
 * rating is showing based oh data 
 */

const Collage = (props) => {

    const { collageName, location, openYear, rating, img } = props.collage

    return (
        <>
            <div className={props.CollageDetails ? 'collage-details-style' : 'collage-list-style'}>
                <img src={img} alt="collage-img" className="img-style" />
                <div className="content-style">
                    <p><b>Name : </b>{collageName}</p>
                    <p><b>Location : </b>{location}</p>
                    <p><b>Year's : </b>{openYear}</p>
                    <Rating rating={rating} />
                </div>
                {props.children}
            </div>
        </>
    )
}

export default Collage;