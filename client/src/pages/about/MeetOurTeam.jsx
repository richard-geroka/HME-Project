import architect from '../../assets/images/architect.png';
import engineer from '../../assets/images/engineer.png';
import manager from '../../assets/images/manager.png';
import builder from '../../assets/images/builder.png';
import otherBuilder from '../../assets/images/builder2.png';

const MeetOurTeam = () => {
  return (
    <>
      <section className="our-team">
        <div className="wrapper">
          <h2>Meet our team</h2>
          <div className="our-team-grid">
            <div className="our-team-col">
              <img src={architect} alt="HME Architect" />
              <p>Architect</p>
            </div>
            <div className="our-team-col">
              <img src={engineer} alt="HME engineer" />
              <p>Engineer</p>
            </div>
            <div className="our-team-col">
              <img src={manager} alt="HME manager" />
              <p>Manager</p>
            </div>
            <div className="our-team-col">
              <img src={builder} alt="HME builder" />
              <p>Builder</p>
            </div>
            <div className="our-team-col">
              <img src={otherBuilder} alt="HME builder" />
              <p>Builder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurTeam;
