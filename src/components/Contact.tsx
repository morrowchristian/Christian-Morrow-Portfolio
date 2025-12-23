const Contact = () => {
  return (
    <section id="contact" className="section">
      <h3>Contact</h3>
      <p>You can reach me through email or GitHub.</p>

      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/morrowchristian" target="_blank">
            @morrowchristian
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
