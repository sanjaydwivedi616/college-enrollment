import { Button } from '@material-ui/core';
import Collage from './Collage';
import { useHistory } from 'react-router-dom';

/**
 * fetching collage details and sending to child
 * Collage component displaying all info about collage
 * if its failed going inside error block
 */

const CollageDetails = ({ userType, collage, id }) => {
    const history = useHistory();
    
    const { collageInfo, Scholarships, hostal, lib, sport } = collage;
    return (
        <>
            <Collage collage={collage} CollageDetails={true}>
                <div className="content-style">
                    <p>{collageInfo}</p>
                    <p><b>Scholarships : </b>{Scholarships}</p>
                    <p><b>Hostal : </b>{hostal}</p>
                    <p><b>Library : </b>{lib}</p>
                    <p><b>Sport : </b>{sport}</p>
                </div>
                {userType === 'admin' ? null : <Button color="primary" variant="contained" onClick={() => history.push(`/studant-ragistration-form/${id}`)}>Ragistration</Button>}
            </Collage>
        </>
    )
}

export default CollageDetails 