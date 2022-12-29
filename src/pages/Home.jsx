import React, { Component} from "react";
import TheBest from '../components/The_best_recipes/The_best_recipes'
import More_info from '../components/More_info/More_info'
import Discount from '../components/Discount/Discount'
import Pizza from '../components/pizza/Pizza'
import Lorem_Ipsum from '../components/Lorem_Ipsum/Lorem_Ipsum'
import Subscription from '../components/Subscription/Subscription'
import Quote from '../components/Quote/Quote'
import Footer from '../components/Footer/Footer'


class Home extends Component {
    render() {
    return (
    <div>
        <TheBest />
        <More_info />
        <Discount />
        <Pizza />
        <Lorem_Ipsum />
        <Subscription />
        <Quote/>
        <Footer/>   
    </div>
  );
}
}

export default Home;

