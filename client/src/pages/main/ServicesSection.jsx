import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import design from '../../assets/images/design2.png';
import build from '../../assets/images/build2.png';
import plan from '../../assets/images/3dPlan.png';
import permit from '../../assets/images/drawingService2.png';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="#services">
        <Container>
          <h2>What we do</h2>
          <Container fluid>
            <Row>
              <Col>
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={design} />
                  <Card.Body>
                    <Card.Title>Design</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={build} />
                  <Card.Body>
                    <Card.Title>Build</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={plan} />
                  <Card.Body>
                    <Card.Title>3D Plan</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={permit} />
                  <Card.Body>
                    <Card.Title>Permit Processing</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default ServicesSection;
