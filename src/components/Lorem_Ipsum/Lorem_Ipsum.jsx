import React, { Component } from "react";
import styles from './Lorem_Ipsum.module.scss'
import {Lorem}  from './Lorem.js' // массив с данными
  
 
class Lorem_Ipsum extends Component {
    render() {
          return ( 
            <div className='container'> 
             <div className={styles.Lorem_Ipsum}>
             {Lorem.map((element) => (
             <div key={element.id}  className={styles.Lorem_Ipsum__text}>
                  <div className={styles.Lorem_Ipsum__h1}>{element.tabletext}</div>
                  <div className={styles.Lorem_Ipsum__text2}>{element.tabletext2}</div>
            </div>
            ))}
             </div>
             <p className={styles.Lorem_Ipsum__h2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            </p>
            </div>
            ) 
        }
}


export default Lorem_Ipsum