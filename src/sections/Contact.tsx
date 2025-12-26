const Contact = () => {
  return (
    <section id="contact" className="section contact reveal">
      <h2>Contact</h2>

      <p>If you’d like to get in touch, here are the best ways to reach me:</p>

      <ul className="contact-list">
        <li>
          <a href="mailto:morrowchristian@icloud.com">
            morrowchristian@icloud.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/morrowchristian"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/christian-morrow"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
