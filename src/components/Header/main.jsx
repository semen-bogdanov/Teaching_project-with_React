import React, { useState} from "react";
import styles from './Header.module.scss'
import logotel from '../../assets/header/premium-icon-telephone-3247310.png' // трубка телефона  
import burger  from '../../assets/header/free-icon-bar-7131131.png' // бургер  
import cross  from '../../assets/header/free-icon-close-cross-64498.png' // бургер крестик
import Navigation from './Navigation' //
import { Routes, Route, Link } from "react-router-dom";
import News from '../../pages/News'; // Новости
import Form from '../../pages/Form'; // Форма
import Home from '../../pages/Home'; // Главная страница (только содержимое)




const Main  = ()  => {
     // Бургер меню
    const [isSidebarShow, setIsSidebarShow] = useState(false)

    // Бургер меню - закрытие при scroll или при нажатие click в поле window
    const onEvent = (event) => setIsSidebarShow(false);
    window.addEventListener('scroll',  onEvent);
    window.addEventListener('click',  onEvent);
    
          return ( 
            <> 
            <header className={styles.Header}>
            <div className={styles.Header__inner}> 
            <div className='container'> 
            <div className={styles.Header__navigation}> 
             <div className={styles.Header__nav}>
             {/* меню главной страницы */}
      
             <Navigation 
               argument1 = {true}
             />
             </div>
                <div className={styles.Header__blockcontact}> 
                  <p className={styles.Header__order}>Заказать по телефону:</p>
                  <div className={styles.Header__contact}>
                  <img src={logotel} alt="" className={styles.Header__imgtel} />
                  <p className={styles.Header__telefon}><span className={styles.Header__telnumber0}>+7 (495)</span> <span className={styles.Header__telnumber1}>923-35-74</span></p>
                  </div>
                  </div>
                  <div > 
                       {/* e.stopPropagation() - исключаем window.addEventListener('click',  onScroll); в этом блоке */}
                    <div onClick={e => e.stopPropagation()}> 
                  <button  onClick={() => setIsSidebarShow(!isSidebarShow)} className={styles.Header__burger} >
                             <img  className={styles.Header__burgerimg}  src={!isSidebarShow ?  burger  : cross} alt="burger" />
                  </button>
                     </div>
                     </div>
               </div>
           <div className={styles.Header__burgerMenu} style={{width: !isSidebarShow ? '0%' : '50%' }}  onClick={e => e.stopPropagation()}>
                {/* Навигация бургер меню */}
                 <div className={styles.Header__display}  style={{opacity: !isSidebarShow ? '0' : '1' }}> 
                <Navigation   
                   argument1 = {false}
                />
                </div>
           </div>  
               <div className={styles.Header__headline}>
                  <h1 className={styles.Header__zag}>Новости</h1>
                  <p className={styles.Header__text}>Разные и неочевидные рецепты, события сегодняшней кухни.</p>
            </div>
            </div>
            </div>
           </header>
            <Routes>
              <Route path="/Header" element={<Home/>} /> 
              <Route path="/News" element={<News/>} /> 
              <Route path="/Form" element={<Form/>} />   
              <Route path="*" element={<Home/>} />   
           </Routes>    
         

          </>
            ) 
        
}


export default Main