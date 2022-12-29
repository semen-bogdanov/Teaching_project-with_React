import React, { Component } from "react";
import styles from './Quote.module.scss'
 


class Quote extends Component {
    render() {
          return ( 
              <div className='container'> 
              <p className={styles.Quote__text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              </p>
              </div>
      
            ) 
        }
}


export default Quote