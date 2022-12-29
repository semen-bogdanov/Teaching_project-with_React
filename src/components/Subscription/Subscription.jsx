import React, { Component } from "react";
import styles from './Subscription.module.scss'
import button  from '../../components/ui/ui.module.scss' // кнопки  
 


class Subscription extends Component {
    render() {
          return ( 
                <div className={styles.Subscription__img}>
                     <div className='container'> 
                       <div className={styles.Subscription__inner}>
                        <h1 className={styles.Subscription__news}>
                        ПОДПИСКА НА НОВОСТИ
                        </h1>
                        <p className={styles.Subscription__text}>
                        Оставьте свой электронный адрес и мы с радостью
                        будем присылать только самые лучшие предложения
                       </p>
                        <div className={styles.Subscription__input}>
                           <input type="email" placeholder="Your Email" className={styles.Subscription__input2}  />
                           <button className={button.Btn__subscribe}>
                              Subscribe
                           </button>
                       </div>
                  </div>
                  </div>
                </div>
      
            ) 
        }
}


export default Subscription