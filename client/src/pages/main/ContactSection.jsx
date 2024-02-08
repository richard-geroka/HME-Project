const ContactSection = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="wrapper">
          <h2>Get in touch -</h2>
          <div className="contact-container-grid">
            <div className="col-by-phone">
              <h3>
                <i className="bi bi-telephone-fill"></i> Phone
              </h3>
              <p>Call or text:</p>
              <p>+63 111 222 3333</p>
            </div>
            <div className="col-by-socialmedia">
              <h3>
                <i className="bi bi-chat-dots-fill"></i> Chat
              </h3>
              <p>
                <i className="bi bi-facebook"></i> facebook page
              </p>
              <p>
                <i className="bi bi-messenger"></i> messenger
              </p>
            </div>
            <div className="col-by-email">
              <h3>
                <i className="bi bi-envelope-at-fill"></i> Email
              </h3>
              <p>hme@company.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
