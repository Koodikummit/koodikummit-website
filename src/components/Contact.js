import React from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Contact = () => {
  const [emailError, setEmailError] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [question, setQuestion] = React.useState('');

  const validateEmail = (email) => {
    let emailInputText = email.target.value;
    if (validator.isEmail(emailInputText)) {
      setEmailError('Valid Email :)');
      setEmail(emailInputText);
    } else {
      if (emailInputText === '') {
        setEmailError('');
      } else {
        setEmailError('Please enter a valid email: someName@some-domain.com');
      }
    }
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      console.log(
        `Your question has been submitted:\n${name} ${email} ${question}`
      );
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          marginTop: '.5rem',
        }}
      >
        <label
          for="name"
          style={{
            fontWeight: 'bold',
          }}
        >
          Your name:&nbsp;
        </label>
        <input
          type="text"
          id="name"
          className="fullName"
          onChange={(name) => setName(name.target.value)}
        />
      </div>

      <div
        style={{
          marginTop: '.5rem',
        }}
      >
        <label
          for="userEmail"
          style={{
            fontWeight: 'bold',
          }}
        >
          Your email:&nbsp;
        </label>
        <input
          type="email"
          id="userEmail"
          onChange={(email) => validateEmail(email)}
        />
        <span
          style={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          {emailError}
        </span>
      </div>

      <div style={{ marginTop: '.5rem' }}>
        <label for="question" style={{ fontWeight: 'bold' }}>
          Your Question:&nbsp;
        </label>
        <textarea
          type="text"
          id="question"
          className="questionInput"
          onChange={(question) => setQuestion(question.target.value)}
        />
      </div>

      <div
        style={{
          marginTop: '.5rem',
        }}
      >
        <button onSubmit={handleSubmit}>Send</button>
      </div>
    </form>
  );
};

export default Contact;
