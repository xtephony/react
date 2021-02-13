import React from 'react';
import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isModalOpen: false
        };        
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    } 


    render () {
        return (
            <React.Fragment>
            <Button outline onClick={this.toggleModal}>
           <i className="fa fa-pencil fa-lg"> Submit Comment</i>
            </Button>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <div className="form-group">
                                <Label htmlFor="author">Author</Label>
                                    <Control.text model=".author" id="author" name="author" 
                                        className="form-control"
                                        placeholder="Name"
                                        validators={{ 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                     <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </div>   
                              
                                <div className="form-group">
                                <Label htmlFor="text">Review</Label>
                                    <Control.textarea model=".text" id="text" name="text" 
                                    rows="12"
                                    className="form-control" 
                                    placeholder="Please leave a review"


                                    />
                                </div>   
                                
                                <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>    

                                <div className="form-group">
                                    <Button type="submit" color="primary">
                                        Submit Review
                                    </Button>   
                                </div> 
                            </LocalForm>
                        </ModalBody>
            </Modal>
            </React.Fragment>   
        )
    };
}
           
            
           

function RenderCampsite({campsite}) {
    return(
        <div className="col-md-5 m-1">
            <Card>
               <CardImg top src={campsite.image} alt={campsite.name} />
               <CardBody>
                   <CardText>{campsite.description} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

    
    function RenderComments({comments}) {
        if (comments) {
            return (
                <div className ="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => 
                    <div key={comment.id}>
                        <div> {comment.text} </div>
                        <div> -- {comment.author},  {""} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </div><br></br>
                    </div>
                 ) }
                 <CommentForm />
                </div>
            );
        }
        return <div />
    }

    

   
    /* conditional rendering which renders based on conditions */
   function CampsiteInfo(props) {
        if(props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                                <h2>{props.campsite.name}</h2>
                                    <hr />
                        </div>
                    </div>
                    <div className = "row">
                        <RenderCampsite campsite={props.campsite} /> 
                        <RenderComments comments={props.comments} /> 
                     
                    </div>
                </div>
            )
        }
        
            return <div />;
            
    }



export default CampsiteInfo;