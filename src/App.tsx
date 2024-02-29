import React from 'react';
import Introduction from './Introduction.tsx';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import Link from 

function App() {
  const myInfo = {
    name: ' Takuto Yokomaku',
    age: 25,
    hobbies: ['Reading', 'Coding', 'Traveling'],
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Introduction {...myInfo} />
              <a href='https://buttoned-kettle-f73.notion.site/My-portfolio-site-358cd5f2b7e843fe83961e95d2f4c2a7'>Learn More</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;