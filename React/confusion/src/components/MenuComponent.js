import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./Menu.css";


class Menu extends Component {

    constructor(props) {
        super(props);

       
    }   

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card style={{ backgroundColor: '#333' }} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardTitle style={{ margin: "10px", padding: "5px", color: "white" }}>{dish.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>               
            </div>
        );
    }

}
export default Menu;