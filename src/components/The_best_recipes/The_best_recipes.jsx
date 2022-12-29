import React, { Component } from "react";
import styles from './The_best_recepts.module.scss'
import button  from '../../components/ui/ui.module.scss' // кнопки
import {bestOne}  from './bestOne' // массив с данными
 

class TheBest extends Component {
 
    render() {
          return ( 
    <div className={styles.TheBest}>
      <div className='container'> 
      <div className={styles.TheBest__text}>
           <p className={styles.TheBest__recipes}>The best recipes</p>
           <p className={styles.TheBest__textrecept}>Самые интересные рецепты </p>
      </div>
           <div className={styles.TheBest__table}>
            
           {bestOne.map((element, idx, arr) => (
            <div key={element.id} className={styles.TheBest__tableone}>
                <img className={styles.TheBest__tableimg} src={element.src} alt="" />
                <div className={styles.TheBest__tabletext}>{element.tabletext}</div>
                <div className={styles.TheBest__tabletext2}>{element.tabletext2}
              </div>
            </div>
    ))}
           </div>
        
           <div className={styles.TheBest__blockbtn}> 
           <button className={button.Btn__one}>
           Show More
           </button>
           </div>
      </div>
    </div>
    ) 
    }
}

export default TheBest