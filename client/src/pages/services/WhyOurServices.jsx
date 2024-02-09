import handshake from '../../assets/images/handshake.png';

const WhyOurServices = () => {
  return (
    <>
      <div className="our-services-container">
        <h2>Why choose our services ?</h2>
        <div className="our-services-grid">
          <div className="services-image-col">
            <img src={handshake} alt="People shaking hand" />
          </div>
          <div className="services-text-col"></div>
        </div>
      </div>
    </>
  );
};

export default WhyOurServices;
