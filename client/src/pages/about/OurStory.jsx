import ourStoryImage from '../../assets/images/ourstory.png';
import corevalues from '../../assets/images/corevalues.png';

const OurStory = () => {
  return (
    <>
      <section className="about-our-story">
        <div className="wrapper">
          <div className="our-story-grid">
            <div className="our-story-image">
              <img src={ourStoryImage} alt="A man writing" />
            </div>
            <div className="our-story-text">
              <h3>Our Story</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo voluptate distinctio ducimus nobis ipsa quae, nemo
                rerum ad laudantium dicta vero placeat voluptatum tempore ut cum
                eos saepe, id odio.
              </p>
            </div>
            <div className="our-story-image">
              <img src={corevalues} alt="team holding hands" />
            </div>
            <div className="our-story-text">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                corrupti nostrum dolor eligendi illo, veritatis reiciendis fuga
                unde modi expedita? Accusamus esse doloribus amet commodi sit
                laborum ipsam laboriosam necessitatibus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
