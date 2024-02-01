import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import design from '../../assets/images/design.png';
import build from '../../assets/images/build.png';
import plan from '../../assets/images/3dPlan.png';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="#services">
        <h2>What we do</h2>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={design} />
          <Card.Body>
            <Card.Title>Design</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={build} />
          <Card.Body>
            <Card.Title>Build</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={plan} />
          <Card.Body>
            <Card.Title>3D Plan</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default ServicesSection;