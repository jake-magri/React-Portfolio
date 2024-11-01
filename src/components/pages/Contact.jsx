// boilerplate code and notes used from activity 18 to get Contacts started
import React, { useState } from 'react';

<<<<<<< HEAD
export default function Contact() {
=======
//Contact component with form and events
export default function Contact() {
  // declare stateful variables
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

<<<<<<< HEAD
=======
  // declare event handlers
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
  const handleMouseExit = (e) => {
    if (e.target.value.trim() === '') {
      alert(`${e.target.name} is required.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
=======
    // if inputs are complete, return success alert and set inputs to empty
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
    if (name.trim() && email.trim() && message.trim()) {
      alert("Form Submitted with valid input!");
      setName('');
      setEmail('');
      setMessage('');
<<<<<<< HEAD
=======
      // else all fields need to be filled out
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };
  
<<<<<<< HEAD
=======
  // return jsx with updated stateful variables and event listeners.
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
  return (
    <div>
      <h1>Let's Build The Future!</h1>
      <p>
        Ready to bring your project to life? Let's create something amazing together.
      </p>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
        </p>
        <p>
          <input 
            type="text" 
            id="name" 
            name="Name"
            autoComplete="given-name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            onBlur={handleMouseExit}
          />
        </p>
        <p>
          <label htmlFor="mail">Email:</label>
        </p>
        <p>
          <input 
            type="email" 
            id="mail" 
            name="Email"
            autoComplete="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={handleMouseExit}
          />
        </p>
        <p>
          <label htmlFor="msg">Message:</label>
        </p>
        <p>
          <textarea 
            id="msg" 
            name="Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onBlur={handleMouseExit}
          />
        </p>
        <p className="button">
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};
