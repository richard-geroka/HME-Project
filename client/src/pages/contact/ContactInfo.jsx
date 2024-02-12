import Contacts from '../../components/Contacts';

const ContactInfo = () => {
  return (
    <>
      <section className="contact p-2">
        <div className="wrapper">
          <h2>For pricing and other inquiries, please contact us via</h2>
          <Contacts />
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
