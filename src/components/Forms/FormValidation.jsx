import React, { Component} from "react";
import {useForm} from 'react-hook-form';
import styles from './FormValidation.module.scss'


// Форма для отправки (имя, фамилия, сообщение, e-mail)
 
 const FormValidation  = ()  => {
 
        const {
            register, // Позваляет регистрировать различные поля для формы
         formState: { // объект с разными свойствами
            errors, isValid // свойство errors
         },   
         handleSubmit, // некая обертка на оберткой формы. Она позваляет сделать различные вещи с валидацией 
         reset,
        } = useForm(
            {
                mode: "onTouched" // Настройки useForm. Всего 5 режимов (10:30) - onChange, onBlur, all, onSubmit, onTouched
            }
        );

        const onSubmit = (data) => {
            alert(JSON.stringify(data))
            reset() // Форма очиститься автоматически
        }
          return ( 
            <div>
                <div className='container'> 
                   <h1 className={styles.FormValidation}>Форма заказа</h1>
                    <form className={styles.FormValidation__form} onSubmit={handleSubmit(onSubmit)}>
                        <label className={styles.FormValidation__label} >
                            First Name: <br /> <br /> 
                            <input className={styles.FormValidation__inputFerst} {...register('ferstName', 
                            {required: "Поле обязательно к заполнению",
                             minLength: {
                                value: 5,
                                message: 'Минимум 5 символов'
                             }
                            })} type="text" />
                        </label>
                        <div className={styles.FormValidation__errors} >{errors ?.ferstName && <p>{errors ?.ferstName?.message || "Error!"}</p>}

                        </div>

                        <label className={styles.FormValidation__label} >
                            Last Name: <br /> <br /> 
                            <input className={styles.FormValidation__inputFerst} {...register('lastName', 
                            {required: "Поле обязательно к заполнению",
                             minLength: {
                                value: 5,
                                message: 'Минимум 5 символов'
                             }
                            })} type="text" />
                        </label>
                        <div className={styles.FormValidation__errors} >{errors ?.lastName && <p>{errors ?.lastName?.message || "Error!"}</p>}

                        </div>

                        <input disabled={!isValid} className={styles.FormValidation__submit} type="submit" />
                    </form>
                  </div>
            </div>
  );
 
}

export default FormValidation;