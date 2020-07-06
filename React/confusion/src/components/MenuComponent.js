import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import "./Menu.css";
import { Loading } from "./LoadingComponent";
import {baseUrl} from '../shared/baseUrl';


function RenderMenuItem({ dish }) {
    return (
        <Card style={{ backgroundColor: '#333', marginBottom: "2px", letterSpacing: "5px" }} >
            <Link to={`/menu/${dish.id}`}>
                <CardImg height="400" src={baseUrl + dish.image} alt={dish.name} />
                <CardTitle style={{ margin: "10px", padding: "5px", color: "white" }}>{dish.name}</CardTitle>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb style={{ marginTop: "20px" }}>
                        <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h2>Menu</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>

            </div>
        );

    }



}

export default Menu;