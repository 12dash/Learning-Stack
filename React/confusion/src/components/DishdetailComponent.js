import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, Button, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

import './DishDetail.css';
import { addComent } from '../redux/ActionCreators';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



class SubmitComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        alert("You have Submitted the form :))" + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div >
                <Button onClick={this.toggleModal}><span className="fa fa-pencil fa-md">{" "}Submit Comment</span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody >
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} style={{ padding: "10px" }}>
                            <div className="form-group" >
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control" >
                                    <option>1 </option>
                                    <option>2</option>
                                    <option>3 </option>
                                    <option>4</option>
                                    <option>5 </option>
                                </Control.select>
                            </div>
                            <div className="form-group" >
                                <Label htmlFor="firstname">Your Name </Label>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    className="form-control"
                                    placeholder="Your Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        require: "Required",
                                        minLength: "Must be greater than 2 character",
                                        maxLength: "Must be less than 15 characters"
                                    }}
                                >
                                </Errors>
                            </div>
                            <div className="form-group" >
                                <Label htmlFor="message" >Comment</Label>
                                <Control.textarea
                                    model=".message"
                                    id="message"
                                    name="message"
                                    placeholder="Please enter your comment"
                                    rows={6}
                                    className="form-control" />
                            </div>
                            <Button type="submit" value="submit" color="primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

class Dishdetail extends Component {
    renderComments(comments) {
        const com = comments.map(comment => {
            if (comments != null) {
                return (
                    <ul key={comment.id} className="list-unstyled Comments">
                        <li>
                            {comment.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </li>
                        <li>{comment.comment}</li>
                    </ul>
                );
            }
            else {
                return (
                    <div></div>
                );
            }
        })
        return com;
    }
    renderDish() {
        if (this.props.isLoading) {
            return(
                <div className = "container">
                    <div className = "row">
                        <Loading />
                    </div>
                </div>
            )            
        }
        else if(this.props.errMess){
            return(
                <div className = "container">
                    <div className = "row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            )
        }
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Card className="cards">
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle className="cardTitle">{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 style={{ letterSpacing: "2px" }}>Comments</h4>
                        <hr />
                        {this.renderComments(this.props.comment)}
                        <SubmitComment addComment={this.props.addComment} />
                    </div>
                </div>
            );
        }
        else {
            return (<div>
            </div>);
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb style={{ marginTop: "20px" }}>
                        <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{this.props.name}</h3>
                        <hr />
                    </div>
                </div>
                {this.renderDish(this.props.dish, this.props.comment)}

            </div>

        );
    }
}
export default Dishdetail;