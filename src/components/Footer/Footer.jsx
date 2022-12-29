import React, { Component } from "react";
import styles from './Footer.module.scss'
import email  from '../../assets/Footer/email.png' // email картинка
import tel  from '../../assets/Footer/tel.png' // телефон картинка
import telnavigation  from '../../assets/Footer/navigation.png' // иконка навигация
import button  from '../../components/ui/ui.module.scss' // кнопки 
import vkontakte  from '../../assets/Footer/vkontakte.jpg' // vkontakte footer 
import Facebook  from '../../assets/Footer/Facebook.png' // Facebook footer 
import twitter  from '../../assets/Footer/twitter.png' // twitter footer 
import Linkedin  from '../../assets/Footer/Linkedin.png' // twitter footer 
import vkontakteICON  from '../../assets/Footer/vkontakte.png' // vkontakteICON footer 
import Navigation from '../Header/Navigation' // Навигация  по сайту


 
class Footer extends Component {
  render() {
  return ( 
            <footer  className={styles.Footer}> 
              <div className='container'> 
              <div className={styles.Footer__inner}> 
                  {/* Пицца на дом */}
                 <div className={styles.Footer__contact}>
                        <h1 className={styles.Footer__name1}>Пицца на дом</h1>
                        <p className={styles.Footer__text1}>Моментальная доставка свежей горячей пиццы прямо к вам домой или в офис.</p>
                        <div className={styles.Footer__email}>
                            <img className={styles.Footer__emailimg} src={email} alt="email" />
                            <a className={styles.Footer__emailname} href="mailto:pizzanadom@yandex.ru">pizzanadom@yandex.ru</a>
                        </div>
                        <div className={styles.Footer__tel}>
                            <img  className={styles.Footer__telefonimg} src={tel} alt="" />
                            <a className={styles.Footer__telefon} href="tel:+79999999999">+7 (999) 999-99-99</a>
                        </div>
                         <div className={styles.Footer__moscow}>
                            <img className={styles.Footer__adressimg} src={telnavigation} alt="" />
                            <address className={styles.Footer__adress}>Москва, Коломенское ш., <br />
                            дом 46а, оф. 345</address>
                         </div>
                 </div>
                 {/* ЗАКАЗАТЬ */}
                 <div className={styles.Footer__order}>
                     <div className={styles.Footer__name1}>ЗАКАЗАТЬ:</div>

                                    <div className={styles.Footer__menu}> 
                      {/* меню */}
             <Navigation 
               argument1 = {false}
               footer =  {true}
             />

                     <button className={button.Btn__request}>
                      ОТПРАВИТЬ ЗАЯВКУ
                     </button>
</div>
                     
                 </div>
                 <div className={styles.Footer__vkontakteFerst}>
                 <div className={styles.Footer__name1}>ГАЛЕРЕЯ ВКОНТАКТЕ:</div>
                      
                      <div className={styles.Footer__vkontakte}> 
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      <a href="#"><img src={vkontakte} alt="" /></a>
                      </div>

                 </div>
                 <div className={styles.Footer__socialnetworks}>
                 <div className={styles.Footer__name1}>Мы в соцю сетях</div>
               
                  <div className={styles.Footer__socsety}>
                     <img className={styles.Footer__imgFacebook} src={Facebook} alt="Facebook" />
                     <a className={styles.Footer__Facebook} href="#">Facebook</a>
                  </div>

                  <div className={styles.Footer__socsety}>
                     <img className={styles.Footer__imgFacebook} src={twitter} alt="Twitter" />
                     <a className={styles.Footer__Facebook} href="#">Twitter</a>
                  </div>

                  <div className={styles.Footer__socsety}>
                     <img className={styles.Footer__imgFacebook} src={Linkedin} alt="Linkedin" />
                     <a className={styles.Footer__Facebook} href="#">Linkedin</a>
                  </div>

                  <div className={styles.Footer__socsety}>
                     <img className={styles.Footer__imgFacebook} src={vkontakteICON} alt="Vkontakte" />
                     <a className={styles.Footer__Facebook} href="#">Vkontakte</a>
                  </div>

                 </div>
                 </div>
              </div>
            </footer>
            ) 
          }
}


export default Footer