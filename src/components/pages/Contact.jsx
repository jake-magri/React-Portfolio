// boilerplate code and notes used from activity 18 to get Contacts started

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleMouseExit = (e) => {
    if (e.target.value.trim() === '') {
      alert(`${e.target.name} is required.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      alert("Form Submitted with valid input!");
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };
  
  return (
    <div>
      <h1>Let's Build The Future!</h1>
      <p>
      Ready to bring your project to life? Let's create something amazing together.
      </p>
      <form onSubmit={handleSubmit} onMouseExit={handleMouseExit}>
        <p>
          <label htmlFor="name">Name:</label>
        </p>
        <p>
          <input type="text" id="name" name="user_name" />
        </p>
        <p>
          <label htmlFor="mail">Email:</label>
        </p>
        <p>
          <input type="email" id="mail" name="user_email" />
        </p>
        <p>
          <label htmlFor="msg">Message:</label>
        </p>
        <p>
          <textarea id="msg" name="user_message"></textarea>
        </p>
        <p className="button">
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};
