import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './DishDetail.css';

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
    renderDish(dish, comment) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Card className = "cards">
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle className ="cardTitle">{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 style = {{letterSpacing:"2px"}}>Comments</h4>
                        <hr/>
                        {this.renderComments(comment)}
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
                    <Breadcrumb style = {{marginTop : "20px"}}>
                        <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                {this.renderDish(this.props.dish, this.props.comment)}
            </div>

        );
    }
}
export default Dishdetail;