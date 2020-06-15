import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

import Dishdetail from './DishdetailComponent';
import "./Menu.css";


function onClick(props){
    props.selectedDish = props.dish
}

function RenderMenuItem({ dish}) {
    return (
        <Card style={{ backgroundColor: '#333' }} onClick = {onClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle style={{ margin: "10px", padding: "5px", color: "white" }}>{dish.name}</CardTitle>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu} 
                {props.selectedDish ? <Dishdetail dish = {props.selectedDish}></Dishdetail>: null}               
            </div>
            
        </div>
    );

}

export default Menu;