import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import "./Menu.css";


function RenderMenuItem({ dish, onClick }) {
    return (
        <Card style={{ backgroundColor: '#333' }} onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardTitle style={{ margin: "10px", padding: "5px", color: "white" }}>{dish.name}</CardTitle>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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

export default Menu;