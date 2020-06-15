import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderComments(comments) {
        const com = comments.map(comment => {
            if (comments != null) {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>--
                        {comment.author},
                        {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))} 
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
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle >{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className = "col-12 col-md-6">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
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
            <div>
                {this.renderDish(this.props.dish)}               
            </div>

        );
    }
}
export default Dishdetail