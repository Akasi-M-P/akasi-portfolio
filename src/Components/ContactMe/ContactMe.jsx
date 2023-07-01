import "/src/css/ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <main className="contactMe">
        <div className="contactMe_message">
          <h1>Lets Chat.</h1>
          <p>Tell me about your project.</p>
          <p>Send me an email @</p>
          <a type="email">awintechworld@gmail.com</a>
        </div>
        <div className="contactMe_img">
          <img
            src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1688236009~exp=1688236609~hmac=7a4fb7b414ab4856c9407bb653fe380abbcba254c5ced76ab02852b7a6bfb1b8"
            alt=""
          />
        </div>
      </main>
      <div>
        <h3>
          Built by ME❤️ with blend of passion, dedication, and numerous cups of
          coffee☕.
        </h3>
      </div>
    </>
  );
};
export default ContactMe;
