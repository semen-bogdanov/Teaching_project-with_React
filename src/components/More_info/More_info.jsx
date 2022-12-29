import React, { Component } from "react";
import styles from './More_info.module.scss'
import button  from '../../components/ui/ui.module.scss' // кнопки




class More_info extends Component {
    render() {
          return ( 
       <div className={styles.More_info}>
            <div className='container'> 
            <h1 className={styles.More_info__tabletext}>Lorem Ipsum Dolor</h1>
                     <div className={styles.More_info__text}>
                           <p className={styles.More_info__textcontent}>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                  do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
                           </p>
                           <p className={styles.More_info__textcontent}>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                  do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
                           </p>
                     </div>
                     <div className={styles.More_info__blockbtn}> 
                         <button className={button.Btn__moreinfo}> MORE INFO </button>
                     </div>
            </div>
       </div>
    ) 
    }
}

export default More_info