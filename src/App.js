import React from 'react';
import Introduction from './Introduction.tsx';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;