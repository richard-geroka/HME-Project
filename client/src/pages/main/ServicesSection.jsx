import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import design from '../../assets/images/design-card7.png';
import build from '../../assets/images/build-card7.png';
import plan from '../../assets/images/3D-card7.png';
import permit from '../../assets/images/drawing-card7.png';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="services">
        <h2 className="services-h2 mb-4 text-success">
          OUR PROFESSIONAL SERVICES
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Card bg="success">
              <Card.Img variant="top" src={design} alt="blue print design" />
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
              <Card.Img
                variant="top"
                src={build}
                alt="a building being built"
              />
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
              <Card.Img variant="top" src={plan} alt="3d plan of a house" />
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
              <Card.Img
                variant="top"
                src={permit}
                alt="pencil on top of docs"
              />
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
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <Button variant="danger" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
