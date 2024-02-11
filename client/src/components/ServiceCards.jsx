/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import design from '../assets/images/design-card7.png';
import build from '../assets/images/build-card7.png';
import plan from '../assets/images/3D-card7.png';
import permit from '../assets/images/drawing-card7.png';
import renovation from '../assets/images/renovation-card7.png';
import fitout from '../assets/images/fitout-card7.png';

const ServiceCards = ({ isMainPage }) => {
  let isMain;

  if (isMainPage === 'true') {
    isMain = true;
  } else {
    isMain = false;
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
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
            <Card.Img variant="top" src={build} alt="a building being built" />
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
        {!isMain ? (
          <>
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
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card bg="success">
                <Card.Img
                  variant="top"
                  src={renovation}
                  alt="pencil on top of docs"
                />
                <Card.Body className="text-light">
                  <Card.Title>Renovation</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card bg="success">
                <Card.Img
                  variant="top"
                  src={fitout}
                  alt="pencil on top of docs"
                />
                <Card.Body className="text-light">
                  <Card.Title>Fit-out Works</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        ) : undefined}
      </div>
    </>
  );
};

export default ServiceCards;
