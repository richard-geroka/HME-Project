import teampic from '../../assets/images/hmeteam.png';

const AboutSection = () => {
  return (
    <>
      <section className="about" id="about">
        <h2 className="mb-3">Who we are and what we do -</h2>
        <div className="about-container-grid">
          <div className="col-image">
            <img src={teampic} alt="HME team picture" />
          </div>
          <div className="col-about-text">
            <p>
              We are a team of architects, engineers and builders. We will build
              your dream into reality.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              deleniti possimus saepe animi dolor dicta magni modi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              unde delectus quos molestiae autem laboriosam culpa
              exercitationem.
            </p>
            <button className="about-btn">Contact us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
