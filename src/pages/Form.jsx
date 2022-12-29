import React, { Component} from "react";
import Footer from '../components/Footer/Footer'
import FormValidation from '../components/Forms/FormValidation'



// Форма для отправки (имя, фамилия, сообщение, e-mail)
class Form extends Component {
    render() {
          return ( 
    <div>
        <FormValidation/> 
        <Footer/> 
    </div>
  );
 }
}

export default Form;



