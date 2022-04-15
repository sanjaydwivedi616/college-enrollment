import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Collage from './Collage';

/**
 * 
 * @param {collageName, rating, location, openYear, Scholarships, id} props  receiving the property as object
 * all this props maping inside jsx 
 * ratiing componnet print the rating of of collage
 */

const CollageList = (props) => {
    
    const collageList = props.collagelist
    const dataLength = collageList.length;
    const history = useHistory()

    return (
        <div className="list-item">
            {collageList?.length > 0 ?
                collageList?.map(item => {
                    return (
                        <Collage collage={item} key={item.id} dataLength={dataLength}>
                            <Button color="primary" size="small" variant="contained" onClick={() => history.push(`/collage-details/${item.id}`)}>More Info</Button>
                        </Collage>
                    )
                }) : <h3 className="text-center">No data in the list</h3>
            }
        </div >
    )
}

export default CollageList;
