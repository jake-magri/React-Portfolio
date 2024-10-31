export default function Contact() {
  return (
    <div>
      <h1>Let's Build The Future!</h1>
      <p>
      Ready to bring your project to life? Let's create something amazing together.
      </p>
      <form>
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
