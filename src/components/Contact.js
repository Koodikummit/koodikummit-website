import React from 'react';
import validator from 'validator';

const Contact = () => {
    const [emailError, setEmailError] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [question, setQuestion] = React.useState("");

    const validateEmail = (email) => {
        let emailInputText = email.target.value;
        if (validator.isEmail(emailInputText)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Please enter a valid email: someName@some-domain.com');
        }
    }

    // Good job Chris, you are good lad!!! Aarni
    // Thanks :D

  return (

    <div>

      <div>
        <label for="name">Your name</label>
        <input type="text" id="name" className="fullName"/>
      </div>

      <div>
      <label for="userEmail">Your email</label>
        <input type="email" id="userEmail" onChange={(email) => validateEmail(email)}/>
        <span
            style={{
                fontWeight: 'bold',
                color: 'red',
            }}
        >{emailError}</span>
      </div>

      <div>
      <label for="question">Your Question?</label>
        <input type="text" id="question" className="questionInput"/>
      </div>

      <div>
        <button>Send</button>
      </div>


    </div>


  );
};

export default Contact;