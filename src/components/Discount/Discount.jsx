import React, { Component } from "react";
import styles from './Discount.module.scss'
import plate from '../../assets/Discount/plate_1.png' // тарелка 1
import plate2 from '../../assets/Discount/plate_3.png' // тарелка 2
import button  from '../../components/ui/ui.module.scss' // кнопки
 


class Discount extends Component {
    render() {
        return ( 
      <div className={styles.Discount}>
      <div className='container2'> 

      <div className={styles.Discount__inner}> 
              <div className={styles.Discount__img}>
                <img  className={styles.Discount__img2} src={plate} alt="plate" />
              </div>
              <div className={styles.Discount__text}>
                <h1 className={styles.Discount__h1}>Discount up to <br />
                        50% All Excursions</h1> 
                <p className={styles.Discount__text2}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing 
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <button className={button.Btn__one}>
                Read More
               </button>
                   
              </div>
              </div>

              <div className={styles.Discount__inner}> 
              <div className={styles.Discount__text}>
                <h1 className={styles.Discount__h1}>January’s Promo:<br />
                Buy 1 Get 1 Free!</h1> 
                <p className={styles.Discount__text2}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing 
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
                <button className={button.Btn__one}>
                Read More
               </button>
                   
              </div>
              <div className={styles.Discount__img}>
                <img  className={styles.Discount__img2}  src={plate2} alt="plate" />
              </div>
            
              </div>

      </div>
     </div>
      ) 
    }
}

export default Discount