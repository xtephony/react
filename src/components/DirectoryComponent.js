import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>                   
    );
}

/* class components are objects declared as a class by { Directory />} */
function Directory(props) {

    const directory = props.campsites.map((campsite) => {
            return (
                // this is the JSX 
                <div key={campsite.id} className = "col-md-5 m-1">
                   <RenderDirectoryItem campsite={campsite} /> 
                </div>
            );
        });


/* this is what's shown on the screen and is considered the main return */
        return (
            <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
        );
    }


export default Directory;