import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import design from '../../assets/images/plan-card1.png';
import build from '../../assets/images/build-card1.png';
import plan from '../../assets/images/3D-card1.png';
import permit from '../../assets/images/drawing-card1.png';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="services">
        {/* <h2 className="mb-5">
          WHAT WE <span className="underline-do">DO</span>
        </h2> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Card>
              <Card.Img variant="top" src={design} />
              <Card.Body>
                <Card.Title className="services-cards-titles">
                  Design
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={build} />
              <Card.Body>
                <Card.Title>Build</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={plan} />
              <Card.Body>
                <Card.Title>3D Plan</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card>
              <Card.Img variant="top" src={permit} />
              <Card.Body>
                <Card.Title>Permit Processing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <p className="services-p mt-5">
          <Button
            variant="outline-success"
            href="#contact"
            size="lg"
            className="me-1"
          >
            Contact us
          </Button>
          to learn more about our professional services.
        </p>
      </section>
    </>
  );
};

export default ServicesSection;
