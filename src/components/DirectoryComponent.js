import React from 'react';
/*importing built in components in reactstrap*/
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem({campsite, onClick}) {
    return(
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>                        
                </CardImgOverlay>                     
        </Card>                   
    );
}

/* class components are objects declared as a class by { Directory />} */
function Directory(props) {
    const directory = props.campsites.map(campsite => {
            return (
                // this is the JSX 
                <div key={campsite.id} className = "col-md-5 m-1">
                   <RenderDirectoryItem campsite={campsite} onClick={props.onClick} /> 
                </div>
            );
        });


/* this is what's shown on the screen and is considered the main return */
        return (
            <div className = "container">
                <div className = "row">
                    {directory}
                </div>

            </div>
        );
    }


export default Directory;