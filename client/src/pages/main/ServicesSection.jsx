import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import design from '../../assets/images/design-card5.png';
import build from '../../assets/images/build-card5.png';
import plan from '../../assets/images/3D-card5.png';
import permit from '../../assets/images/drawing-card5.png';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="services">
        {/* <h2 className="mb-5">
          WHAT WE <span className="underline-do">DO</span>
        </h2> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Card bg="success">
              <Card.Img variant="top" src={design} />
              <Card.Body className="text-light">
                <Card.Title>Design</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card bg="success">
              <Card.Img variant="top" src={build} />
              <Card.Body className="text-light">
                <Card.Title>Build</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card bg="success">
              <Card.Img variant="top" src={plan} />
              <Card.Body className="text-light">
                <Card.Title>3D Plan</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card bg="success">
              <Card.Img variant="top" src={permit} />
              <Card.Body className="text-light">
                <Card.Title>Permit Processing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <p className="services-p mt-5">OUR PROFESSIONAL SERVICES</p>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Button variant="success" size="lg" href="#contact">
            get a quote
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
