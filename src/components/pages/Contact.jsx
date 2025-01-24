// boilerplate code and notes used from activity 18 to get Contacts started
import React, { useState } from 'react';
import './Contact.css'

//Contact component with form and events
export default function Contact() {
  // declare stateful variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // declare event handlers
  const handleMouseExit = (e) => {
    if (e.target.value.trim() === '') {
      alert(`${e.target.name} is required.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if inputs are complete, return success alert and set inputs to empty
    if (name.trim() && email.trim() && message.trim()) {
      alert("Form Submitted with valid input!");
      setName('');
      setEmail('');
      setMessage('');
      // else all fields need to be filled out
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };
  
  // return jsx with updated stateful variables and event listeners.
  return (
    <div>
      <h1 className='contact-header'>Let's Build The Future!</h1>
      <p className='contact-header__p text-lg'>
        Ready to bring your project to life? Let's create something amazing together.
      </p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='contact-form__p1'>
          <input className='contact-form__p1'
            placeholder="Name"
            type="text" 
            id="name" 
            name="Name"
            autoComplete="given-name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onBlur={handleMouseExit}
          />
        </div>
        <div className='contact-form__p2'>
          <input
            placeholder="Email" 
            type="email" 
            id="mail" 
            name="Email"
            autoComplete="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={handleMouseExit}
          />
        </div>
        <div className='contact-form__p3'>
          <textarea
            placeholder="Message" 
            id="msg" 
            name="Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onBlur={handleMouseExit}
          />
        </div>
        <div className="button">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
};
