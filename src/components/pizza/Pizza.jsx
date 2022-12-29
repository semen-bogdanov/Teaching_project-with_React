import React, { Component } from "react";
import styles from './Pizza.module.scss'
import img from '../../assets/pizza/pizza.jpg' // Pizza
 

 

class Pizza extends Component {
    render() {
          return ( 
           <div className={styles.Pizza}>
            <img  className={styles.Pizza__img} src={img} alt="" />
           </div>
            ) 
        }
    }


export default Pizza