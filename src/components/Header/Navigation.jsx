import React, { useState} from "react";
import styles from './Header.module.scss'
import logoimage from '../../assets/header/picca_na_dom.png' // фон 
import arrow  from '../../assets/header/strelka3.png' // стрелка 
import arrowHover  from '../../assets/header/arrow_1.png' // стрелка 2
import { Link } from "react-router-dom";


const Navigation  = ({argument1 = false, footer =  false})  => {
  
  const [overs, setOvers] = useState([false, false, false, false, false]);
  const count = (argument, argument2) => setOvers(overs.map((element, inx, arr) => inx === argument2 ? element = argument : element = false ));

 //  const count = (argument, argument2) => {
 //   setOvers(
 //     overs.map((element, inx, arr) => {
 //         if (inx === argument2) {
 //          return  element = argument;
 //         } else {
 //           return  element = false;
 //         }
           
 //     })
 //   )
 //  }
 
 
  const menu = [
    {
      id: 0,
      nav: 'Начало',
      link: "/Header", 
    },
    {
      id: 1,
      nav: 'Выбрать пиццу',
      link: "/", 
    },
    {
      id: 2,
      nav: 'Выбрать закуску',
      link:  "/",
    },
    {
      id: 3,
      nav: 'Сделать заказ',
      link: "/Form",
    },
    {
      id: 4,
      nav: 'НОВОСТИ',
      link: "/News",
    }
  ]
 

    return( 
       <> 
          <div className={argument1 ? styles.Header__start : styles.Header__start2}>
             <Link to="/Header"><img className={argument1 ? styles.Header__logo : styles.Header__none} src={logoimage}  alt="logo" /></Link>
             {menu.map((element, idx, arr) => (
                        <div  key={element.id}  className={argument1 ? styles.Header__pages : styles.Header__burgerMenu1} src={logoimage}>
                        <div  className={styles.Header__arr}>
                        <img className={styles.Header__arrowOne}  src={overs[element.id] ? arrowHover : arrow}
                        alt="arrow" />
                        </div >
                        <Link 
                              onMouseOver={() => count(true, element.id)}
                              onMouseOut={() => count(false, element.id)}
                        className={footer ? styles.Header__footerMenu : styles.Header__link} to={element.link}>{element.nav}</Link>
                        </div>
))}
          </div>
   
          </>
    )
}

export default Navigation