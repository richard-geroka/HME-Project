const ContactInfo = () => {
  return (
    <>
      <section className="contact-info">
        <div className="wrapper">
          <h2>For pricing and other inquiries, please contact us via</h2>
          <div className="contact-container-grid">
            <div className="col-by-phone">
              <h3>
                <i className="bi bi-telephone-fill"></i> Phone
              </h3>
              <p>Call or text</p>
              <p>+63 111 222 3333</p>
            </div>
            <div className="col-by-socialmedia">
              <h3>
                <i className="bi bi-chat-dots-fill"></i> Chat
              </h3>
              <p>
                <a href="#">
                  <i className="bi bi-facebook"></i> facebook page
                </a>
              </p>
              <p>
                <a href="#">
                  <i className="bi bi-messenger"></i> messenger
                </a>
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

export default ContactInfo;
