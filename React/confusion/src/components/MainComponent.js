import React, { Component } from 'react';
import Menu from "./MenuComponent";
import DishDetailComponent from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from "./AboutComponent";

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leader';



import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS, 
            selectedDish: null,  
        };
    }

    

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) =>{
            
            return (
                <DishDetailComponent dish = {this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
                    comment = {this.state.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))}
                ></DishDetailComponent>
            )

        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick = {() => this.onCLick}/>}></Route>
                    <Route path = "/menu/:dishId" component = {DishWithId}></Route>
                    <Route exact path="/contactus" component={Contact} />
                    <Route path = "/aboutus" component = {() => <About leaders = {this.state.leaders}/>} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />

            </div>
        );
    }
}

export default Main;
