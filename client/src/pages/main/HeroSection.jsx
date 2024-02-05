const HeroSection = () => {
  return (
    <>
      <section className="hero" id="home">
        <h1>
          HME <em>Construction Services</em>
        </h1>
        <p>
          <span className="text-plan">Plan.</span>{' '}
          <span className="text-design">Design.</span>{' '}
          <span className="text-build">Build.</span>
        </p>
        <p className="hero-dream">Your dream into reality</p>
        <button className="hero-btn">Learn more</button>
      </section>
    </>
  );
};

export default HeroSection;
