const HeroSection = () => {
  return (
    <>
      <section className="hero" id="home">
        <h1>HME Construction Services</h1>
        <p>
          <span className="text-success">Plan.</span>{' '}
          <span className="text-white">Design.</span>{' '}
          <span className="text-danger">Build.</span>
        </p>
        <a className="hero-link" href="#projects">
          projects
        </a>
      </section>
    </>
  );
};

export default HeroSection;
